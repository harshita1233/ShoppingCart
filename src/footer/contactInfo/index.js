import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Phone } from '@material-ui/icons'

const ContactInfo = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography>CALL US</Typography>
      </Grid>
      <Grid item container justifyContent='space-between'>
        <Grid item>
          <Typography>Monday-Friday</Typography>
          <Typography>8am to 9pm CST</Typography>
        </Grid>
        <Grid item>
          <Typography>Saturday & Sunday</Typography>
          <Typography>10am to 6pm CST</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Typography align='center'>
          <Phone /> 1800-123-1234
        </Typography>
      </Grid>
      <Grid item>
        <Typography>support.us@test.com</Typography>
      </Grid>
    </Grid>
  )
}

export default ContactInfo
