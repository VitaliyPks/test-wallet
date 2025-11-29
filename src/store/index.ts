import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet/walletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
