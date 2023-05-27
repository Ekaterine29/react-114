import { AppBar, Box, Toolbar, styled } from '@mui/material';
import React, { useState } from 'react';
import { Button, Link } from '../atoms';
import { UserIcon } from './UserIcon';
import { CartDrawer } from './CartDrawer';
import { UseCart } from '../../hooks';


const StyleAppBar=styled(AppBar)(({theme})=>({
  

   [theme.breakpoints.down('sm')]:{
    width:'100%',
    backgroundColor:'green',
   },
   [theme.breakpoints.up('sm')]:{
    width:'calc(100% - 255px)',
    backgroundColor:'teal',
   },
   padding:'0 37px 0 30px',
  
   
}));

const StyledToolBar=styled(Toolbar)(() => ({
    display:'flex',
    width:'100%',
    justifyContent:'space-between',
}))
;

export const Header = ({setDrawerOpen}) => {
    const [isCartOpen,setIsCartOpen]=useState(false);
  

    const {cartItems}=UseCart();
  return (
    <Box>
       
        <StyleAppBar>
            <StyledToolBar>
                <Button 
                onClick={()=>setDrawerOpen((prev)=>!prev)} 
                sx={{display:{sm:'none'}}}
                >hi
                </Button>
                <Link to='/'>Home</Link>
                <UserIcon/>
                <Button
                 onClick={()=>setIsCartOpen(true)}>open cart</Button>
                <CartDrawer isCartOpen={isCartOpen} cartItems={cartItems} setIsCartOpen={setIsCartOpen}/>
            </StyledToolBar>
        </StyleAppBar>
        </Box>
  );
};
