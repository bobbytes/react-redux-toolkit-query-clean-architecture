import { injectEndpoints } from '../../../app/plugins/store'
import Pizza from '../domain/Pizza'
import PizzaApi from '../infrastructure/PizzaApi'
import GetAllPizzasUseCase from '../service/useCases/GetAllPizzasUseCase'
import GetPizzaByIdUseCase from '../service/useCases/GetPizzaByIdUseCase'

const pizzaSlice = injectEndpoints({
  endpoints: (builder) => ({
    getAllPizza: builder.query<Pizza[], void>({
      async queryFn () {
        const pizzaRepository = new PizzaApi()
        const getAllPizzaUseCase = new GetAllPizzasUseCase(pizzaRepository)

        const response = await getAllPizzaUseCase.execute()

        if (response.isFailure) {
          return { error: response.error() as any }
        }

        return { data: response.value() }
      }
    }),
    getPizzaById: builder.query<Pizza, string>({
      async queryFn (id) {
        const pizzaRepository = new PizzaApi()
        const getAllPizzaUseCase = new GetPizzaByIdUseCase(pizzaRepository)

        const response = await getAllPizzaUseCase.execute({ id })

        if (response.isFailure) {
          return { error: response.error() as any }
        }

        return { data: response.value() }
      }
    })
  })
})

export const {
  useGetAllPizzaQuery,
  useGetPizzaByIdQuery
} = pizzaSlice
