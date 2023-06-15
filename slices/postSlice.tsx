import { createSlice } from '@reduxjs/toolkit';
import { postNote } from '../core/nostr/core';

const postSlice = createSlice({
  name: 'events',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postNote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postNote.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
export const eventActions = postSlice.actions;
