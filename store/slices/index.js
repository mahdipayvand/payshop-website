import cartReducer from "store/slices/cart";
import authReducer from "store/slices/auth";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
