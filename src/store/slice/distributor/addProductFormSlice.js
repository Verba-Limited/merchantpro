import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organizationId: "",
  creatorId: "",
  email: "",
  manufacturer: "",
  productNumber: "",
  productName: "",
  productCategory: "",
  productDescription: "",
  quantity: "",
  price: "",
  coverPicture: "",
  manufacturedDate: "",
  expiryDate: "",
};

const addProductFormSlice = createSlice({
  name: "addProductSlice",
  initialState,
  reducers: {
    setOrganizationId: (state, action) => {
      state.organizationId = action.payload;
    },
    setCreatorId: (state, action) => {
      state.creatorId = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setManufacturer: (state, action) => {
      state.manufacturer = action.payload;
    },
    setProductNumber: (state, action) => {
      state.productNumber = action.payload;
    },
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setProductDescription: (state, action) => {
      state.productDescription = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setManufacturedDate: (state, action) => {
      state.manufacturer = action.payload;
    },
    setExpiryDate: (state, action) => {
      state.expiryDate = action.payload;
    },
  },
});

export const {
  setCreatorId,
  setEmail,
  setExpiryDate,
  setManufacturedDate,
  setManufacturer,
  setOrganizationId,
  setPrice,
  setProductCategory,
  setProductDescription,
  setProductName,
  setProductNumber,
  setQuantity,
} = addProductFormSlice.actions;
export default addProductFormSlice.reducer;
