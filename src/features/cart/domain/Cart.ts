import Pizza, { arePizzasEqual } from '../../pizza/domain/Pizza'
import CartItem, { getNewCartItem, getCartItemTotalAmount } from './CartItem'
import MaxCartItemAmountError from './error/MaxCartItemAmountError'
import MinCartItemAmountError from './error/MinCartItemAmountError'
import CartItemNotFoundError from './error/CartItemNotFoundError'

export default interface Cart {
  readonly items: CartItem[];
}

export function getNewCart (cart?: Partial<Cart>): Cart {
  const defaultValues: Cart = {
    items: []
  }

  return Object.freeze({
    ...defaultValues,
    ...cart
  })
}

export function addPizza (cart: Cart, pizza: Pizza) {
  const existingPizza = findPizza(cart, pizza)

  if (!existingPizza) {
    const newItems = [
      ...cart.items,
      getNewCartItem({ pizza, amount: 1 })
    ]

    return getNewCart({ ...cart, items: newItems })
  }

  const newAmount = existingPizza.amount + 1

  if (newAmount > 10) {
    throw new MaxCartItemAmountError()
  }

  const newItems = cart.items.map((item) => {
    if (!arePizzasEqual(item.pizza, pizza)) {
      return item
    }

    return getNewCartItem({ ...item, amount: newAmount })
  })

  return getNewCart({ ...cart, items: newItems })
}

export function removePizza (cart: Cart, pizza: Pizza) {
  const existingItem = findPizza(cart, pizza)

  if (!existingItem) {
    throw new CartItemNotFoundError()
  }

  const newAmount = existingItem.amount - 1

  if (newAmount < 0) {
    throw new MinCartItemAmountError()
  }

  const newItems = cart.items.reduce<CartItem[]>((accumulator, item) => {
    if (!arePizzasEqual(item.pizza, pizza)) {
      accumulator.push(item)
      return accumulator
    }

    if (newAmount === 0) {
      return accumulator
    }

    const newItem = getNewCartItem({ ...item, amount: newAmount })
    accumulator.push(newItem)

    return accumulator
  }, [])

  return getNewCart({ ...cart, items: newItems })
}

export function getCartTotalAmount (cart: Cart): number {
  return cart.items.reduce((total, cartItem) => {
    return total + getCartItemTotalAmount(cartItem)
  }, 0)
}

function findPizza (cart: Cart, pizza: Pizza) {
  return cart.items.find((item) => arePizzasEqual(item.pizza, pizza))
}
