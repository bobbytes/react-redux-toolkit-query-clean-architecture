import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../../../shared/ui/hooks/hooks'
import FormPaper from '../../../../shared/ui/components/FormPaper'
import checkoutOrderThunk from '../../../checkout/ui/thunks/checkoutOrderThunk'
import { selectCartItems, selectCartTotalAmount } from '../cartSlice'
import CartEmptyState from './CartEmptyState'
import CartTotalAmount from './CartTotalAmount'
import CartItemList from './CartItemList'

type CartProps = {
  isReadonly?: boolean
}

const Cart: FC<CartProps> = ({ isReadonly }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const isCartEmpty = cartItems.length === 0

  return (
    <FormPaper title="Cart">
      <Stack spacing={2}>
        {isCartEmpty && (
          <CartEmptyState />
        )}
        {!isCartEmpty && (
          <CartItemList
            cartItems={cartItems}
            isReadonly={isReadonly}
          />
        )}
        <hr />
        <CartTotalAmount totalAmount={cartTotalAmount} />
        {!isReadonly && (
          <Button
            color="primary"
            variant="contained"
            disabled={isCartEmpty}
            onClick={() => dispatch(checkoutOrderThunk({ navigate }))}
          >
            Checkout
          </Button>
        )}

      </Stack>
    </FormPaper>
  )
}

export default Cart
