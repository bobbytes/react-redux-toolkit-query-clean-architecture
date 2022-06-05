import React, { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

type CartPaperProps = PropsWithChildren<unknown>

const CartPaper: FC<CartPaperProps> = ({ children }) => {
  return (
    <Box>
      <Typography
        color="primary"
        variant="h2"
        gutterBottom>
        Cart
      </Typography>
      <Paper sx={{ p: 2 }}>
        {children}
      </Paper >
    </Box>
  )
}

export default CartPaper
