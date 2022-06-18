import { Result, UseCase } from '../../../../lib/domain'
import RouterService from '../../../../shared/core/ports/RouterService'
import Cart, { getItemsCount } from '../../../cart/core/models/Cart'
import EmptyCartError from '../../../cart/core/models/error/EmptyCartError'
import Order, { getNewOrder } from '../models/Order'

interface Context {
  cart: Cart
}

interface Value {
  order: Order
}

export default class CheckoutOrderUseCase implements UseCase<Context, Value> {
  constructor (private readonly router: RouterService) {}

  async execute ({ cart }: Context): Promise<Result<Value, string>> {
    try {
      const amount = getItemsCount(cart)

      if (amount <= 0) {
        throw new EmptyCartError()
      }

      const order = getNewOrder()

      this.router.goToCheckout()

      return Result.ok({ order })
    } catch (error) {
      return Result.fail('failed to checkout cart')
    }
  }
}
