import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RelayEntry {
  id: number;
  url: string;
  status: number;
  success: boolean;
}

interface ConnectState {
  relays: Record<number, RelayEntry>; // An object to hold relay entries with auto-incremented IDs
  idCounter: number; // Counter for generating unique IDs
}

const initialState: ConnectState = {
  relays: {},
  idCounter: 0,
};

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    addRelay: (state, action: PayloadAction<RelayEntry>) => {
      const relayEntry = action.payload;
      state.idCounter++; // Increment the ID counter
      const id = state.idCounter;
      state.relays[id] = { ...relayEntry, id }; // Add the new relay entry to the relays object with the generated ID
    },
  },
});

export const { addRelay } = connectSlice.actions;

export default connectSlice.reducer;
