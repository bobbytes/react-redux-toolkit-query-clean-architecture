export default interface RouterService {
  goToPizzaList: () => Promise<void>
  goToCheckout: () => Promise<void>
}
