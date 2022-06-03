import { Result, UseCase } from '../../../../lib/domain'
import Pizza, { Id } from '../../domain/Pizza'
import PizzaRepository from '../ports/PizzaRepository'

interface Context {
  id: Id
}

export default class GetPizzaByIdUseCase implements UseCase<Context, Pizza> {
  constructor (private readonly pizzaRepository: PizzaRepository) {}

  async execute ({ id }: Context): Promise<Result<Pizza, string>> {
    const result = await this.pizzaRepository.getById(id)

    if (result.isSuccess) {
      const pizza = await result.value()
      return Result.ok(pizza)
    } else {
      return Result.fail('could not load pizza form server')
    }
  }
}
