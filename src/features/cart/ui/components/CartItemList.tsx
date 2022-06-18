import React, { FC } from 'react'
import Stack from '@mui/material/Stack'
import CartItemEntity from '../../core/models/CartItem'
import CartItem from './CartItem'

type CartItemListProps = {
  cartItems: CartItemEntity[],
  isReadonly?: boolean
}

const CartItemList: FC<CartItemListProps> = ({ cartItems, isReadonly }) => {
  return (
    <Stack spacing={2}>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.pizza.id}
          cartItem={cartItem}
          isReadonly={isReadonly}
        />
      ))}
    </Stack>
  )
}

export default CartItemList
