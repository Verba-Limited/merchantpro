import { useState } from "react";
// import logo from "../../assets/Logo-green-full.svg";
import { ArrowLeft } from "iconsax-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TobarIcons from "../../constants/TobarIcons";

export default function Topbar({ pageName, showHomeLink }) {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const routesWithArrowLeft = ["/dashboardr", "/discover/discover-people"];

  const shouldRenderArrowLeft = routesWithArrowLeft.includes(location.pathname);
  const navigate = useNavigate();

  const pathname = location.pathname;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-3 pt-4 sticky top-0 px-3 bg-emphasis h-full d-flex flex-column justify-between flex-md-row align-items-center w-100 border-bottom">
      {/* <div
        className={`d-flex d-md-none justify-between align-items-center w-100 ${
          location.pathname === "/notification" ? "mb-0" : "mb-3"
        }`}
      >
   
        <button onClick={handleMenu}>
          <img
            src="img-1.jpg"
            alt="profile"
            className="rounded-circle"
            width={36}
            height={36}
          />
        </button>
      </div> */}
      {/* <div>
        {location.pathname === "/notification" && (
          <h1 className="d-none d-md-block fw-bold fs-6 text-dark pl-3">
            {pageName}
            ahahah
          </h1>
        )}
      </div> */}
      {location.pathname !== "/notification" && (
        <div
          className={`d-flex ${
            location.pathname === "/discover" ? "mr-3" : "w-100"
          } justify-content-between pr-3`}
        >
          <div className="d-flex align-items-center w-100">
            {shouldRenderArrowLeft && (
              <button onClick={handleGoBack} className="btn btn-link">
                <ArrowLeft size="24" color="#292D32" variant="TwoTone" />
              </button>
            )}
            <h1 className="d-none d-md-block fw-bold fs-6 text-dark pl-3 w-100">
              {pageName}
            </h1>

            <div className="mr-3 d-flex justify-content-between">
              <TobarIcons /> {/* Using TopbarIcon component */}
            </div>

            {/* {pathname in searchPlaceHolders && (
              <div className="mr-3">
                <TobarIcons />
              </div>
            )} */}

            {/* <TopBarAllButtons pathname={pathname} /> */}
          </div>
        </div>
      )}
    </div>
  );
}
