import reducers from "store/slices";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

const persistedReducer = persistReducer(
  {
    key: "PAYSHOP",
    storage,
  },
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
