import React from "react";
import Assets from "../../constants/Assets";

export default function ProductItems() {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg w-[70%] mx-auto">
        <div className="p-3 space-y-7">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">Piriton Syrup</h1>
            <img src={Assets.heart} alt="Heart Icon" width={24} height={24} />
          </div>
          <div className="flex justify-center">
            <img
              src={Assets.piriton}
              alt="Piriton Syrup"
              className="w-[215px] h-[215px] object-contain"
            />
          </div>
          <div className="flex justify-between">
            <img src={Assets.naria} alt="Naira Icon" />
            <p className="text-lg font-semibold">254.99</p>
            <button className="flex items-center justify-center px-3 space-x-2 bg-[#234a75] text-white rounded">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
