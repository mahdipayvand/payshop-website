import reducers from "store/slices";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({ reducer: reducers, devTools: true });
