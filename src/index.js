import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import store, { persistor } from "./store/store";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
