import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/error/ErrorPage";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/signIn/Login";
import Dashboard from "./pages/distributor/dashboard/Dashboard";
import GlobalLayout from "./components/layout/DistributorLayout";
import ManufacturerLayout from "./components/layout/ManufacturerLayout";
import Orders from "./pages/distributor/orders/Orders";
import Products from "./pages/distributor/products/Products";
import Wallet from "./pages/distributor/wallet/Wallet";
import Reports from "./pages/distributor/reports/Reports";
import Settings from "./pages/distributor/settings/Settings";
import Help from "./pages/distributor/help/Help";
import Profile from "./pages/distributor/profile/Profile";
import AddProduct from "./components/layout/AddProduct";
import ForgetPassword from "./pages/distributor/forgetpassword/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset-password",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <Navigate to={"/register"} />,
    errorElement: <ErrorPage />,
  },
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/addProducts",
        element: <AddProduct />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },

  {
    element: <ManufacturerLayout />,
    children: [
      {
        path: "/manufacturer/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/manufacturer/profile",
        element: <Profile />,
      },
      {
        path: "/manufacturer/orders",
        element: <Orders />,
      },
      {
        path: "/manufacturer/products",
        element: <Products />,
      },
      {
        path: "/products/addProducts",
        element: <AddProduct />,
      },
      {
        path: "/manufacturer/wallet",
        element: <Wallet />,
      },
      {
        path: "/manufacturer/reports",
        element: <Reports />,
      },
      {
        path: "/manufacturer/settings",
        element: <Settings />,
      },
      {
        path: "/manufacturer/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
