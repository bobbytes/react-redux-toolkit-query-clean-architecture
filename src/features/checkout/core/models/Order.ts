import Contact, { getNewContact } from './Contact'
import Address, { getNewAddress } from './Address'

export default interface Order {
  readonly contact: Contact
  readonly deliveryAddress: Address
}

export function getNewOrder (order: Partial<Order> = {}): Order {
  const defaultValues: Order = {
    contact: getNewContact(order.contact),
    deliveryAddress: getNewAddress(order.deliveryAddress)
  }

  return Object.freeze({
    ...defaultValues,
    ...order
  })
}
