import cartReducer from "store/slices/cart";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  cart: cartReducer,
});
