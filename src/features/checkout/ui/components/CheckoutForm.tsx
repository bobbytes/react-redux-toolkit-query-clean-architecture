import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { useAppSelector } from '../../../../shared/ui/hooks/hooks'
import FormPaper from '../../../../shared/ui/components/FormPaper'
import useOrderSchema from '../../core/schemas/useOrderSchema'
import { selectCheckout } from '../checkoutSlice'

const CheckoutForm = () => {
  const order = useAppSelector(selectCheckout)

  const { control, handleSubmit } = useForm({
    defaultValues: order,
    resolver: yupResolver(useOrderSchema())
  })

  const onSubmit = () => { }

  return (
    <FormPaper title="Checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="contact.gender"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="contact-gender-label">Gender</InputLabel>
                  <Select
                    labelId="contact-gender-label"
                    id="contact-gender"
                    label="Gender"
                    {...field}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="contact.firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  label="First Name"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="contact.lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Last Name"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="contact.email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Controller
              name="deliveryAddress.street"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Street"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="deliveryAddress.streetNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Street Number"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="deliveryAddress.postalCode"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Zip"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Controller
              name="deliveryAddress.city"
              control={control}
              render={({ field }) => (
                <TextField
                  label="City"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="contact.wantsNewsletter"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  label="Sent me some Newsletter"
                  control={<Checkbox {...field} checked={field.value} />}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
            >
              Order Pizza
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormPaper>
  )
}

export default CheckoutForm
