import { ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, UPDATE_CART_ITEM } from "./cartActionType";

export const addProductIncart=(data)=>({
    type:ADD_TO_CART,
    payload:data
})
export const deleteProduct=(id)=>({
    type:DELETE_FROM_CART,
    payload:id
})
export const decQuantity=(price)=>({
    type:DECREASE_QUANTITY,
    payload:price
})
export const incQuantity=(price)=>({
    type:INCREASE_QUANTITY,
    payload:price
})