import { createSelector, createSlice } from '@reduxjs/toolkit'
import store from '../../../app/plugins/store'
import Order, { getNewOrder } from '../core/models/Order'
import checkoutOrderThunk from './thunks/checkoutOrderThunk'

type CheckoutState = Order

const initialState: CheckoutState = getNewOrder()

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(checkoutOrderThunk.fulfilled, (state, action) => {
      state.contact = action.payload.contact
      state.deliveryAddress = action.payload.deliveryAddress
    })
})

export default checkoutSlice

type RootState = ReturnType<typeof store.getState>

const selectSelf = (state: RootState): CheckoutState => state.checkout

export const selectCheckout = createSelector(
  selectSelf,
  (state: CheckoutState) => state
)
