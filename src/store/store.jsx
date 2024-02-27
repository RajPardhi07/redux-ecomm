import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./reducer/CounterSlice";
import cartReducer from "./reducer/CounterSlice";

export const store = configureStore({
    reducer:{
        products:counterReducer,
        cart:cartReducer
    },
});

