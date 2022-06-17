import { describe, it, expect } from 'vitest'
import { pizzaHawaii, pizzaProsciutto } from './mocks/pizzaMock'
import { arePizzasEqual, getNewPizza } from './Pizza'

describe('Domain: Pizza', () => {
  describe('constructor', () => {
    it('should create a new instance', () => {
      const pizza = getNewPizza(pizzaHawaii)

      expect(pizza.id).toBe('5de2eb2a-39ad-47a8-b1b7-5bff63554502')
      expect(pizza.name).toBe('Hawaii')

      expect(pizza.ingredients).toEqual([
        'Tomato sauce',
        'Mozzarella',
        'Ham',
        'Pineapple'
      ])

      expect(pizza.price).toBe(20)
    })

    it('should create an empty instance', () => {
      const pizza = getNewPizza()

      expect(pizza.id).toBe('')
      expect(pizza.name).toBe('')
      expect(pizza.ingredients).toEqual([])
      expect(pizza.price).toBe(0)
    })
  })

  describe('isEqual', () => {
    it('Pizza Hawaii should be equal to pizza Hawaii', () => {
      expect(arePizzasEqual(pizzaHawaii, pizzaHawaii))
    })

    it('Pizza Hawaii should not be equal to Pizza', () => {
      expect(arePizzasEqual(pizzaHawaii, pizzaProsciutto)).toBeFalsy()
    })
  })
})
