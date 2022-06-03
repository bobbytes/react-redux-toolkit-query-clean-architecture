import React from 'react'
import { useGetAllPizzaQuery } from '../pizzaSlice'
import PizzaList from '../components/PizzaList'

const PizzaPage = () => {
  const { data: pizzas = [] } = useGetAllPizzaQuery()

  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  )
}

export default PizzaPage
