import { Result } from '../../../../lib/domain'
import Pizza from '../../domain/Pizza'

export default interface PizzaRepository {
  getAll(): Promise<Result<Pizza[], string>>
  getById(id: string): Promise<Result<Pizza, string>>
}
