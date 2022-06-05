import React from 'react'
import Grid from '@mui/material/Grid'
import PizzaList from '../../features/pizza/ui/components/PizzaList'
import Cart from '../../features/cart/ui/components/Cart'

const PizzaPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md>
        <PizzaList />
      </Grid>
      <Grid item xs={12} md >
        <Cart />
      </Grid>
    </Grid>
  )
}

export default PizzaPage
