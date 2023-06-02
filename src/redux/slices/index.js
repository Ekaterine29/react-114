export {authenticateUser,userReducer,logout} from  './userSlice'; 
export {productReducer,
    saveProduct,
    fetchHomePageProducts,
    fetchCategoryProducts,
    fetchSingleProduct,
    rateProduct,
    queryProducts,
    setSelectedProduct,
    clearSearchResults,

} from './productSlice';

export  {
    cartReducer,
    addToCart,
    removeFromCart,
    saveCart,
    fetchCart,
    clearCart,
} from './Cart';

    
