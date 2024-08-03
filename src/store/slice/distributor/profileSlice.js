import { createSlice } from "@reduxjs/toolkit";
// import { fetchProfile } from "./distributorThunk";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const profileSlice = createSlice({
  name: "distributorProfile",
  initialState,
  reducers: {
    fetchProfileStart(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchProfileSuccess(state, action) {
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
