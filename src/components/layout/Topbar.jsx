import React from "react";
import TobarIcons from "../../constants/TobarIcons";

export default function Topbar({ pageName }) {
  return (
    <div className="py-4 sticky z-50 top-0 inset-0 md:px-0 bg-[#FFF] md:flex flex-col md:justify-between md:flex-row items-center  md:border-b  md:gap-5 ">
      <div className="flex items-center w-100">
        <div className="p-1 max-[500px]:flex hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h1 className=" text-[#234A75] text-[24px] flex max-[500px]:justify-end font-bold  text-dark pl-3 w-100 ">
          {pageName}
        </h1>

        <div className="mr-3 d-flex justify-content-between ">
          <TobarIcons />
        </div>
      </div>
    </div>
  );
}
