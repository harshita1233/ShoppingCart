import React, { Fragment } from 'react'
import { Box, Grid, Divider } from '@material-ui/core'
import Gift from './gift'
import Product from './product'

const ProductDetail = ({ product,addCountItem, reduceCountItems, deleteCartItems }) => {
  const { imageUrl, name, desc, tagline, gift, planLink, count,id, subtotal, price } = product
  return (
    <Fragment>
      <Box component={Grid} container p={4} spacing={1}>
        <Product
          {...{
            imageUrl,
            name,
            desc,
            price,
            tagline,
            planLink,
            count,
            addCountItem,
            reduceCountItems,
            deleteCartItems,
            id,
            subtotal,
          }}
        />
        {count >= 1 && gift &&  (
          <Grid item container>
            <Gift {...gift} />
          </Grid>
        )}
      </Box>
      <Divider />
    </Fragment>
  );
}

export default ProductDetail
