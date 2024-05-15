// import { Toaster } from "sonner";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";

export default function GlobalLayout() {
  const location = useLocation();

  const pathToPageName = {
    "/dashboard": "Hey Jane, Good afternoon",
    "/orders": "Orders",
    "/products": "Products",
    "/wallet": "Wallet",
    "/reports": "Reports",
    "/settings": "Settings",
    "/help": "Help",
  };

  const currentPageName = pathToPageName[location.pathname];
  const pathsWithoutTopbar = [""];
  const shouldRenderTopbar = !pathsWithoutTopbar.includes(location.pathname);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: "18%" }}>
        {shouldRenderTopbar && <Topbar pageName={currentPageName} />}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      5
    </div>
  );
}
