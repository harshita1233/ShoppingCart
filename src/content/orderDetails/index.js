import React,{useState, useEffect} from 'react'
import { Box, Divider, Grid, Paper } from '@material-ui/core'
import OrderHeader from './header'
import ProductDetail from './row'
import DeliveryDetails from './deliveryDetails'
import Summary from './summary'

import Data from '../../data.json'

const OrderDetails = () => {
const initialData = JSON.parse(window.localStorage.getItem("Data") )
const initialUserInput = window.localStorage.getItem("userInput")

  const [dataProducts, setDataProducts] = useState(initialData|| Data);
  const [userInput, setUserInput] = useState(initialUserInput||"")
  const[delivery, setDelivery] = useState({})
  
  useEffect(()=>{
  window.localStorage.setItem("Data", JSON.stringify(dataProducts))
  },[dataProducts]);

  useEffect(()=>{
  window.localStorage.setItem("userInput", userInput)
  },[userInput]);

  const addCountItem = (id) => {
    let newDataProducts = dataProducts.products.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          count: item.count + 1,
          subtotal:item.subtotal+item.price
        };
    }
    return item
    }
    );
    setDataProducts({ ...dataProducts, products: newDataProducts });
  }
    const reduceCountItems = (id) => {
      let newDataProducts = dataProducts.products.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            count: item.count - 1,
            subtotal: item.subtotal - item.price,
          };
        }
        return item;
      });
      setDataProducts({ ...dataProducts, products: newDataProducts });
  };
  
  const deleteCartItems = (id) => {
    let newDataProducts = dataProducts.products.filter(item => item.id !== id)
    setDataProducts({...dataProducts,products: newDataProducts})
  }

  const getSubTotal = () =>{
  return dataProducts.products.reduce((a,b) => a+b.subtotal,0)
  }

  const getDiscountPrice = (value)=>{
      if(value>=dataProducts.discount.minTotal){
        return ((value * (dataProducts.discount.discountPercentage/100)))
      }
      else return 0
    }
const handleUserInput = (e) =>{
setUserInput(e.target.value)
}
const getTotalItem = () => {
return dataProducts.products.reduce((count, a)=>count+a.count,0)
}
const handleDelivery = () => {
let data = Object.entries(dataProducts.pincode).find(data=>data[0]===userInput)
data && setDelivery(data[1])
  return data && data[1]
   
}
  return (
    <Box component={Paper} elevation={2} mb={16}>
      <OrderHeader />
      <Divider />
      {dataProducts.products.map((product) => (
        <ProductDetail
          product={product}
          key={product.id}
          addCountItem={addCountItem}
          reduceCountItems={reduceCountItems}
          deleteCartItems={deleteCartItems}
        />
      ))}
      <Box
        component={Grid}
        container
        px={4}
        justifyContent="space-between"
        py={4}
      >
        <Grid item xs={4}>
          <DeliveryDetails delivery={delivery} handleUserInput={handleUserInput} userInput={userInput} handleDelivery={handleDelivery} />
        </Grid>
        <Grid item xs={4}>
          <Summary products={dataProducts.products} getTotalItem={getTotalItem} getSubTotal={getSubTotal} getDiscountPrice={getDiscountPrice} delivery={delivery}/>
        </Grid>
      </Box>
    </Box>
  );
}

export default OrderDetails
