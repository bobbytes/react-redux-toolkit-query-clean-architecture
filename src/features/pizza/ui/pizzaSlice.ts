import { injectEndpoints } from '../../../app/plugins/store'
import Pizza from '../core/models/Pizza'
import useGetAllPizzaUseCase from './adapters/useGetAllPizzaUseCase'
import useGetPizzaByIdUseCase from './adapters/useGetPizzaByIdUseCase'

const pizzaSlice = injectEndpoints({
  endpoints: (builder) => ({
    getAllPizza: builder.query<Pizza[], void>({
      async queryFn () {
        const getAllPizzaUseCase = useGetAllPizzaUseCase()

        const response = await getAllPizzaUseCase.execute()

        if (response.isFailure) {
          return { error: response.error() as any }
        }

        return { data: response.value().pizzas }
      }
    }),
    getPizzaById: builder.query<Pizza, string>({
      async queryFn (id) {
        const getAllPizzaUseCase = useGetPizzaByIdUseCase()

        const response = await getAllPizzaUseCase.execute({ id })

        if (response.isFailure) {
          return { error: response.error() as any }
        }

        return { data: response.value().pizza }
      }
    })
  })
})

export const {
  useGetAllPizzaQuery,
  useGetPizzaByIdQuery
} = pizzaSlice
