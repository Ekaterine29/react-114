import { useDispatch, useSelector } from "react-redux";
import { saveProduct as SaveProductHandler, 
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

  const navigate=useNavigate();

  const setSelectedProduct=(data)=>{
    dispatch(selectProduct(data));
  };

  const getHomePageProducts = () =>{
    dispatch(fetchHomePageProducts());
  };

  const saveProduct=(data) =>{
    dispatch(SaveProductHandler({product:data}))
    .unwrap()
    .then(()=> navigate('/'));
  };

  return{
    homePageProducts,
    isProductLoading,
    selectedProduct,
    saveProduct,
    getHomePageProducts,
    setSelectedProduct,
  };
};