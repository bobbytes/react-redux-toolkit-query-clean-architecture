import { useGetAllPizzaQuery } from '../../api/pizza.slice';
import PizzaList from '../components/PizzaList'

const PizzaPage = () => {
  const { data: pizzas = [] } = useGetAllPizzaQuery();

  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  )
}

export default PizzaPage
