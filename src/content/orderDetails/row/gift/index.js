import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Description from '../common/description'

const GiftDescription = ({ name, desc, price,imageUrl }) => {
  return (
    <Box
      component={Grid}
      container
      bgcolor={'#f5f5f5'}
      alignItems='center'
      p={1}
    >
      <Grid item container xs={6} alignItems='center'>
        <Grid item>
          <Box
            height='80px'
            width='80px'
            border='grey 1px solid'
            borderRadius={8}
            component='img'
            src={imageUrl}
            ml={4}
          />
        </Grid>
        <Box component={Grid} item pl={2}>
          <Description {...{ name, desc, tagline: 'GIFT' }} />
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Typography>{price}$</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>1</Typography>
      </Grid>
    </Box>
  )
}

export default GiftDescription
