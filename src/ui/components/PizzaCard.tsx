import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pizza from '../../domain/Pizza';

type PizzaCardProps = {
  pizza: Pizza
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
  const ingredients = pizza.ingredients.join(', ')

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default PizzaCard;
