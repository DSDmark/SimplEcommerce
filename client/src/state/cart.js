import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
  }
})

export const { setItems, isCartOpen } = cartSlice.actions

export default cartSlice.reducer
