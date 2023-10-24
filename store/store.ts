import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})

export {store};
export type RootState = ReturnType<typeof store.getState>