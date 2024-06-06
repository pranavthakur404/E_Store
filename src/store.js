import { configureStore } from "@reduxjs/toolkit";
import OverlayReducer from "./features/ToggleOver";
import wishListSliceReducer from "./features/WishList";
import cartReducer from "./features/Cart";

const store = configureStore({
  reducer: {
    overlay: OverlayReducer,
    wishList: wishListSliceReducer,
    cart: cartReducer,
  },
});

export default store;
