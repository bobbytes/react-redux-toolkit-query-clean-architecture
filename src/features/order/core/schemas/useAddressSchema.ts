import { object, string, SchemaOf } from 'yup'
import Address from '../models/Address'

export default function useAddressSchema (): SchemaOf<Address> {
  return object({
    postalCode: string().defined().required().length(4),
    city: string().defined().required(),
    street: string().defined().required(),
    streetNumber: string().defined().required()
  })
}
