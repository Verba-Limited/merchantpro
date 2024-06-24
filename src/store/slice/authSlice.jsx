import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const initialState = {
  first_name: Cookies.get("merchant_pro_user_first_name") || "",
  last_name: Cookies.get("merchant_pro_user_last_name") || "",
  email: Cookies.get("merchant_pro_user_email") || "",
  access_token: Cookies.get("merchant_pro_user_access_token") || "",
  id: Cookies.get("merchant_pro_user_id") || "",
  role: Cookies.get("merchant_pro_user_role") || "",
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserFirstName: (state, action) => {
      state.first_name = action.payload;
      Cookies.set("merchant_pro_user_first_name", action.payload);
    },
    setUserLastName: (state, action) => {
      state.last_name = action.payload;
      Cookies.set("merchant_pro_user_last_name", action.payload);
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
      Cookies.set("merchant_pro_user_email", action.payload);
    },
    setUserAccessToken: (state, action) => {
      state.access_token = action.payload;
      Cookies.set("merchant_pro_user_access_token", action.payload);
    },
    setUserId: (state, action) => {
      state.id = action.payload;
      Cookies.set("merchant_pro_user_id", action.payload);
    },
    setUserRole: (state, action) => {
      state.role = action.payload;
      Cookies.set("merchant_pro_user_role", action.payload);
    },
    clearAuth: (state) => {
      toast.success("Logout successful!");
      state.first_name = "";
      state.last_name = "";
      state.email = "";
      state.access_token = "";
      state.id = "";
      state.role = "";
      Cookies.remove("merchant_pro_user_first_name");
      Cookies.remove("merchant_pro_user_last_name");
      Cookies.remove("merchant_pro_user_email");
      Cookies.remove("merchant_pro_user_access_token");
      Cookies.remove("merchant_pro_user_id");
      Cookies.remove("merchant_pro_user_role");
    },
    removeEmail: (state) => {
      state.email = "";
      Cookies.remove("merchant_pro_user_email");
    },
  },
});

export const {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserAccessToken,
  setUserId,
  setUserRole,
  clearAuth,
  removeEmail,
} = AuthSlice.action;

const AuthReducer = AuthSlice.reducer;
export default AuthReducer;
