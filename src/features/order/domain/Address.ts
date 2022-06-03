import produce from 'immer'

export type PostalCode = string
export type City = string
export type Street = string
export type StreetNumber = string

export default interface Address {
  readonly postalCode: PostalCode
  readonly city: City
  readonly street: Street
  readonly streetNumber: StreetNumber
}

export function getEmptyAddress (): Address {
  return {
    postalCode: '',
    city: '',
    street: '',
    streetNumber: ''
  }
}

export function getNewAddress (address?: Partial<Address>): Address {
  return produce(getEmptyAddress(), (newAddressState) => {
    newAddressState.postalCode = address?.postalCode ?? newAddressState.postalCode
    newAddressState.city = address?.city ?? newAddressState.city
    newAddressState.street = address?.street ?? newAddressState.street
    newAddressState.streetNumber = address?.streetNumber ?? newAddressState.streetNumber
  })
}
