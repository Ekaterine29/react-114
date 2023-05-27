import React, { useEffect } from 'react';
import { GridContainer, LoadingWrapper } from '../../atoms';
import { ProductCard } from '../ProductCard';
import { useProduct } from '../../../hooks/useProduct';
import { useParams } from 'react-router-dom';
import { Paginate } from './Paginate';

 export const CategoryProductList = () => {
    const {categoryProducts,fetchCategoryProducts,isProductLoading}=useProduct();
    const {products}=categoryProducts();
    const {categoryName}=useParams();

    useEffect(()=>{
        fetchCategoryProducts(`${categoryName}?page=1$size=1$sort=price,desc`);

    },[]);
  return (
    <LoadingWrapper isLoading={isProductLoading}>
       <GridContainer>
        {products.map((product)=>{
            return  <ProductCard key={product._id} product={product}/>;
        })}
        <Paginate></Paginate>
       </GridContainer>
        </LoadingWrapper>
  );
};
