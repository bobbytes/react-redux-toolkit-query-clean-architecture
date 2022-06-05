import { Result, UseCase } from '../../../../lib/domain'
import Cart, { addPizza } from '../../../cart/domain/Cart'
import Pizza from '../../../pizza/domain/Pizza'

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
