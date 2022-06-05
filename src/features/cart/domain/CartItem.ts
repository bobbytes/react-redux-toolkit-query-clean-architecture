import Pizza, { getNewPizza } from '../../pizza/domain/Pizza'

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