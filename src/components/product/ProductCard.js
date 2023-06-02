import { Box, Card, CardActions, Grid, Rating, styled } from '@mui/material';
import React from 'react';
import { Button, Link, Text } from '../atoms';
import { UseCart, useUser } from '../../hooks';
import { isUserAdmin } from '../../helpers';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';


const StyledCard=styled(Card)(()=>({
    width:370,
    borderRadius:3,
}));

const StyledInfoContainer=styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:'0 10px',

}));
const StyledCardActionsContainer=styled(Box)(()=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',

}));

 export const ProductCard = ({product}) => {

    const {name,_id,image,price,category,averageRating}=product;
    const {userData}=useUser();

    const navigate=useNavigate();
    const {setSelectedProduct,rateProducts}=useProduct();
    const {addToCart,removeFromCart,cartItems}=UseCart();
    const {pathname,search}=useLocation();
 

    const onEdit=()=>{
        navigate(`/products/edit/${name}`);
        setSelectedProduct(product);
    };

    const isProductInCart=cartItems?.find((item)=>item.product._id===_id);

    const onRatingChange=(e)=>{
        const {value}=e.target;
        rateProducts({
            productId:_id,
            userId:userData?._id,
            rating:Number(value),
            isHome:pathname==="/",
            url:`${category}${search}&size=1`,
        });
    };


  return (
     <Grid Item>
     <StyledCard>
        <Link to={`/products/categories/${category}/${_id}`}>
        <img
        src={image}
        alt={`${category}-${name}`} 
        style={{objectFit:'cover',width:'100%', height:'200px'}}
        />
        <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
        </StyledInfoContainer>
        </Link>
        <CardActions sx={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>

            <StyledCardActionsContainer>
            <Rating value={averageRating} disabled={!userData} onChange={onRatingChange}/>
                {isProductInCart ? (
                <>
                <Button onClick={()=>removeFromCart(_id)}>-</Button>
                <Text>{isProductInCart?.quantity}</Text>
                <Button onClick={()=>addToCart(product)}>+</Button>
                </>
               ) : (
                    
                <Button onClick={()=>addToCart(product)}>addto cart</Button>
               )}
                {isUserAdmin(userData) && (
                <Button onClick={onEdit}>edit product</Button>
                )}

            </StyledCardActionsContainer>
        </CardActions>
     </StyledCard>
    </Grid>
    );
  
};

