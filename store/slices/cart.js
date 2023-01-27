import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    removeItems: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
    addItem: (state, action) => {
      const product = action.payload;
      const itemInCart = state.items.find((item) => item.product.id === product.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ quantity: 1, product });
      }

      state.totalItems++;
      state.totalPrice += product.price;
    },
    increaseItemQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.product.id === action.payload);

      itemInCart.quantity++;
      state.totalItems++;
      state.totalPrice += itemInCart.product.price;
    },
    decreaseItemQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.product.id === action.payload);

      if (itemInCart.quantity === 1) {
        state.items = state.items.filter((item) => item.product.id !== action.payload);
      } else {
        itemInCart.quantity--;
      }

      state.totalItems--;
      state.totalPrice -= itemInCart.product.price;
    },
  },
});

export const { removeItems, addItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
