import { injectEndpoints } from '../../../app/plugins/store'
import CartItem from '../domain/CartItem'

const orderSlice = injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<CartItem, void>({
      async queryFn () {
        return { data: null, error: null }
      }
    })
  })
})

export const {
  useGetCartQuery
} = orderSlice
