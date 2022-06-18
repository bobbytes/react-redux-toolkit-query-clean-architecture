import { NavigateFunction } from 'react-router-dom'
import RouterService from '../../../core/ports/RouterService'

export default class RouterServiceAdapter implements RouterService {
  constructor (private readonly navigate: NavigateFunction) {}

  public async goToPizzaList () {
    this.navigate('/')
  }

  public async goToCheckout () {
    this.navigate('/checkout')
  }
}
