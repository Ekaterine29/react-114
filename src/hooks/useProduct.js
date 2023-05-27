import { useDispatch, useSelector } from "react-redux";
import { saveProduct as SaveProductHandler, 
  fetchCategoryProducts as fetchProductsByCategory, 
  fetchHomePageProducts,
  setSelectedProduct as selectProduct
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

  const saveProduct=(data) =>{
    console.log('DATA',data);
    dispatch(
      SaveProductHandler({
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

  return{
    homePageProducts,
    isProductLoading,
    selectedProduct,
    categories,
    categoryProducts,
    saveProduct,
    getHomePageProducts,
    setSelectedProduct,
  };
};