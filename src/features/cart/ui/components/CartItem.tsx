import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import CartItemModel, { getCartItemTotalAmount } from '../../core/models/CartItem'
import CartItemAmount from './CartItemAmount'

type CartItemProps = {
  cartItem: CartItemModel,
  isReadonly?: boolean
}

const CartItem: FC<CartItemProps> = ({ cartItem, isReadonly }) => {
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
          {isReadonly && (
            <>
              {cartItem.amount}x {cartItem.pizza.name} (CHF {cartItem.pizza.price})
            </>
          )}
          {!isReadonly && (
            <>
              {cartItem.pizza.name}
            </>
          )}
        </Grid>
        {!isReadonly && (
          <Grid item xs sx={{ textAlign: 'center' }}>
            <CartItemAmount cartItem={cartItem} />
          </Grid>
        )}
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
