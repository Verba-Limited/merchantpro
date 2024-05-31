import React from "react";
import Assets from "../../constants/Assets";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const myStyle = {
    backgroundColor: "#234a75",
  };
  return (
    <>
      <div className="">
        <div className="bg-white  ">
          <img src={Assets.resetLogo} alt="resetLogo" className="p-3" />
        </div>
        <div className="" style={myStyle}>
          <div className="flex justify-center items-center h-[100vh]">
            <div className="bg-[#e9edf1] w-[700px] h-[554px] ">
              <div className="flex flex-col items-center space-y-8  pt-6">
                <img
                  src={Assets.reset}
                  alt="Reset Icon"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold text-[#234A75] text-[32px]">
                  Forgot Password?
                </h1>

                <p>No worries, we'll send you reset instruction</p>
                <form className="space-y-4 ">
                  <div className="flex flex-col items-center">
                    <div className="">
                      <input
                        className="w-full p-3 pr-10 border border-gray-300  bg-white rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                        id="currentPassword"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#4d9a1d] text-white px-6 py-3 rounded-md ">
                      Reset password
                    </button>
                  </div>
                </form>

                <Link
                  to="/login"
                  className="mt-4 font-semibold text-[14px] text-[#353F4D] hover:underline"
                >
                  Back to Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
