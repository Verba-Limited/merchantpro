// import { Toaster } from "sonner";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GlobalLayout() {
  const [asideOpen, setAsideOpen] = useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const userName = user ? user.firstName : "User";

  const pathToPageName = {
    "/dashboard": `Hey ${userName}, Good afternoon`,
    "/profile": "Merchant's Details",
    "/orders": "Orders",
    "/products": " Products",
    "/products/addProducts": "Add Products",
    "/wallet": "Wallet",
    "/reports": "Reports",
    "/settings": "Settings",
    "/help": "Help",
  };

  const toggleslider = () => {
    setAsideOpen(!asideOpen);
  };

  const closeSidebar = () => {
    setAsideOpen(false);
  };
  const currentPageName = pathToPageName[location.pathname];

  return (
    <>
      {/* Mobile view */}
      <div className="w-full md:hidden block">
        <Sidebar isOpen={asideOpen} closeSidebar={closeSidebar} />
        <div className="md-plus:ml-[20%] xl-plus:ml-[19%] 2xl-plus:ml-[15.8%] lg-plus:ml-[23.4%]">
          <Topbar toggleslider={toggleslider} pageName={currentPageName} />
          <main className=" ">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Desktop view */}
      <div className="w-full hidden md:block">
        <Sidebar />
        <div className="md-plus:ml-[30%] xl-plus:ml-[19%] 2xl-plus:ml-[15.8%] lg-plus:ml-[23.4%]">
          <Topbar pageName={currentPageName} className="" />
          <main className=" ">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
