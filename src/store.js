import { configureStore } from "@reduxjs/toolkit";
import OverlayReducer from "./features/ToggleOver";

const store = configureStore({
  reducer: {
    overlay: OverlayReducer,
  },
});

export default store;
