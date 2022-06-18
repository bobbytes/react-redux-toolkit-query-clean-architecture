import produce from 'immer'

export default interface Pizza {
  readonly id: string
  readonly name: string
  readonly ingredients: string[]
  readonly price: number
}

const defaults: Pizza = {
  id: '',
  name: '',
  ingredients: [],
  price: 0
}

export function getNewPizza (pizza: Partial<Pizza> = {}): Pizza {
  return produce(defaults, (state) => ({
    id: pizza.id ?? state.id,
    name: pizza.name ?? state.name,
    ingredients: pizza.ingredients ?? state.ingredients,
    price: pizza.price ?? state.price
  }))
}

export function arePizzasEqual (pizza: Pizza, other: Pizza) {
  return pizza.id === other.id
}
