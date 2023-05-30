import { createSlice } from "@reduxjs/toolkit";
import { connectToRelay, defaultRelays } from "../core/nostr"

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
// export initRelays and connect with all relays

// Selectors - This is how we pull information from the Global store slice
export const selectRelay = (state) => state.connect.relay;

export default connectSlice.reducer;
