import { Box, styled } from '@mui/material';
import React from 'react';
import { Text } from '../../atoms';

const StyledBox=styled(Box)(()=>({
  width:"100%",
  display:"flex",
  justifyContent:"space-around",
}));

const StyledImage=styled('img')(()=>({
  width:'350px',
  height:"350px",
  objectFit:"cover",
}));

 export const SingleProductCard = ({product}) => {
  const {image,name,category,brand,description}=product;
  return (
    <StyledBox>
   <StyledImage src={product.image}/>
   <Box>
   <Text variant="h4">{name}</Text>
   <Text variant="h4">{category}</Text>
   <Text variant="h4">{brand}</Text>
   <Text variant="h4">{description}</Text>
   </Box>
   </StyledBox>

  );
};

