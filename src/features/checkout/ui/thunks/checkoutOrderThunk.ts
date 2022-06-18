import { createAsyncThunk } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router-dom'
import Order from '../../core/models/Order'
import useCheckoutOrderUseCase from '../adapters/useCheckoutOrderUseCase'

type CheckoutOrderThunkPayload = {
  navigate: NavigateFunction
}

const checkoutOrderThunk = createAsyncThunk<Order, CheckoutOrderThunkPayload>(
  'checkout/checkoutOrder',
  async ({ navigate }, { rejectWithValue, getState }) => {
    // TODO: handle state type
    const state = getState() as any
    const useCase = useCheckoutOrderUseCase(navigate)
    const result = await useCase.execute({ cart: state.cart })

    if (result.isSuccess) {
      return result.value().order
    }

    return rejectWithValue(result.error())
  }
)

export default checkoutOrderThunk
