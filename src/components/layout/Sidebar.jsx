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
// import AdminButton from "../UI/AdminButton";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
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
    <aside
      className="border-end border-2 border-gray-100"
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
        {/* <div className="d-grid gap-3">
        
          <Link to="/" className="ms-3">
            <div className="d-flex align-items-center cursor-pointer">
              <LogoutCurve
                color="#082521"
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              <span className="fs-5 ms-3 text-dark">Sign out</span>
            </div>
          </Link>
        </div> */}
      </div>
    </aside>
  );
}
