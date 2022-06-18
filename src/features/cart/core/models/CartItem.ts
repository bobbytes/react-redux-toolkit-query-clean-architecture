import produce from 'immer'
import Pizza, { getNewPizza } from '../../../pizza/core/models/Pizza'

export default interface CartItem {
  readonly pizza: Pizza,
  readonly amount: number
}

const defaults: CartItem = {
  pizza: getNewPizza(),
  amount: 0
}

export function getNewCartItem (cartItem: Partial<CartItem> = {}): CartItem {
  return produce(defaults, (state) => ({
    pizza: cartItem.pizza ? getNewPizza(cartItem.pizza) : state.pizza,
    amount: cartItem.amount ?? state.amount
  }))
}

export function getCartItemTotalAmount (cartItem: CartItem) {
  return cartItem.pizza.price * cartItem.amount
}
