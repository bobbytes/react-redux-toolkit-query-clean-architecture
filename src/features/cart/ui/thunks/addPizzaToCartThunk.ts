import { createAsyncThunk } from '@reduxjs/toolkit'
import Pizza from '../../../pizza/core/models/Pizza'
import Cart from '../../core/models/Cart'
import AddPizzaToCartUseCase from '../../core/useCases/AddPizzaToCartUseCase'

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
