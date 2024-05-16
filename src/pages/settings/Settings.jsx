import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container px-10">
        <div className="flex relative space-x-20 mt-2">
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

        {activeTab === "profile" && (
          <div>
            <div className="flex justify-end">
              <p className="font-bold text-2xl text-[#234A75]">Step 1 of 3</p>
            </div>
            <div>
              <form>
                <div className="flex justify-evenly space-x-5">
                  <div className="mb-3 w-1/2 row">
                    <label className=" text-[17px] font-normal text-black">
                      TIN
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter"
                      aria-label="TIN"
                      required
                    />
                  </div>
                  <div className="mb-3 w-1/2 row">
                    <label className=" text-[17px] font-normal text-black">
                      RC Number
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter"
                      aria-label="RC Number"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 w-full row">
                  <label className=" text-[17px] font-normal text-black">
                    Business Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    aria-label="TIN"
                    required
                  />
                </div>
                <div className="mb-3 w-full row">
                  <label className=" text-[17px] font-normal text-black">
                    Business Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                    aria-label="TIN"
                    required
                  />
                </div>
                <div className="flex justify-evenly space-x-5">
                  <div className="mb-3 w-1/2 row">
                    <label className=" text-[17px] font-normal text-black">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter"
                      aria-label="TIN"
                      required
                    />
                  </div>
                  <div className="mb-3 w-1/2 row">
                    <label className=" text-[17px] font-normal text-black">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter"
                      aria-label="RC Number"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 w-full row">
                  <label className="text-[17px] font-normal text-black">
                    Local Government
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Phone Number"
                    aria-label="TIN"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button className="px-5 py-3 bg-[#4D9A1D] text-white rounded-xl">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
