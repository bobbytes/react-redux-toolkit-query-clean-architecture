import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import cartSlice from '../../features/cart/ui/cartSlice'
import checkoutSlice from '../../features/checkout/ui/checkoutSlice'

const { reducerPath, reducer, middleware, injectEndpoints } = createApi({
  // replace with axios or plain fetch
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3030/api'
  }),
  endpoints: () => ({})
})

export {
  injectEndpoints
}

const store = configureStore({
  reducer: {
    [reducerPath]: reducer,
    [cartSlice.name]: cartSlice.reducer,
    [checkoutSlice.name]: checkoutSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
