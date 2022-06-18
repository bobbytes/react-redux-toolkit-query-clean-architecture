import React from 'react'
import Grid from '@mui/material/Grid'
import CheckoutForm from '../../features/checkout/ui/components/CheckoutForm'
import Cart from '../../features/cart/ui/components/Cart'

const CheckoutPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md>
        <CheckoutForm />
      </Grid>
      <Grid item xs={12} md >
        <Cart isReadonly />
      </Grid>
    </Grid>
  )
}

export default CheckoutPage
