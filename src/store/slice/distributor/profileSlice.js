import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "distributorProfile",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {
    fetchProfileStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchProfileSuccess(state, action) {
      console.log("Profile fetch succeeded with payload:", action.payload);
      state.status = "succeeded";
      state.data = action.payload;
    },
    fetchProfileFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } =
  profileSlice.actions;

export default profileSlice.reducer;
