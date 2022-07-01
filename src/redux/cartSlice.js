import { createSlice } from "@reduxjs/toolkit";

const checkCart = JSON.parse(localStorage.getItem("my-shop:carts"));

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: checkCart ? checkCart : []
    },
    reducers: {
        addToCart: (state,action) => {
            const cartItem = action.payload;
            const newCart = [...state.carts];
            const index = newCart.findIndex(item => item.id === cartItem.id) 
            if(index === -1) {
                newCart.push(cartItem)
            }
            state.carts = newCart;
            localStorage.setItem("my-shop:carts", JSON.stringify(state.carts))
           
        },
        deleteCart: (state,action) => {
            const id = action.payload;
            state.carts = state.carts.filter(item => item.id !== id)
        }
    }
})


export const {addToCart,deleteCart} = cartSlice.actions;
export default cartSlice.reducer