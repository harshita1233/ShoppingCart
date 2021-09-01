import React from 'react'
import { Box, Paper, Stepper, Step, StepLabel } from '@material-ui/core'

const steps = ['SHOPPING CART', 'ORDER DETAILS', 'MAKE PAYMENT']

const ShopStep = () => {
  return (
    <Box component={Paper} elevation={2} px={8} py={1}>
      <Stepper alternativeLabel activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default ShopStep
