import React, { Fragment } from 'react'
import {
  Box,
  Grid,
  Input,
  Typography,
  InputAdornment,
  Button
} from '@material-ui/core'
import { RoomOutlined, Check, Clear } from '@material-ui/icons'

const DeliveryDetails = ({userInput,handleUserInput,handleDelivery,delivery}) => {
  return (
    <Fragment>
      <Typography>Delivery Availability</Typography>
      <Box component={Grid} mt={2} container>
        <Grid item container>
          <Box
            component={Input}
            width={'100%'}
            id='devlivery-pincode'
            onChange={handleUserInput}
            value={userInput}
            startAdornment={
              <InputAdornment position='start'>
                <RoomOutlined />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <Button disableRipple onClick={handleDelivery}>CHANGE</Button>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item container>
          <Grid item container justifyContent='space-between' xs={3}>
            <Grid item xs={1}>
              {delivery.cashOnDelivery ? <Check fontSize='small' /> : <Clear fontSize='small' /> }
            </Grid>
            <Grid item xs={10}>
              <Typography align='center' variant='caption' component='span'>
                Free delivery
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent='space-between' xs={4}>
            <Grid item xs={1}>
              {delivery.deliveryPrice===  0 ? <Check fontSize='small' /> : <Clear fontSize='small' /> }
            </Grid>
            <Grid item xs={10}>
              <Typography variant='caption' component='span'>
                Cash on delivery
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent='space-between' xs={5}>
            <Grid item xs={1}>
               {delivery.estimatedDays ? <Check fontSize='small' /> : <Clear fontSize='small' /> }
            </Grid>
            <Grid item xs={10}>
              <Typography variant='caption' component='span'>
                Estimated delivery time {delivery.estimatedDays? delivery.estimatedDays.min: 'NA'}-{delivery.estimatedDays ? delivery.estimatedDays.max: 'NA'} days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default DeliveryDetails
