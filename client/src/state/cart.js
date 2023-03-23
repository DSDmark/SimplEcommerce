import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items - action.payload
    }
  }
})

export const { setItems } = cartSlice.actions

export default cartSlice.reducer
