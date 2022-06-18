import { object, string, mixed, SchemaOf, boolean } from 'yup'
import Contact from '../models/Contact'

export default function useContactSchema (): SchemaOf<Contact> {
  return object({
    firstName: string().defined().required(),
    lastName: string().defined().required(),
    gender: mixed().oneOf(['male', 'female']).defined().required(),
    wantsNewsletter: boolean().required(),
    email: string()
      .email()
      .when('wantsNewsletter', {
        is: true,
        then: (schema) => schema.required(),
        otherwise: (schema) => schema
      })
  })
}
