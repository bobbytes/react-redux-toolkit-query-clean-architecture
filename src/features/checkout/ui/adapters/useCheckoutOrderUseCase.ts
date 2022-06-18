import { NavigateFunction } from 'react-router-dom'
import RouterServiceAdapter from '../../../../shared/ui/hooks/adapters/RouterServiceAdapter'
import CheckoutOrderUseCase from '../../core/useCases/CheckoutOrderUseCase'

export default function useCheckoutOrderUseCase (navigate: NavigateFunction) {
  const routerService = new RouterServiceAdapter(navigate)

  return new CheckoutOrderUseCase(routerService)
}
