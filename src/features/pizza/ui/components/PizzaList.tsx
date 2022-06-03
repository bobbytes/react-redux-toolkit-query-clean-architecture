import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import Pizza from '../../domain/Pizza'
import PizzaCard from './PizzaCard'

type PizzaListProps = {
  pizzas: Pizza[]
}

const PizzaList: FC<PizzaListProps> = ({ pizzas = [] }) => {
  return (
    <Grid container spacing={3}>
      {pizzas.map((pizza) => (
        <Grid key={pizza.id} item>
          <PizzaCard pizza={pizza} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PizzaList
