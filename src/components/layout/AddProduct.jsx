import React from "react";

import Assets from "../../constants/Assets";

export default function AddProduct() {
  return (
    <>
      <div className="container ">
        <div className="flex flex-col pl-20 space-y-6 pt-5">
          <div className="flex space-x-28">
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter name of product"
                aria-label="TIN"
                name="tin"
                required
              />
            </div>
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Expiry Date:MM/DD/YYYY <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter"
                aria-label="RC Number"
                name="rcNumber"
                required
              />
            </div>
          </div>
          <div className="flex space-x-28">
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Product Name <span className="text-red-500">*</span>
              </label>
              <select className="py-3 bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                NAFDAC Number <span className="text-red-500">*</span>
              </label>
              <select className="py-3 bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-28">
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Product Description <span className="text-red-500">*</span>
              </label>
              <textarea class=" h-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                NAFDAC Summary <span className="text-red-500">*</span>
              </label>
              <textarea class=" h-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>
          <div className="flex space-x-28">
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Payment Plan <span className="text-red-500">*</span>
              </label>
              <select className="py-3 bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
            <div className="mb-3 w-2/5 row">
              <label className=" text-[17px] font-normal text-black">
                Select different payment period{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="py-3 bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-28">
            <div className="mb-3 w-2/5 row  space-y-7">
              <label
                htmlFor="file-upload"
                className="flex w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <div className="flex">
                  <div className="flex py-2 space-x-6 items-center md:space-y-3">
                    <img
                      src={Assets.vid}
                      alt="uplaod icon"
                      width={40}
                      height={40}
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        <span className="font-normal text-[20px]">
                          Upload videos
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <input id="file-upload" type="file" className="hidden" />
              </label>
            </div>
            <div className="mb-3 w-2/5 row ">
              <label
                htmlFor="file-upload"
                className="flex  w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <div className="flex">
                  <div className="flex py-2 space-x-6 items-center md:space-y-3">
                    <img
                      src={Assets.vid}
                      alt="uplaod icon"
                      width={40}
                      height={40}
                    />

                    <div>
                      <p className="text-sm text-gray-500">
                        <span className="font-normal text-[20px]">
                          Upload videos
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <input id="file-upload" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="">
            <div className="w-2/5 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="flex mt-5 space-x-7">
              <div className=" flex">
                <img src={Assets.syrup} alt="" />
                <span>
                  <img src={Assets.multiply} alt="" />
                </span>
              </div>
              <div className=" flex">
                <img src={Assets.syrup} alt="" />
                <span>
                  <img src={Assets.multiply} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end md:pr-16">
            <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-medium text-[24px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
