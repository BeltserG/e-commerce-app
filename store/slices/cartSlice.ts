import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [1,2,3],
  totalAmmount: 0,
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
    clearCart(state, action) {},
  },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export { cartSlice };