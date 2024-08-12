import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import AuthReducer from "./slice/authSlice";
import FormReducer from "./slice/formSlice";
import ProfileReducer from "./slice/distributor/profileSlice";
import ProductReducer from "./slice/distributor/ProductSlice";
import AddProductReducer from "./slice/distributor/addProductFormSlice";
import { useDispatch } from "react-redux";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine your reducers
const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  distributorProfile: ProfileReducer,
  products: ProductReducer,
  addProducts: AddProductReducer,
});

// Wrap the combined reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

// Create a persistor
export const persistor = persistStore(store);

// Utility to get the current state type
export const getRootState = () => store.getState();

// Utility to get the dispatch function type
export const useAppDispatch = () => useDispatch();

export default store;
