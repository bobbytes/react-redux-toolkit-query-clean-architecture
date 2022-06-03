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
  return Object.freeze({
    ...getEmptyAddress(),
    ...address
  })
}
