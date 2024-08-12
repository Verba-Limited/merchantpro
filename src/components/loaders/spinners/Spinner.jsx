import React from "react";
import mplogo from "../../../assets/img/mplogo.png";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0000004D] bg-opacity-70 z-50">
      <div className="relative flex items-center justify-center p-4 w-28 h-28">
        <div className="relative">
          <img src={mplogo} alt="Logo" width={100} height={100} priority />
        </div>
        <svg
          className="absolute top-0 left-0 w-full h-full animate-spin"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#3d3c3c"
            strokeWidth="5"
            strokeDasharray="283"
            strokeDashoffset="75"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
