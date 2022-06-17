import IngredientDto from './IngredientDto'

export default interface PizzaDto {
  id: string
  name: string
  ingredients: IngredientDto[]
  price: number
}
