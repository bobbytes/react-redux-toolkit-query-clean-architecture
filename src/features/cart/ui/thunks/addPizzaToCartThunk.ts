import { createAsyncThunk } from '@reduxjs/toolkit'
import AddPizzaToCartUseCase from '../../../order/service/useCases/AddPizzaToCartUseCase'
import Pizza from '../../../pizza/domain/Pizza'
import Cart from '../../domain/Cart'

const addPizzaToCartThunk = createAsyncThunk<Cart, Pizza>(
  'cart/addPizza',
  async (pizza, { rejectWithValue, getState }) => {
    // TODO: handle state type
    const state = getState() as any
    const useCase = new AddPizzaToCartUseCase()
    const result = await useCase.execute({ cart: state.cart, pizza })

    if (result.isSuccess) {
      return result.value().cart
    }

    return rejectWithValue(result.error())
  }
)

export default addPizzaToCartThunk
