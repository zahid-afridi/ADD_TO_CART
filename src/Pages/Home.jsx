import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography,Button,Container } from '@mui/material';
import {useDispatch } from 'react-redux';
import { addtocart } from '../Redux/cartSlice';
export default function Home() {
  const [product, setProduct] = useState([]); // Initialize as an empty array
   const dispatch=useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const additem=(item)=>
  {
    dispatch(addtocart(item))
  }

  return (
    <>
     <Container maxWidth='lg' sx={{marginTop:"100px"}}>
        <Grid container spacing={3}  >
          {product.map((item, index) => (
            <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
                {/* Make sure 'item' contains the necessary data */}
                <Box
                  component='img'
                  src={item.image}
                  alt={item.title}
                  sx={{ width: '150px', marginBottom: '10px' }}
                />
                <Typography variant='body1'>{item.title}</Typography>
                <Typography variant='body1' sx={{fontWeight:'bold',fontSize:'20px'}}>{item.price}</Typography>
                <Button variant="contained" sx={{marginTop:'15px'}} onClick={()=>additem(item)}>ADD TO CART</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Container>
 
    </>
  );
}
