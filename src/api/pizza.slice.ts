import FetchBaseQueryAdapter from '../lib/http/fetchBaseQuery.adapter';
import Pizza from '../domain/Pizza';
import {injectEndpoints} from '../ui/plugins/store';
import { mapPizzaDtoToPizza } from '../application/pizza/dtos/pizza.dtoMapper';
import PizzaDto from '../application/pizza/dtos/PizzaDto';
import GetAllPizzaUseCase from '../application/pizza/GetAllPizza.case';

const pizzaSlice = injectEndpoints({
  endpoints: (builder) => ({
    getAllPizza: builder.query<Pizza[], void>({
      async queryFn(_arguments, _queryApi, _extraOptions, fetchWithBaseQuery) {
        const fetchWithBaseQueryAdapter = new FetchBaseQueryAdapter(fetchWithBaseQuery)
        const getAllPizzaUseCase = new GetAllPizzaUseCase(fetchWithBaseQueryAdapter);

        const response = await getAllPizzaUseCase.execute();

        if(response.isFailure) {
          return {error: response.error() as any};
        }

        return {data: response.value()};
      },
    }),
    getPizzaById: builder.query<Pizza, string>({
      query: (id) => ({
        url: `/pizzas/${id}`,
        method: 'GET',
        transformResponse: (pizza: PizzaDto) => mapPizzaDtoToPizza(pizza)
      }),
    }),
  })
})

export const {
  useGetAllPizzaQuery,
  useGetPizzaByIdQuery,
} = pizzaSlice;
