import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../services";
import { toast } from "react-toastify";

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, thunkAPI) => {
    try {
      const response = await $api.post("/api/products", productData);
      console.log(response);
      if ($api.isSuccessful(response)) {
        toast.success("Product created successfully!");
        return response.data;
      } else {
        toast.error(
          response.data.message ||
            "Product creation failed. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error details:", error);
      toast.error(
        error.response?.data?.message ||
          "An unexpected error occurred. Please try again later."
      );
      return thunkAPI.rejectWithValue(
        error.response?.data || "Unknown error occurred"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
