import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    stock: 5,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/4_730be9b8-c9c4-439c-8074-4a40005984ff.jpg?v=1711972339&width=360",
  },
  {
    id: 2,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    stock: 6,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/authentic_9efd4bb2-6dda-4b4b-81a7-0eee06a3e9e4.jpg?v=1715675835&width=360",
  },
  {
    id: 3,
    title: "Boyfriend Authentic Classic Fit..",
    price: 499,
    total: 999,
    offerPrice: 500,
    stock: 0,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/WhatsAppImage2024-02-02at3.34.16PM_165fe357-5ac0-46d6-b3bf-fa69163561de_1_1.jpg?v=1713533485&width=360",
  },
  {
    id: 5,
    title: "Believe in Yourself Oversized T...",
    price: 599,
    total: 999,
    offerPrice: 400,
    stock: 10,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/products/Roger-3.jpg?v=1666016205&width=360",
  },
  {
    id: 6,
    title: "Free Your Mind Classic Fit T-s...",
    price: 499,
    total: 999,
    offerPrice: 500,
    stock: 5,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/4_730be9b8-c9c4-439c-8074-4a40005984ff.jpg?v=1711972339&width=360",
  },
  {
    id: 7,
    title: "Oversized Cargo Joggers",
    price: 999,
    total: 1999,
    offerPrice: 1000,
    stock: 6,
    quantity: 1,
    offerText: "Lowest price in last 30 days",
    img: "https://nobero.com/cdn/shop/files/authentic_9efd4bb2-6dda-4b4b-81a7-0eee06a3e9e4.jpg?v=1715675835&width=360",
  },
];

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: intialValue,
  reducers: {
    addToWishList: (state, action) => {
      state.push(action.payload);
    },
    removeToWhishList: (state, action) => {
      console.log(action);
      return state.filter((list) => {
        return list.id !== action.payload;
      });
    },
  },
});

const wishListSliceReducer = wishListSlice.reducer;
export const { addToWishList, removeToWhishList } = wishListSlice.actions;
export default wishListSliceReducer;
