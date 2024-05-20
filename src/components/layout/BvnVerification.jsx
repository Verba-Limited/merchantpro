import React from "react";
import Assets from "../../constants/Assets";

export default function BvnVerification({
  bvn,
  setBvn,
  isVerified,
  isVerifying,
  handleVerification,
}) {
  return (
    <div className=" bg-white  border rounded-lg">
      <div className="flex justify-between items-center bg-[#f3f8fb] py-3 p-3">
        <div className="flex items-center space-x-3">
          <span className="cursor-pointer">
            <img src={Assets.drop} alt="" />
          </span>
          <h2 className="text-lg font-semibold">Verification</h2>
        </div>
        <div className="w-1/2 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600" style={{ width: "50%" }}></div>
        </div>
        <span className="ml-2 text-gray-600">50% completed</span>
      </div>
      <div className="p-4">
        <div className="mb-4 flex space-x-4 items-center">
          <div className="flex flex-col w-5/6">
            <label
              htmlFor="bvn"
              className="block text-sm font-medium text-gray-700"
            >
              BVN
            </label>
            <input
              type="text"
              id="bvn"
              value={bvn}
              onChange={(e) => setBvn(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter BVN"
              disabled={isVerified}
            />
          </div>
          <div className="w-1/6 mt-[1.7rem]">
            {isVerified && (
              <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Verified
              </span>
            )}
          </div>
        </div>
        <div className="text-gray-600">
          {isVerifying
            ? "BVN Verification is in progress."
            : "Enter your BVN to verify."}
        </div>
        <button
          onClick={handleVerification}
          disabled={isVerified || isVerifying}
          className={`mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isVerified || isVerifying
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Verify
        </button>
      </div>
    </div>
  );
}
