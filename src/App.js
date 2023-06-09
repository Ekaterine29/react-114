import React, { useEffect } from 'react';
import { RoutesComponent } from './Routes';
import { Header } from './components/header/Header';
import { Box, styled } from '@mui/material';
import { useProduct } from './hooks/useProduct';
import { UseCart, useUser } from './hooks';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';


const StyledContentContainer =styled(Box)(({theme}) =>({
  [theme.breakpoints.up('sm')]: {
    marginLeft:'255px',
  },
  marginTop:'60px',
  height:'calc(100vh-64px)',
  padding:10,
}));

const App = () => {
  const {getHomePageProducts}=useProduct();
  const {userData}=useUser();
  const {fetchCart}=UseCart();
 
  const [isDrawerOpen,setIsDrawerOpen]=useState(false);
 
  useEffect(() =>{
    getHomePageProducts();

  },[]);

  useEffect(()=>{
    if(userData?._id){
    fetchCart(userData?._id);
  }

  },[userData]);


  return (
    <Box>
    <Header setDrawerOpen={setIsDrawerOpen}/>
    <StyledContentContainer>
      <Sidebar isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen}/>
    <RoutesComponent/>

    </StyledContentContainer>
   
    </Box>
  );
};

export default App;



