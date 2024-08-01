import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import { useDispatch } from "react-redux";
import FormReducer from "./slice/formSlice";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    form: FormReducer,
  },
});

// Utility to get the current state type
export const getRootState = () => store.getState();

// Utility to get the dispatch function type
export const useAppDispatch = () => useDispatch();

export default store;
