import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";
import { promoCarouselSlice } from "./slices/promoCarouselSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        promoCarousel: promoCarouselSlice.reducer
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>