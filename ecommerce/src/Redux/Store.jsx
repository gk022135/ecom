// store.js or index.js where Redux store is defined
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import counterReducer from "./Slices/CounterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
  },
});
