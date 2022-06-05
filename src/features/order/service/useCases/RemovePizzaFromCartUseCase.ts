import { Result, UseCase } from '../../../../lib/domain'
import Cart, { removePizza } from '../../../cart/domain/Cart'
import Pizza from '../../../pizza/domain/Pizza'

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
