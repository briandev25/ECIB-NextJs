import { Actiontypes } from '../constants/action-types';

export const setProducts = (products) =>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct = (product) =>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const addToCart = (product) =>{
     return{
         type:Actiontypes.ADD_TO_CART,
         payload:product
     }
}
export const addToLiked = (product) =>{
    return{
        type:Actiontypes.ADD_TO_LIKED,
        payload:product
    }
}
export const removeFromCart = (productId) =>{
    return{
        type:Actiontypes.REMOVE_FROM_CART,
        payload:productId
    }
}