import { DomainError } from '../../../../../lib/domain'

export default class MaxCartItemAmountError extends DomainError {
  constructor (...params: any[]) {
    super('CartItemNotFoundError', ...params)
  }
}
