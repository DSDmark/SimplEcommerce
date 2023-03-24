import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../state/cart"

const store = configureStore({
  reducer: { cart: cartReducer },
  devTools: true
})

export default store;
