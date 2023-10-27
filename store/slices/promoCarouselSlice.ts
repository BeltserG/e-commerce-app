import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  length: 0,
  current: 1,
};

const promoCarouselSlice = createSlice({
  name: "promoCarousel",
  initialState,
  reducers: {
    setLength(state, action) {
      state.length = action.payload;
      console.log("1");
    },
    moveForward(state) {
      state.current++;
    },
    moveBackward(state) {
      state.current--;
    },
    moveHome(state, action) {},
  },
});

export const { setLength, moveBackward, moveForward, moveHome } =
  promoCarouselSlice.actions;
export { promoCarouselSlice };
