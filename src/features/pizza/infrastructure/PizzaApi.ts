import { Result } from '../../../lib/domain'
import Pizza, { getNewPizza, Id } from '../domain/Pizza'
import PizzaRepository from '../service/ports/PizzaRepository'
import PizzaDto from './dtos/PizzaDto'

export default class PizzaApi implements PizzaRepository {
  private pizzas: PizzaDto[] = [
    {
      id: '5de2eb2a-39ad-47a8-b1b7-5bff63554502',
      name: 'Hawaii',
      ingredients: [
        { name: 'Tomato sauce' },
        { name: 'Mozzarella' },
        { name: 'Ham' },
        { name: 'Pineapple' }
      ],
      price: 20
    },
    {
      id: 'd5b806ee-db8c-418f-ad26-146c32a89e2a',
      name: 'Prosciutto',
      ingredients: [
        { name: 'Tomato sauce' },
        { name: 'Mozzarella' },
        { name: 'Ham' }
      ],
      price: 15
    },
    {
      id: '4582828b-d522-4fd6-99e3-3e58a2951158',
      name: 'Margherita',
      ingredients: [
        { name: 'Tomato sauce' },
        { name: 'Mozzarella' }
      ],
      price: 10
    }
  ]

  private mapDtoToPizza (pizzaDto: PizzaDto): Pizza {
    return getNewPizza({
      id: pizzaDto.id,
      name: pizzaDto.name,
      ingredients: pizzaDto.ingredients.map(({ name }) => name),
      price: pizzaDto.price
    })
  }

  public async getAll () {
    await this.wait()
    const pizzas = this.pizzas.map((pizzaDto) => this.mapDtoToPizza(pizzaDto))
    return Result.ok(pizzas)
  }

  public async getById (id: Id) {
    await this.wait()
    const pizzaDto = this.pizzas.find(pizza => pizza.id === id)

    return pizzaDto
      ? Result.ok(this.mapDtoToPizza(pizzaDto))
      : Result.fail<Pizza, string>('no matching pizza found')
  }

  private wait () {
    return new Promise((resolve) => setTimeout(() => resolve(undefined), 1200))
  }
}
