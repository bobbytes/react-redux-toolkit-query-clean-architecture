export default interface Pizza {
  readonly id: string
  readonly name: string
  readonly ingredients: string[]
  readonly price: number
}

export function getNewPizza (pizza?: Partial<Pizza>): Pizza {
  const defaultValues: Pizza = {
    id: '',
    name: '',
    ingredients: [],
    price: 0
  }

  return Object.freeze({
    ...defaultValues,
    ...pizza
  })
}

export function arePizzasEqual (pizza: Pizza, other: Pizza) {
  return pizza.id === other.id
}
