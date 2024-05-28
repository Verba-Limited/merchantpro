import React from "react";
// import logo from "../../assets/Logo-green-full.svg";
// import { ArrowLeft } from "iconsax-react";
import { ArrowLeft } from "iconsax-react";
import { useLocation, useNavigate } from "react-router-dom";
import TobarIcons from "../../constants/TobarIcons";

export default function Topbar({ pageName }) {
  const location = useLocation();

  // const [showMenu, setShowMenu] = useState(false);

  const routesWithArrowLeft = ["/products/addProduct"];

  const shouldRenderArrowLeft = routesWithArrowLeft.includes(location.pathname);
  const navigate = useNavigate();

  const pathname = location.pathname;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-4  md:pt-8 sticky z-30  inset-0 md:px-0 md:bg-[#FFF] h-full md:flex flex-col md:justify-between md:flex-row items-center w-full bg-50-500 md:border-b  md:gap-5 ">
      {location.pathname !== "/notification" && (
        <div
          className={`d-flex ${
            location.pathname === "/discover" ? "mr-3" : "w-100"
          } justify-content-between pr-3`}
        >
          {shouldRenderArrowLeft && (
            <button onClick={handleGoBack}>
              <ArrowLeft size="24" color="#292D32" variant="TwoTone" />
            </button>
          )}
          <div className="d-flex align-items-center w-100">
            <h1 className=" text-[#234A75] text-[24px] font-bold  text-dark pl-3 w-100">
              {pageName}
            </h1>

            <div className="mr-3 d-flex justify-content-between">
              <TobarIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
