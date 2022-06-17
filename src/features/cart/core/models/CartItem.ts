import Pizza, { getNewPizza } from '../../../pizza/core/models/Pizza'

export default interface CartItem {
  readonly pizza: Pizza,
  readonly amount: number
}

export function getNewCartItem (cartItem?: Partial<CartItem>): CartItem {
  const defaultValues: CartItem = {
    pizza: getNewPizza(),
    amount: 0
  }

  return Object.freeze({
    ...defaultValues,
    ...cartItem
  })
}

export function getCartItemTotalAmount (cartItem: CartItem) {
  return cartItem.pizza.price * cartItem.amount
}
