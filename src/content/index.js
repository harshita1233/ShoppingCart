import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Tip from './tip'
import OrderDetails from './orderDetails'

const Content = () => {
  return (
    <Box px={8} py={1}>
      <Tip />
      <Box mt={3} mb={2}>
        <Typography variant="h3">Shopping cart</Typography>
      </Box>
      <OrderDetails />
    </Box>
  )
}

export default Content
