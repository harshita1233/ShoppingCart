import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Header = () => {
  return (
    <Box component={Grid} container p={4}>
      <Grid item xs={6}>Product</Grid>
      <Grid item xs={2}>Price</Grid>
      <Grid item xs={2}>Quantity</Grid>
      <Grid item xs={1}>Subtotal</Grid>
      <Grid item xs={1}></Grid>
    </Box>
  )
}

export default Header
