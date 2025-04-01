import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "../../shared/store/cartSLice";

export const appReducer = combineReducers({
  [cartSlice.reducerPath]: cartSlice.reducer,
});
