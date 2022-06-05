import { createAsyncThunk } from '@reduxjs/toolkit'
import RemovePizzaFromCartUseCase from '../../../order/service/useCases/RemovePizzaFromCartUseCase'
import Pizza from '../../../pizza/domain/Pizza'
import Cart from '../../domain/Cart'

const removePizzaFromCartThunk = createAsyncThunk<Cart, Pizza>(
  'cart/removePizza',
  async (pizza, { rejectWithValue, getState }) => {
    // TODO: handle state type
    const state = getState() as any
    const useCase = new RemovePizzaFromCartUseCase()
    const result = await useCase.execute({ cart: state.cart, pizza })

    if (result.isSuccess) {
      return result.value().cart
    }

    return rejectWithValue(result.error())
  }
)

export default removePizzaFromCartThunk
