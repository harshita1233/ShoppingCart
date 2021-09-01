import { Box, colors, Typography } from '@material-ui/core'
import React from 'react'

const Tip = () => {
  return (
    <Box bgcolor={colors.indigo[200]} color="white" p={1} mt={1}>
      <Typography align="center">Shop for $5000 or more and get 10% discount on your order</Typography>
    </Box>
  )
}

export default Tip
