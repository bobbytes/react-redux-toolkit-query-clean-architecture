import produce from 'immer'
import Contact, { getNewContact } from './Contact'
import Address, { getNewAddress } from './Address'

export default interface Order {
  readonly contact: Contact
  readonly deliveryAddress: Address
}

const defaults: Order = {
  contact: getNewContact(),
  deliveryAddress: getNewAddress()
}

export function getNewOrder (order: Partial<Order> = {}): Order {
  return produce(defaults, (state) => ({
    contact: order.contact ? getNewContact(order.contact) : state.contact,
    deliveryAddress: order.deliveryAddress ? getNewAddress(order.deliveryAddress) : state.deliveryAddress
  }))
}
