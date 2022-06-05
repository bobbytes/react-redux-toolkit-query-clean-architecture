import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import CartItemAmount from './CartItemAmount'
import CartItemModel, { getCartItemTotalAmount } from '../../domain/CartItem'

type CartItemProps = {
  cartItem: CartItemModel
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const cartItemTotalAmount = getCartItemTotalAmount(cartItem)

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs
          display="flex"
          alignItems="center"
        >
          {cartItem.pizza.name}
        </Grid>
        <Grid item xs sx={{ textAlign: 'center' }}>
          <CartItemAmount cartItem={cartItem} />
        </Grid>
        <Grid
          item
          xs
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <strong>CHF {cartItemTotalAmount}</strong>
        </Grid>
      </Grid>
    </div>
  )
}

export default CartItem
