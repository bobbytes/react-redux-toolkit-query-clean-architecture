export type Gender = 'male' | 'female'

export default interface Contact {
  readonly gender: Gender
  readonly firstName: string
  readonly lastName: string
  readonly wantsNewsletter: boolean
  readonly email?: string
}

export function getNewContact (contact?: Partial<Contact>): Contact {
  const defaultValues: Contact = {
    gender: 'male',
    firstName: '',
    lastName: '',
    wantsNewsletter: false,
    email: ''
  }

  return Object.freeze({
    ...defaultValues,
    ...contact
  })
}
