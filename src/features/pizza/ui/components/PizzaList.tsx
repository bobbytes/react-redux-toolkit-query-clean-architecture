import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useGetAllPizzaQuery } from '../pizzaSlice'
import PizzaCard from './PizzaCard'
import PizzaListLoadingIndicator from './PizzaListLoadingIndicator'

const PizzaList: FC = () => {
  const { isLoading, isSuccess, data: pizzas = [] } = useGetAllPizzaQuery()

  return (
    <>
      <Typography color="primary" variant="h2" gutterBottom>
        Pizzas
      </Typography>
      {isLoading && (
        <PizzaListLoadingIndicator />
      )}
      {isSuccess && (
        <Grid container spacing={3}>
          {pizzas.map((pizza) => (
            <Grid key={pizza.id} item xs={12}>
              <PizzaCard pizza={pizza} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default PizzaList
