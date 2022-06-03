import produce from 'immer'
import Contact, { getEmptyContact } from './Contact'
import Address, { getEmptyAddress } from './Address'

export default interface Order {
  readonly contact: Contact
  readonly deliveryAddress: Address
}

export function getEmptyOrder (): Order {
  return {
    contact: getEmptyContact(),
    deliveryAddress: getEmptyAddress()
  }
}

export function getNewOrder (order?: Partial<Order>): Order {
  return produce(getEmptyOrder(), (newOrderState) => {
    newOrderState.contact = order?.contact ?? newOrderState.contact
    newOrderState.deliveryAddress = order?.deliveryAddress ?? newOrderState.deliveryAddress
  })
}
