import React from 'react'
import { Box, Grid, IconButton, TextField } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import Description from '../common/description'

const Product = ({
  imageUrl,
  name,
  desc,
  tagline,
  count,
  id,
  price,
  addCountItem,
  reduceCountItems,
  deleteCartItems,
  subtotal,
}) => {
  return (
    <Grid item container alignItems="center">
      <Grid item container xs={6} alignItems="center">
        <Grid item>
          <Box
            component={"img"}
            height="150px"
            width="150px"
            border="grey 1px solid"
            borderRadius={8}
            src={imageUrl}
          />
        </Grid>
        <Box component={Grid} item pl={2}>
          <Description {...{ name, desc, tagline }} />
        </Box>
      </Grid>
      <Grid item xs={2}>
        {price}$
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => reduceCountItems(id)}>-</IconButton>
        <Box
          component={TextField}
          maxWidth={48}
          variant="outlined"
          value={count}
        />
        <IconButton onClick={() => addCountItem(id)}>+</IconButton>
      </Grid>
      <Grid item xs={1}>
        {subtotal}$
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={() => deleteCartItems(id)}>
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Product
