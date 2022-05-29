import { createNewPizza } from '../../../domain/Pizza';
import PizzaDto from './PizzaDto';

export const mapPizzaDtoToPizza = (pizzaDto: PizzaDto) => createNewPizza({
  id: pizzaDto.id,
  name: pizzaDto.name,
  ingredients: pizzaDto.ingredients,
  price: pizzaDto.price
})
