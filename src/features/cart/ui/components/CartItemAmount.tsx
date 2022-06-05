import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

type CartItemAmountProps = {};

const CartItemAmount: FC<CartItemAmountProps> = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={1}
    >
      <Grid item>
        <IconButton>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth={40}
      >
        <strong>99</strong>
      </Grid>
      <Grid item>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItemAmount
