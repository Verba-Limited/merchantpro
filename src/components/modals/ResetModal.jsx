import React from "react";
import Assets from "../../constants/Assets";
import { Link } from "react-router-dom";

export default function ResetModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="bg-white py-5 rounded-lg shadow-md text-center w-[600px]">
          <img
            src={Assets.reseticon}
            alt="Success Icon"
            className="mx-auto mb-4"
            width={99}
            height={99}
          />
          <h1 className="text-[#234A75] text-[22px] font-medium mb-4">
            Password Reset Successful
          </h1>
          <Link to="/dashboard">
            <button className="bg-[#4d9a1d] text-white px-6 py-3 rounded-md">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
