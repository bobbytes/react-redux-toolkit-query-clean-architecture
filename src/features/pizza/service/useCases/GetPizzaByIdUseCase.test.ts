import { it, describe, expect } from 'vitest'
import PizzaApi from '../../infrastructure/PizzaApi'
import GetPizzaByIdUseCase from './GetPizzaByIdUseCase'

describe('service: GetPizzaByIdUseCase', () => {
  it('should a pizza by id from the api', async () => {
    const pizzaApi = new PizzaApi()
    const useCase = new GetPizzaByIdUseCase(pizzaApi)

    const result = await useCase.execute({ id: PizzaApi.pizzas[0].id })

    expect(result.isSuccess)
    expect(result.value().pizza.name).toBe('Hawaii')
  })
})
