import React, { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useAppDispatch } from '../../../../shared/hooks/hooks'
import addPizzaToCartThunk from '../../../cart/ui/thunks/addPizzaToCartThunk'
import Pizza from '../../core/models/Pizza'

type PizzaCardProps = {
  pizza: Pizza
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
  const dispatch = useAppDispatch()
  const ingredients = pizza.ingredients.join(', ')

  const handleAddPizzaToCart = () => {
    dispatch(addPizzaToCartThunk(pizza))
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddPizzaToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default PizzaCard
