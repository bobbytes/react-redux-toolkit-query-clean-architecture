import produce from 'immer'

export type Id = string
export type Name = string
export type Ingredients = string[]
export type Price = number

export default interface Pizza {
  id: Id
  name: Name
  ingredients: Ingredients
  price: Price
}

export function getEmptyPizza (): Pizza {
  return {
    id: '',
    name: '',
    ingredients: [],
    price: 0
  }
}

export function getNewPizza (pizza?: Partial<Pizza>): Pizza {
  return produce(getEmptyPizza(), (newPizzaState) => {
    newPizzaState.id = pizza?.id ?? newPizzaState.id
    newPizzaState.name = pizza?.name ?? newPizzaState.name
    newPizzaState.ingredients = pizza?.ingredients ?? newPizzaState.ingredients
    newPizzaState.price = pizza?.price ?? newPizzaState.price
  })
}

export function arePizzasEqual (pizza: Pizza, other: Pizza) {
  return pizza.id === other.id
}
