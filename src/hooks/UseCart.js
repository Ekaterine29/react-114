import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart as addInCart, clearCart as emptyCart, removeFromCart as deleteFromCart, fetchCart as getCart, saveCart  as saveCartToBE} from '../redux/slices';

export const UseCart = () => {
const dispatch=useDispatch();

 const cartItems=useSelector((state)=>state.cart.cartItems);

 const addToCart=(data)=> {
    dispatch(addInCart(data));
};
 const removeFromCart=(id)=>{
    dispatch(deleteFromCart(id));
 };

const fetchCart=(data)=>{
    dispatch(getCart(data));
};
const saveCart=(data)=>{
    dispatch(saveCartToBE(data));
   
};

const clearCart=(userId)=>{
    dispatch(emptyCart());
    if (userId) {
        saveCart({userId,cartItems:[]});
    }
};

return{
    addToCart,
    cartItems,
    removeFromCart,
    fetchCart,
    saveCart,
    clearCart,
};

};
