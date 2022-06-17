import GetAllPizzasUseCase from '../../core/useCases/GetAllPizzasUseCase'
import PizzaApi from './PizzaApi'

export default function useGetAllPizzaUseCase () {
  const pizzaRepository = new PizzaApi()
  return new GetAllPizzasUseCase(pizzaRepository)
}
