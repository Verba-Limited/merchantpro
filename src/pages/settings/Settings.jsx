import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex relative space-x-7  mt-2">
        <button
          className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
            activeTab === "profile"
              ? "bg-[#5c99cf] text-white"
              : "border-b-[3px] border-transparent"
          }`}
          onClick={() => handleTabClick("profile")}
        >
          {" "}
          Profile
        </button>
        <button
          className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
            activeTab === "kyc"
              ? "bg-[#5c99cf] text-white"
              : "border-b-[3px] border-transparent"
          }`}
          onClick={() => handleTabClick("kyc")}
        >
          KYC
        </button>
        <button
          className={`transform ease-in-out duration-500 delay-100 cursor-pointer px-[10px] py-[5px] ${
            activeTab === "updatePassword"
              ? "bg-[#5c99cf] text-white"
              : "border-b-[3px] border-transparent"
          }`}
          onClick={() => handleTabClick("updatePassword")}
        >
          Update Password
        </button>
      </div>
    </>
  );
}
