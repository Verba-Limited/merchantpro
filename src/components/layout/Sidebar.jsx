import { Link, useLocation } from "react-router-dom";
import {
  Category,
  People,
  Sms,
  Profile2User,
  Setting2,
  GridEdit,
  LogoutCurve,
  ProfileCircle,
  Candle,
} from "iconsax-react";
import Logo from "../../assets/img/mplogo.png";
import { useState } from "react";
// import AdminButton from "../UI/AdminButton";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const handleBurgerMenu = () => {
    // setOpenMenu(!openMenu);
    setOpenMenu(true);
    console.log("just-clicked");
  };

  const links = [
    { path: "/dashboard", icon: Category, label: "Dashboard" },
    { path: "/profile", icon: ProfileCircle, label: "My Profile" },
    { path: "/orders", icon: Profile2User, label: "Orders" },
    { path: "/products", icon: People, label: "Products" },
    { path: "/wallet", icon: GridEdit, label: "My Wallet" },
    { path: "/reports", icon: Candle, label: "Report" },
    { path: "/settings", icon: Setting2, label: "Settings" },
    { path: "/help", icon: Sms, label: "Help" },
    { path: "/register", icon: LogoutCurve, label: "Log Out" },
  ];

  return (
    <>
      <aside
        className="max-[500px]:hidden"
        style={{
          maxWidth: "240px",
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundColor: "#234A75",
        }}
      >
        <div
          className="d-flex flex-column mx-3 text-secondary"
          style={{
            minHeight: "100vh",
            justifyContent: "space-between",
            maxHeight: "650px",
            paddingTop: "30px",
            paddingBottom: "24px",
            maxWidth: "100%",
          }}
        >
          <div className="d-grid gap-4">
            <Link to="/">
              <img src={Logo} alt="Logo" width={150} />
            </Link>
            <nav className="d-flex flex-column gap-3">
              {links.map(({ path, icon: Icon, label }) => (
                <Link to={path} key={path}>
                  <div
                    className={`d-flex align-items-center p-2 cursor-pointer text-light ${
                      isActive(path)
                        ? "bg-success text-light rounded w-full px-4 transform ease-in-out duration-500 delay-100"
                        : "text-white"
                    } hover:bg-primary hover:text-light rounded transition-all`}
                  >
                    <Icon
                      variant="TwoTone"
                      className="me-3"
                      style={{ width: "1.8rem", height: "1.8rem" }}
                    />
                    <span className="fs-5">{label}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* {openMenu && (
        <div className="mt-5" onClick={handleBurgerMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )} */}
    </>
  );
}
