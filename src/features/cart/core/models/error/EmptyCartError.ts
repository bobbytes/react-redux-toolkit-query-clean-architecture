import { DomainError } from '../../../../../lib/domain'

export default class EmptyCartError extends DomainError {
  constructor (...params: any[]) {
    super('EmptyCartError', ...params)
  }
}
