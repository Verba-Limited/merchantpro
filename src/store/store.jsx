import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

// Utility to get the current state type
export const getRootState = () => store.getState();

// Utility to get the dispatch function type
export const useAppDispatch = () => useDispatch();

export default store;
