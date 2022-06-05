import React from 'react'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const PizzaListLoadingIndicator = () => {
  const items = Array.from(new Array(3))

  return (
    <Grid container spacing={3}>
      {items.map((_item, index) => (
        <Grid key={index} item xs={12}>
          <Skeleton animation="wave" sx={{ mb: '2px' }} variant="rectangular" height={35} />
          <Skeleton animation="wave" sx={{ mb: '2px' }} variant="rectangular" height={50} />
          <Skeleton animation="wave" variant="rectangular" height={35} />
        </Grid>
      ))}
    </Grid>
  )
}

export default PizzaListLoadingIndicator
