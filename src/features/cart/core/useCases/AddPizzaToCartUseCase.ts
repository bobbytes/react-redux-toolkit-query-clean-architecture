import { Result, UseCase } from '../../../../lib/domain'
import Pizza from '../../../pizza/core/models/Pizza'
import Cart, { addPizza } from '../models/Cart'

interface Context {
  cart: Cart,
  pizza: Pizza
}

interface Value {
  cart: Cart
}

export default class AddPizzaToCartUseCase implements UseCase<Context, Value> {
  async execute ({ cart, pizza }: Context): Promise<Result<Value, string>> {
    try {
      const newCart = addPizza(cart, pizza)

      return Result.ok({ cart: newCart })
    } catch (error) {
      return Result.fail('failed to add pizza to cart')
    }
  }
}
