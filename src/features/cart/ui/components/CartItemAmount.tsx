import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useAppDispatch } from '../../../../shared/hooks/hooks'
import CartItem from '../../domain/CartItem'
import addPizzaToCartThunk from '../thunks/addPizzaToCartThunk'
import removePizzaFromCartThunk from '../thunks/removePizzaFromCartThunk'

type CartItemAmountProps = {
  cartItem: CartItem
};

const CartItemAmount: FC<CartItemAmountProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch()

  const handleAddPizzaAmount = () => {
    dispatch(addPizzaToCartThunk(cartItem.pizza))
  }

  const handleRemovePizzaAmount = () => {
    dispatch(removePizzaFromCartThunk(cartItem.pizza))
  }

  return (
    <Grid
      container
      justifyContent="center"
      flexWrap="nowrap"
      spacing={1}
    >
      <Grid item>
        <IconButton onClick={handleRemovePizzaAmount}>
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
        <strong>{cartItem.amount}</strong>
      </Grid>
      <Grid item>
        <IconButton onClick={handleAddPizzaAmount}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CartItemAmount
