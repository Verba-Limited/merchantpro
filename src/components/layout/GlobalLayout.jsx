// import { Toaster } from "sonner";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";

export default function GlobalLayout() {
  const location = useLocation();
  const customStyle = {
    overflowX: "hidden",
  };

  const pathToPageName = {
    "/dashboard": "Hey Jane, Good afternoon",
    "/orders": "Orders",
    "/products": " Products",
    "/wallet": "Wallet",
    "/reports": "Reports",
    "/settings": "Settings",
    "/help": "Help",
  };

  const currentPageName = pathToPageName[location.pathname];
  const pathsWithoutTopbar = [""];
  const shouldRenderTopbar = !pathsWithoutTopbar.includes(location.pathname);

  return (
    <>
      <div className="">
        <Sidebar />
        <div style={{ marginLeft: "16%" }}>
          {shouldRenderTopbar && (
            <Topbar pageName={currentPageName} className="w-full" />
          )}
          <main className=" px-6 px-md-0" style={customStyle}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
