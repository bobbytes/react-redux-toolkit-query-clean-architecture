import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useGetAllPizzaQuery } from '../pizzaSlice'
import PizzaCard from './PizzaCard'

const PizzaList: FC = () => {
  const { data: pizzas = [] } = useGetAllPizzaQuery()

  return (
    <>
      <Typography color="primary" variant="h2" gutterBottom>
        Pizzas
      </Typography>
      <Grid container spacing={3}>
        {pizzas.map((pizza) => (
          <Grid key={pizza.id} item xs={12}>
            <PizzaCard pizza={pizza} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PizzaList
