import { createSlice } from "@reduxjs/toolkit";
import { getNote } from "../core/core";

const getSlice = createSlice({
  name: "get event",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNote.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getSlice.reducer;
export const eventActions = getSlice.actions;
