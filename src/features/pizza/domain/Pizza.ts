export type Id = string
export type Name = string
export type Ingredients = string[]
export type Price = number

export default interface Pizza {
  readonly id: Id
  readonly name: Name
  readonly ingredients: Ingredients
  readonly price: Price
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
  return Object.freeze({
    ...getEmptyPizza(),
    ...pizza
  })
}

export function arePizzasEqual (pizza: Pizza, other: Pizza) {
  return pizza.id === other.id
}
