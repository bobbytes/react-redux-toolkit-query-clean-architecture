import { createSelector, createSlice } from '@reduxjs/toolkit'
import store from '../../../app/plugins/store'
import Cart, { getCartTotalAmount, getNewCart } from '../core/models/Cart'
import addPizzaToCartThunk from './thunks/addPizzaToCartThunk'
import removePizzaFromCartThunk from './thunks/removePizzaFromCartThunk'

type CartState = Cart

const initialState: CartState = getNewCart()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(addPizzaToCartThunk.fulfilled, (state, action) => {
      state.items = action.payload.items
    })
    .addCase(removePizzaFromCartThunk.fulfilled, (state, action) => {
      state.items = action.payload.items
    })
})

export default cartSlice

type RootState = ReturnType<typeof store.getState>

const selectSelf = (state: RootState): CartState => state.cart

export const selectCartItems = createSelector(
  selectSelf,
  (state: CartState) => state.items
)

export const selectCartTotalAmount = createSelector(
  selectSelf,
  (state: CartState) => getCartTotalAmount(state)
)
