import { Result } from '../../../../lib/domain'
import Pizza from '../../core/models/Pizza'

export default interface PizzaRepository {
  getAll(): Promise<Result<Pizza[], string>>
  getById(id: string): Promise<Result<Pizza, string>>
}
