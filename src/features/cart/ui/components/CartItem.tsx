import React from 'react'
import Grid from '@mui/material/Grid'
import CartItemAmount from './CartItemAmount'

const CartItem = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs>
          pizza name
        </Grid>
        <Grid item xs sx={{ textAlign: 'center' }}>
          <CartItemAmount />
        </Grid>
        <Grid item xs sx={{ textAlign: 'right' }}>
          <strong>total prize</strong>
        </Grid>
      </Grid>
    </div>
  )
}

export default CartItem
