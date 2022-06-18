import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import SectionTitle from '../../../../shared/ui/components/SectionTitle'
import { useGetAllPizzaQuery } from '../pizzaSlice'
import PizzaCard from './PizzaCard'
import PizzaListLoadingIndicator from './PizzaListLoadingIndicator'

const PizzaList: FC = () => {
  const { isLoading, isSuccess, data: pizzas = [] } = useGetAllPizzaQuery()

  return (
    <>
      <SectionTitle>
        Pizzas
      </SectionTitle>
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
