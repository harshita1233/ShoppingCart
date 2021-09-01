import React from 'react'
import { AppBar, Box, Grid, IconButton, Typography } from '@material-ui/core'
import { Search, Person, ShoppingCart } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  appBar: {
    position: "sticky",
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.appBar} component={AppBar} position="static" px={8} py={1}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6">
            Test
          </Typography>
        </Grid>
        <Grid item container xs={6} justifyContent="flex-end" alignItems="center">
          <Grid item>
            <Typography>
              Track Order
            </Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <Search />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Person />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
