import { Result, UseCase } from '../../../../lib/domain'
import Pizza from '../../domain/Pizza'
import PizzaRepository from '../ports/PizzaRepository'

interface Context {}

interface Value {
  pizzas: Pizza[]
}

export default class GetAllPizzasUseCase implements UseCase<Context, Value> {
  constructor (private readonly pizzaRepository: PizzaRepository) {}

  async execute (): Promise<Result<Value, string>> {
    const result = await this.pizzaRepository.getAll()

    if (result.isSuccess) {
      const pizzas = await result.value()
      return Result.ok({ pizzas })
    } else {
      return Result.fail('could not load pizzas form server')
    }
  }
}
