import { configureStore } from "@reduxjs/toolkit";
import connectReducer from "./slices/connectSlice";

export const store = configureStore({
  reducer: {
    connect: connectReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch