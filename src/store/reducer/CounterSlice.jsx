import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: null,
    cart: [], // Add a cart array to your state


};

export const counterSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addproduct: (state, { payload }) => {
            state.products = payload;
        },
        singleproduct: (state, { payload }) => {
            state.product = payload;
        },
        addToCart: (state, action) => {
            console.log(action)
            state.cart = [...state.cart, action.payload];
        },

        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
          },
      

    },
});



export const { addproduct, singleproduct , addToCart, removeFromCart} = counterSlice.actions;

export default counterSlice.reducer;


