import React from 'react'
import { Grid, Typography, Button, Link } from '@material-ui/core'

const Summary = ({products,getSubTotal,getDiscountPrice, delivery,getTotalItem}) => {
  let totalAmount  = getSubTotal()
  let discountedPrice=getDiscountPrice(totalAmount)
  let totalSubAmount = totalAmount - discountedPrice ||0
  totalSubAmount = Object.keys(delivery).length? totalSubAmount+ delivery.deliveryPrice:totalSubAmount+0
  let count = getTotalItem()
  const getDisable = () =>{
    if(count+1>=2){
      if(Object.keys(delivery).length >=1)
          return false
      else
    return true
    }
    return true
  }
    
  return (
    <Grid container spacing={2}>
      <Grid item container>
        <Typography variant='h5'>Order Summary ({count} items)</Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={6}>
          <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} align='right'>
          <Typography>{totalAmount}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={6}>
          <Typography>Total Discount</Typography>
        </Grid>
        <Grid item xs={6} align='right'>
          <Typography>{discountedPrice}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={6}>
          <Typography>Standard Shipping</Typography>
        </Grid>
        <Grid item xs={6} align='right'>
        <Typography>{delivery.deliveryPrice === 0? 
        "Free" : delivery.deliveryPrice}</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems='center'>
        <Grid item xs={6}>
          <Typography>Order Total</Typography>
        </Grid>
        <Grid item xs={6} align='right'>
          <Typography variant='h5'>{totalSubAmount}$</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems='center'>
        <Grid item xs={6}>
          <Link>CONTINUE SHOPPING</Link>
        </Grid>
        <Grid item xs={6} align='right'>
          <Button disabled={getDisable()}   variant='contained'>CHECKOUT</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Summary
