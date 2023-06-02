import { useDispatch, useSelector } from "react-redux";
import { saveProduct as saveProductHandler, 
  fetchCategoryProducts as fetchProductsByCategory, 
  fetchHomePageProducts,
  setSelectedProduct as selectProduct,
  fetchSingleProduct,
  rateProduct,
  queryProducts,
  clearSearchResults as clearQueryResults,
 
 
 } from "../redux/slices";
import { useNavigate } from "react-router-dom";

export const useProduct=()=> {

  const dispatch=useDispatch();

  const homePageProducts=useSelector(
    (state)=> state.product.homePageProducts
  );

  const selectedProduct=useSelector((state)=>state.product.selectedProduct);

   const isProductLoading=useSelector((state)=>state.product.loading);
   const categories=useSelector((state)=>state.product.categories);
   const singleProduct=useSelector((state)=>state.product.singleProduct);

   const searchResults=useSelector((state)=>state.product.searchResults);
   const categoryProducts=useSelector((state)=>state.product.categoryProducts);

  const navigate=useNavigate();

  const setSelectedProduct=(data)=>{
    dispatch(selectProduct(data));
  };

  const getHomePageProducts = () =>{
    dispatch(fetchHomePageProducts());
  };

   const fetchCategoryProducts=(url)=>{
    dispatch(fetchProductsByCategory(url));
   };

   
  const getSingleProduct=()=>{
    dispatch(fetchSingleProduct());
  };

  const saveProduct=(data) =>{
   
    dispatch(
      saveProductHandler({
        product:data.product,
      isUpdating:data.isUpdating,
      id: data.id,
  })
  )
    .unwrap()
    .then(()=>{
      setSelectedProduct(null);
    
      navigate('/');
  });
};
 const rateProducts=(data)=>{
  dispatch(rateProduct(data));
 };

 const searchProducts=(data)=>{
  dispatch(queryProducts(data));
 };
 const clearSearchResults=()=>{
  dispatch(clearQueryResults());
 };

  return{
    homePageProducts,
    isProductLoading,
    selectedProduct,
    categories,
    categoryProducts,
    singleProduct,
    searchResults,
    saveProduct,
    getHomePageProducts,
    fetchCategoryProducts,
    setSelectedProduct,
    getSingleProduct,
    rateProducts,
    searchProducts,
    clearSearchResults,
    
  };
};