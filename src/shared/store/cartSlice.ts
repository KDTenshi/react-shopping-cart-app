import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem, TProduct } from "../types/types";

type CartState = {
  isShown: boolean;
  items: TCartItem[];
};

const initialState: CartState = {
  isShown: false,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCartPopup: (state) => {
      state.isShown = true;
    },
    hideCartPopup: (state) => {
      state.isShown = false;
    },
    addToCart: (state, action: PayloadAction<{ product: TProduct }>) => {
      const { product } = action.payload;
      const addedItem = state.items.find((item) => item.product.id === product.id);

      if (addedItem) {
        addedItem.amount += 1;
      } else {
        state.items.push({ product, amount: 1 });
      }
    },
    increaseCartItemAmount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const cartItem = state.items.find((item) => item.product.id === id);

      if (cartItem) cartItem.amount += 1;
    },
    decreaseCartItemAmount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const cartItem = state.items.find((item) => item.product.id === id);

      if (cartItem && cartItem.amount > 1) cartItem.amount -= 1;
    },
    deleteFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.items = state.items.filter((item) => item.product.id !== id);
    },
  },
});

export const {
  showCartPopup,
  hideCartPopup,
  addToCart,
  increaseCartItemAmount,
  decreaseCartItemAmount,
  deleteFromCart,
} = cartSlice.actions;
