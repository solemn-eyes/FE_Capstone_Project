import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./services/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
