import React from 'react'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { selectCartItems, selectCartTotalAmount } from '../cartSlice'
import CartPaper from './CartPaper'
import CartEmptyState from './CartEmptyState'
import CartTotalAmount from './CartTotalAmount'
import CartItemList from './CartItemList'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const isCartEmpty = cartItems.length === 0

  return (
    <CartPaper>
      <Stack spacing={2}>
        {isCartEmpty && (
          <CartEmptyState />
        )}
        {!isCartEmpty && (
          <CartItemList cartItems={cartItems} />
        )}
        <hr />
        <CartTotalAmount totalAmount={cartTotalAmount} />
        <Button
          color="primary"
          variant="contained"
          disabled={isCartEmpty}>
          Checkout
        </Button>
      </Stack>
    </CartPaper >
  )
}

export default Cart
