import { createSlice } from "@reduxjs/toolkit";

const toggleOverSlice = createSlice({
  name: "toggleOverLay",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = toggleOverSlice.actions;

const OverlayReducer = toggleOverSlice.reducer;

export default OverlayReducer;
