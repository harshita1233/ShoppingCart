import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const FooterNote = () => {
  return (
    <Box bgcolor='black' component={Grid} container color='white' py={2}>
      <Grid item container>
        <Grid item container justifyContent="flex-end">
          <Typography>Dummy | Dummy | Dummy | Dummy</Typography>
        </Grid>
        <Grid item container justifyContent="flex-end">
          <Typography>
            Lorem Ipsum is simplydummy text for printing and typesetting
            industry.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterNote
