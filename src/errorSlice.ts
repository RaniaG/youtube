import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorState {
  error: string | null;
}

const initialState: ErrorState = {
  error: null,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export const { setError, resetError } = errorSlice.actions;

export default errorSlice.reducer;
