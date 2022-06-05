import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const CartEmptyState = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography>
        Cart is empty
      </Typography>
    </Box>
  )
}

export default CartEmptyState
