import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/error/ErrorPage";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/signIn/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import GlobalLayout from "./components/layout/GlobalLayout";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import Wallet from "./pages/wallet/Wallet";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import Help from "./pages/help/Help";
import Profile from "./pages/profile/Profile";
// import SubPages from "./components/Ui/SubPages";
import AddProduct from "./components/layout/AddProduct";

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
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
