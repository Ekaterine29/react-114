import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../../hooks/useProduct';
import { LoadingWrapper } from '../../atoms';

 export const SingleProduct = () => {

  const {categoryName,id}=useParams();
  const {getSingleProduct,isProductLoading}=useProduct;

  useEffect=(()=>{
    getSingleProduct({category:categoryName,id});

  },[]);
  return  (
  <LoadingWrapper isLoading={isProductLoading}>

   </LoadingWrapper>
  );
 
 
};
