import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import store from "./store/store";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
