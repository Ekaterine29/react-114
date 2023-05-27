export {authenticateUser,userReducer,logout} from  './userSlice'; 
export {productReducer,
    saveProduct,
    fetchHomePageProducts,
    fetchCategoryProducts,
    setSelectedProduct,

} from './productSlice';

export  {cartReducer,
    addToCart,
    removeFromCart,
    saveCart,
    fetchCart,
    clearCart,
} from './Cart';

    
