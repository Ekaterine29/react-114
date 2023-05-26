import React, { useEffect } from 'react';
import { RoutesComponent } from './Routes';
import { Header } from './components/header/Header';
import { Box, styled } from '@mui/material';
import { useProduct } from './hooks/useProduct';


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
 
  useEffect(() =>{
    getHomePageProducts();

  },[]);


  return (
    <Box>
    <Header/>
    <StyledContentContainer>
    <RoutesComponent/>

    </StyledContentContainer>
   
    </Box>
  );
};

export default App;



