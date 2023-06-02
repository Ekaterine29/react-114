import { AppBar, Box, Toolbar, styled } from '@mui/material';
import React, { useState } from 'react';
import { Button, Link } from '../atoms';
import { UserIcon } from './UserIcon';
import { CartDrawer } from './CartDrawer';
import { UseCart } from '../../hooks';
import {AiOutlineShoppingCart,AiFillHome} from "react-icons/ai";
import {BsLayoutSidebarInset} from "react-icons/bs";
import { SearchBar } from './SearchBar';



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

export const Header = ({setIsDrawerOpen}) => {
    const [isCartOpen,setIsCartOpen]=useState(false);
  

    const {cartItems}=UseCart();
  return (
    <Box>
       
        <StyleAppBar>
            <StyledToolBar>
                <Button 
                onClick={()=>setIsDrawerOpen((prev)=>!prev)} 
                sx={{display:{sm:'none'}}}
                >
                <BsLayoutSidebarInset size={35}/>
                </Button>
                <Link to='/'>
                <AiFillHome size={35}/>
                </Link>
                <SearchBar/>
                <UserIcon/>
                <Button
                 onClick={()=>setIsCartOpen(true)}>
                 <AiOutlineShoppingCart size={35} color="black"/>
                 </Button>
                <CartDrawer 
                isCartOpen={isCartOpen}
                 cartItems={cartItems} 
                 setIsCartOpen={setIsCartOpen}/>
            </StyledToolBar>
        </StyleAppBar>
        </Box>
  );
};
