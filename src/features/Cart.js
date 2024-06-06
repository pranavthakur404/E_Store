import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((list) => {
        return list.id !== action.payload;
      });
    },
    incQuantity: (state, action) => {
      state.forEach((list) => {
        if (list.id == action.payload) {
          list.quantity = list.quantity + 1;
        }
      });
    },
    decQuantity: (state, action) => {
      state.forEach((list) => {
        if (list.id == action.payload) {
          if (list.quantity > 1) {
            list.quantity = list.quantity - 1;
          }
        }
      });
    },
    clearCart: (state, actions) => {
      return [];
    },
  },
});

const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, incQuantity, decQuantity, clearCart } =
  cartSlice.actions;
export default cartReducer;
