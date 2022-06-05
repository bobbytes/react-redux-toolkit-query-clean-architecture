import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <Box>
      <Typography
        color="primary"
        variant="h2"
        gutterBottom>
        Cart
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </Stack>
      </Paper >
    </Box>
  )
}

export default Cart
