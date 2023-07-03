import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import getSlice from "./slices/getSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    get: getSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch