import produce from 'immer'

export type Gender = 'male' | 'female'

export default interface Contact {
  readonly gender: Gender
  readonly firstName: string
  readonly lastName: string
  readonly wantsNewsletter: boolean
  readonly email?: string
}

const defaults: Contact = {
  gender: 'male',
  firstName: '',
  lastName: '',
  wantsNewsletter: false,
  email: ''
}

export function getNewContact (contact: Partial<Contact> = {}): Contact {
  return produce(defaults, (state) => ({
    gender: contact.gender ?? state.gender,
    firstName: contact.firstName ?? state.firstName,
    lastName: contact.lastName ?? state.lastName,
    wantsNewsletter: contact.wantsNewsletter ?? state.wantsNewsletter,
    email: contact.email ?? state.email
  }))
}
