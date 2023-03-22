import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productslice";
import cartReducer from "./slice/cartSlice"
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
