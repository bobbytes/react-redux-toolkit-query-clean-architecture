import GetPizzaByIdUseCase from '../../core/useCases/GetPizzaByIdUseCase'
import PizzaApi from './PizzaApi'

export default function useGetPizzaByIdUseCase () {
  const pizzaRepository = new PizzaApi()
  return new GetPizzaByIdUseCase(pizzaRepository)
}
