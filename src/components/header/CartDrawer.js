import { Box, Drawer, styled } from '@mui/material';
import React from 'react';
import { Button, Text } from '../atoms';
import { UseCart, useUser } from '../../hooks';

const StyledCartItem=styled(Box)(()=>({
    width:400,
    display:'flex',
    alignItems:'center',
    padding:'5px 10px',
    marginBottom:20,
}));


const StyledButtonContainer=styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
}));

 export const CartDrawer = ({cartItems,isCartOpen,setIsCartOpen}) => {
    const {userData}=useUser();
    const {saveCart,clearCart}=UseCart();
  return(

   <Drawer 
   open={isCartOpen}
    onClose={()=>setIsCartOpen(false)} 
    anchor='right'
    >
    {cartItems.map((item) => {
        const {product,quantity} = item;
        const {price,name,id,image}=product;
        return ( 
        <StyledCartItem>
            <img
             src={image}
             alt={`${name}-img`}
             width='70px'
             height='70p'
             style={{objectFit:'cover', borderRadius:5}}
             
             />
             <Box sx={{paddindLeft:5}}>
                <Text>{name}</Text>
                <Text>{quantity}</Text>
                <Text>total:${price * quantity}</Text>
             </Box>
             </StyledCartItem>
             );
    })}
             <StyledButtonContainer>
                <Button onClick={()=>clearCart(userData?._id)}>clear cart</Button>
                {!!userData && (
                    <Button
                    onClick={()=>{
                    saveCart({userId:userData?._id,cartItems});
                    }}
         >
                    save Cart
                    </Button>
                )}
             </StyledButtonContainer>

       </Drawer>
  );

};

