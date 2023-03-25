import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productslice";
import cartReducer from "./slice/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const mainReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
