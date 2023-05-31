import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  relay: null,
};

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    setRelay: (state, action) => {
      state.relay = action.payload;
    },
  },
});

export const { setRelay } = connectSlice.actions;

export const selectRelay = (state) => state.connect.relay;

export default connectSlice.reducer;
