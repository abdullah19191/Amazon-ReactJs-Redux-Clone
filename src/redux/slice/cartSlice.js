import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userinfo: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const items = state.products.find((item) => item.id === action.payload);
      items.quantity++;
    },
    decrementQuantity: (state, action) => {
      const items = state.products.find((item) => item.id === action.payload);
      if (items.quantity === 1) {
        items.quantity = 1;
      } else {
        items.quantity--;
      }
    },
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  deleteCart,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
