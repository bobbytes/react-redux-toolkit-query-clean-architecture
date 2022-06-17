import { Result, UseCase } from '../../../../lib/domain'
import Pizza from '../../../pizza/core/models/Pizza'
import Cart, { removePizza } from '../models/Cart'

interface Context {
  cart: Cart,
  pizza: Pizza
}

interface Value {
  cart: Cart
}

export default class RemovePizzaFromCartUseCase implements UseCase<Context, Value> {
  async execute ({ cart, pizza }: Context): Promise<Result<Value, string>> {
    try {
      const newCart = removePizza(cart, pizza)

      return Result.ok({ cart: newCart })
    } catch (error) {
      return Result.fail('failed to remove pizza from cart')
    }
  }
}
