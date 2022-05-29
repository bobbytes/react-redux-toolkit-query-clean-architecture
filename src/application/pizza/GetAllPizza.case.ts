import { Result, UseCase } from '../../lib/domain';
import { HttpAdapter } from '../../lib/http/http';
import Pizza from '../../domain/Pizza';
import { mapPizzaDtoToPizza } from './dtos/pizza.dtoMapper';
import PizzaDto from './dtos/PizzaDto';

interface Context {}

class GetAllPizzaUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly http: HttpAdapter) {}

  async execute(): Promise<Result<Pizza[], string>> {
    const response = await this.http.get<PizzaDto[]>('/pizzas')

    if (response.ok) {
      const json = await response.json()
      const pizzas = json.map((pizzaDto) => mapPizzaDtoToPizza(pizzaDto))
      return Result.ok(pizzas)
    } else {
      return Result.fail('Could not load pizzas form server')
    }
  }
}

export default GetAllPizzaUseCase;
