import React from 'react';
import { RoutesComponent } from './Routes';
import { Header } from './components/header/Header';
import { Box, styled } from '@mui/material';

const StyledContentContainer =styled(Box)(({theme}) =>({
  [theme.breakpoints.up('sm')]: {
    mrginLeft:'255px',
  },
  marginTop:'60px',
  height:'calc(100vh-64px)',
  padding:10,
}));

const App = () => {
  return (
    <>
    <Header/>
    <StyledContentContainer>
    <RoutesComponent/>

    </StyledContentContainer>
   
    </>
  );
};

export default App;



