import React, { FC } from 'react'
import Box from '@mui/material/Box'

type CartTotalAmountProps = {
  totalAmount: number
}

const CartTotalAmount: FC<CartTotalAmountProps> = ({ totalAmount }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between">
      <Box sx={{ mr: 1 }}>
        <strong>Total:</strong>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <strong>CHF {totalAmount}</strong>
      </Box>
    </Box>
  )
}

export default CartTotalAmount
