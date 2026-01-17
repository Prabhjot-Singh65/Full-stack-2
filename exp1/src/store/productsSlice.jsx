import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Smart TV", price: 35999 },
    { id: 2, name: "Bluetooth Speaker", price: 2999 },
    { id: 3, name: "Wireless Mouse", price: 899 },
    { id: 4, name: "Gaming Keyboard", price: 2499 },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index !== -1) state.products[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { addProduct, editProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
