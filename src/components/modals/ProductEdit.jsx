import React from "react";
import Assets from "../../constants/Assets";
import { priceDesc } from "../../data";

export default function ProductEdit({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="bg-white rounded-lg shadow-md  w-[600px] h-[100vh] p-4  overflow-y-auto ">
          <div className="flex justify-between border-b-2 p-2 ">
            <h1 className="text-[#1D252D] text-[22px] font-semibold">
              View Detail
            </h1>
            <button onClick={onClose}>
              <img src={Assets.close} alt="" />
            </button>
          </div>

          <div className="pt-4 md:space-y-5">
            <div className="flex justify-evenly space-x-5">
              <div className="mb-3 w-1/2 row">
                <label className=" text-[15px] font-normal text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Lokmal"
                  aria-label="TIN"
                  name="tin"
                  required
                />
              </div>
              <div className="mb-3 w-1/2 row">
                <label className=" text-[15px] font-normal text-black">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter"
                  aria-label="Cate"
                  name="Maleria"
                  required
                />
              </div>
            </div>
            <div className="flex justify-evenly space-x-5">
              <div className="mb-3 w-1/2 row">
                <label className=" flex text-[15px] font-normal text-black">
                  NAFDAC NO:{" "}
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    Verified
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="12345-678-923"
                  aria-label="Nafdac No"
                  name="tin"
                  required
                />
              </div>
              <div className="mb-3 w-1/2 row">
                <label className=" text-[15px] font-normal text-black">
                  Expiring Date
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="8/10/2012"
                  aria-label="Expiring Date"
                  name="Maleria"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-3 w-full row">
                <label className=" text-[15px] font-normal text-black">
                  Details
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg py-4"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Eleifend a orci rhoncus diam."
                  aria-label="details"
                  name="details"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <h1 className="text-[15px] font-normal text-black">Cover</h1>
                <div className="border-2 border-gray-300 p-3 mt-3">
                  <img src={Assets.cover} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex space-x-12">
                {priceDesc.map((items, index) => (
                  <div key={index} className="space-y-3">
                    <h1 className="text-[#2B2B2B] text-[14px] font-medium">
                      {items.title}
                    </h1>
                    <div className="flex space-x-3 border-2 border-gray-300 px-4 py-2">
                      <div className="flex  space-x-3">
                        <img src={items.img} alt="" width={23} height={20} />
                        <span>{items.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
