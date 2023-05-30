import { configureStore } from "@reduxjs/toolkit";
import connectReducer from "./slices/connectSlice";

export const store = configureStore({
  reducer: {
    connect: connectReducer
  },
});

export default store;