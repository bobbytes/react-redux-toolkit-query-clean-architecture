import { Result } from '../../../../lib/domain'
import Pizza, { Id } from '../../domain/Pizza'

export default interface PizzaRepository {
  getAll(): Promise<Result<Pizza[], string>>
  getById(id: Id): Promise<Result<Pizza, string>>
}
