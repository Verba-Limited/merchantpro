import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../services";

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (userId, thunkAPI) => {
    try {
      console.log("Thunk started with userId:", userId);
      const response = await $api.fetch(`/api/merchant/${userId}`);
      console.log("Thunk response received:", response);
      if ($api.isSuccessful(response)) {
        console.log("Thunk successful:", response.data.data);
        return response.data.data;
      } else {
        console.log("Thunk rejected with:", response.data.message);
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (error) {
      console.log("Thunk error:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
