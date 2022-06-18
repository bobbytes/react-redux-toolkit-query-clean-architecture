export default interface Address {
  readonly postalCode: string
  readonly city: string
  readonly street: string
  readonly streetNumber: string
}

export function getNewAddress (address?: Partial<Address>): Address {
  const defaultValues: Address = {
    postalCode: '',
    city: '',
    street: '',
    streetNumber: ''
  }

  return Object.freeze({
    ...defaultValues,
    ...address
  })
}
