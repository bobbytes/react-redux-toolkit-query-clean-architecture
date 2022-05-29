import { rest } from 'msw'
import pizzaHawaii from './data/pizzaHawaii'
import pizzaMargherita from './data/pizzaMargherita'
import pizzaProsciutto from './data/pizzaProsciutto'
import pizzas from './data/pizzas'

const baseUrl = 'http://localhost:3030/api';

export const handlers = [
  rest.get(`${baseUrl}/pizzas`, (request, response, context) => response(context.json(pizzas))),
  rest.get(`${baseUrl}/pizzas/${pizzaHawaii.id}`, (request, response, context) => response(context.json(pizzaHawaii))),
  rest.get(`${baseUrl}/pizzas/${pizzaProsciutto.id}`, (request, response, context) => response(context.json(pizzaProsciutto))),
  rest.get(`${baseUrl}/pizzas/${pizzaMargherita.id}`, (request, response, context) => response(context.json(pizzaMargherita))),
]
