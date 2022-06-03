import produce from 'immer'

export type Gender = 'male' | 'female'
export type FirstName = string
export type LastName = string
export type WantsNewsletter = boolean
export type Email = string

export default interface Contact {
  readonly gender: Gender,
  readonly firstName: FirstName,
  readonly lastName: LastName,
  readonly wantsNewsletter: WantsNewsletter,
  readonly email?: Email
}

export function getEmptyContact (): Contact {
  return {
    gender: 'male',
    firstName: '',
    lastName: '',
    wantsNewsletter: false,
    email: ''
  }
}

export function getNewContact (contact?: Partial<Contact>): Contact {
  return produce(getEmptyContact(), (newContactState) => {
    newContactState.gender = contact?.gender ?? newContactState.gender
    newContactState.firstName = contact?.firstName ?? newContactState.firstName
    newContactState.lastName = contact?.lastName ?? newContactState.lastName
    newContactState.wantsNewsletter = contact?.wantsNewsletter ?? newContactState.wantsNewsletter
    newContactState.email = contact?.email ?? newContactState.email
  })
}
