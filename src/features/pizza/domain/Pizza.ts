import produce from 'immer'

export default interface Pizza {
  id: string
  name: string
  ingredients: string[]
  price: number
}

export const createNewPizza = (pizza: Pizza) => produce(pizza, (pizzaState) => {})
