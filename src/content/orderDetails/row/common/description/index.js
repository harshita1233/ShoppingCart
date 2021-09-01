import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

const Description = ({ name, tagline, desc }) => {
  return (
    <Grid container direction='column'>
      {tagline && (
        <Box component={Grid} item bgcolor='midnightblue' color='white' p={0.5}>
          <Typography variant='subtitle2'>{tagline}</Typography>
        </Box>
      )}
      <Grid item>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item>
        <Typography>{desc}</Typography>
      </Grid>
    </Grid>
  )
}

export default Description
