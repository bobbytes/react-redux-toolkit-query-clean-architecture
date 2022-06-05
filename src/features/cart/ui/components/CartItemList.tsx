import React, { FC } from 'react'
import Stack from '@mui/material/Stack'
import CartItemEntity from '../../domain/CartItem'
import CartItem from './CartItem'

type CartItemListProps = {
  cartItems: CartItemEntity[]
}

const CartItemList: FC<CartItemListProps> = ({ cartItems }) => {
  return (
    <Stack spacing={2}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.pizza.id}
          cartItem={cartItem} />
      ))}
    </Stack>
  )
}

export default CartItemList
