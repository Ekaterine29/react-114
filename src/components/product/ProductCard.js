import { Box, Card, CardActions, Grid, styled } from '@mui/material';
import React from 'react';
import { Button, Link, Text } from '../atoms';
import { UseCart, useUser } from '../../hooks';
import { isUserAdmin } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';

const styledCard=styled(Card)(()=>({
    width:350,
    borderRadius:3,
}));

const styledInfoContainer=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:'0 10p',

}));
const StyledCardActionsContainer=styled(Box)(()=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',

}));

 export const ProductCard = ({product}) => {

    const {name,id,image,price,category}=product;
    const {userData}=useUser();

    const navigate=useNavigate();
    const {setSelectedProduct}=useProduct();
    const {addToCart,removeFromCart,cartItems}=UseCart();

    const onEdit=()=>{
        navigate(`/products/edit/${name}`);
        setSelectedProduct(product);
    };

    const isProductInCart=cartItems?.find((item)=>item.product._id===_id);


  return (
     <Grid Item>
     <styledCard>
        <Link>
        <img
        src={image}
        alt={`${category}-${name}`} 
        style={{objectFit:'cover',width:'100%', height:'200px'}}
        />
        <styledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
        </styledInfoContainer>
        </Link>
        <CardActions>
            <StyledCardActionsContainer>
                {isProductInCart ? (
                <>
                <Button onClick={()=>removeFromCart(_id)}>-</Button>
                <Text>{isProductInCart?.quantity}</Text>
                <Button onClick={()=>addToCart(product)}>+</Button>
                </>
               ) : (
                    
                <Button onClick={()=>addToCart(product)}>addto cart</Button>
               )}
                <Button>remove from cart</Button>
                {isUserAdmin(userData) && (
                <Button onClick={onEdit}>edit product</Button>
                )}

            </StyledCardActionsContainer>
        </CardActions>
     </styledCard>
    </Grid>
    );
  
};

