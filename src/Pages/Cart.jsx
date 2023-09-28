import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch } from 'react-redux';
import { reomvecart } from '../Redux/cartSlice';
import { Grid, Paper, Box, Typography,Button,Container } from '@mui/material';
export default function Cart() {
  const product = useSelector((state) => state.pakcart);
  const dispatch=useDispatch()

  const remove=(item)=>
  {
    dispatch(reomvecart(item))
  }
  return (
 <>
  <Container maxWidth='lg' sx={{marginTop:"100px"}}>
        <Grid container spacing={3}  >
          {product.map((item, index) => (
            <Grid item key={index} lg={12} md={12} sm={12} xs={12}>
              <Paper elevation={3} sx={{ padding: '20px', display:{lg:'flex',md:'block'}, alignItems:'center',justifyContent:'space-evenly',textAlign:{md:'center',sm:'center',xs:'center'} }}>
                {/* Make sure 'item' contains the necessary data */}
                <Box
                  component='img'
                  src={item.image}
                  alt={item.title}
                  sx={{ width: '150px', marginBottom: '10px' }}
                />
                <Typography variant='body1'>{item.title}</Typography>
                <Typography variant='body1' sx={{fontWeight:'bold',fontSize:'20px'}}>{item.price}</Typography>
                <Button variant="contained" sx={{marginTop:'15px'}} onClick={()=>remove(item.id)}>REMOVE CART</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Container>
 </>
  )
}
