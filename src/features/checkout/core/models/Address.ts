import produce from 'immer'

export default interface Address {
  readonly postalCode: string
  readonly city: string
  readonly street: string
  readonly streetNumber: string
}

const defaults: Address = {
  postalCode: '',
  city: '',
  street: '',
  streetNumber: ''
}

export function getNewAddress (address: Partial<Address> = {}): Address {
  return produce(defaults, (state) => ({
    postalCode: address.postalCode ?? state.postalCode,
    city: address.city ?? state.city,
    street: address.street ?? state.street,
    streetNumber: address.streetNumber ?? state.streetNumber
  }))
}
