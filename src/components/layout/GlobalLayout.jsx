// import { Toaster } from "sonner";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

// const Container = styled.div`
//   @media (max-width: 500px) {
//     display: none;
//   }

//   @media (min-width: 600px) {
//     display: flex;
//   }
// `;

export default function GlobalLayout() {
  const location = useLocation();

  const pathToPageName = {
    "/dashboard": "Hey Jane,Good afternoon",
    "/profile": "Merchant's Details",
    "/orders": "Orders",
    "/products": " Products",
    "/products/addProducts": "Add Products",
    "/wallet": "Wallet",
    "/reports": "Reports",
    "/settings": "Settings",
    "/help": "Help",
  };

  const currentPageName = pathToPageName[location.pathname];

  return (
    <>
      <div className="w-full">
        <Sidebar />

        <div className="md-plus:ml-[20%] xl-plus:ml-[19%] 2xl-plus:ml-[15.8%] lg-plus:ml-[23.4%]">
          <Topbar pageName={currentPageName} className="" />
          <main className=" ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
