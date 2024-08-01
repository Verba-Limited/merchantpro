// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    businessName: "",
    organizationId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    hearAbout: "",
    termsAccepted: false,
  },
  referralCode: "",
  otherChannel: "",
  error: null,
  message: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
    setOtherChannel: (state, action) => {
      state.otherChannel = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  setFormData,
  setReferralCode,
  setOtherChannel,
  setError,
  setMessage,
} = formSlice.actions;
export default formSlice.reducer;
