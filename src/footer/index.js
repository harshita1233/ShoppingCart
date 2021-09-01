import React from 'react'
import { Box, Grid } from '@material-ui/core'
import ContactInfo from './contactInfo'
import AboutInfo from './aboutInfo'
import FooterNote from './footerNote'

const Footer = () => {
  return (
    <Box bgcolor='black' component={Grid} container color='white' px={8} py={1}>
      <Grid item container>
        <Grid item container xs={9}>
          <AboutInfo />
        </Grid>
        <Grid item container xs={3}>
          <ContactInfo />
        </Grid>
      </Grid>
      <Grid item container>
        <FooterNote />
      </Grid>
    </Box>
  )
}

export default Footer
