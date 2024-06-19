import React from "react";

import Assets from "../../constants/Assets";

export default function AddProduct() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 pt-5">
          <div className="flex flex-wrap md:space-x-8">
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg w-full border-gray-300"
                placeholder="Enter name of product"
                aria-label="TIN"
                name="tin"
                required
              />
            </div>
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Expiry Date: MM/DD/YYYY <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="form-control form-control-lg w-full border-gray-300"
                placeholder="Enter"
                aria-label="RC Number"
                name="rcNumber"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap md:space-x-8">
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Product Category <span className="text-red-500">*</span>
              </label>
              <select className="py-3 w-full bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                NAFDAC Number <span className="text-red-500">*</span>
              </label>
              <select className="py-3 w-full bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap md:space-x-8">
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Product Description <span className="text-red-500">*</span>
              </label>
              <textarea className="h-24 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                NAFDAC Summary <span className="text-red-500">*</span>
              </label>
              <textarea className="h-24 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>
          <div className="flex flex-wrap md:space-x-8">
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Payment Plan <span className="text-red-500">*</span>
              </label>
              <select className="py-3 w-full bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
            <div className="mb-3 w-full md:w-2/5">
              <label className="text-[17px] font-normal text-black">
                Select different payment period{" "}
                <span className="text-red-500">*</span>
              </label>
              <select className="py-3 w-full bg-transparent border rounded-md border-[#d7dbde]">
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
                <option>Select Category</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap md:space-x-8">
            <div className="mb-3 w-full md:w-2/5">
              <label
                htmlFor="file-upload-1"
                className="flex w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <div className="flex py-2 space-x-6 items-center">
                  <img
                    src={Assets.vid}
                    alt="upload icon"
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
                <input id="file-upload-1" type="file" className="hidden" />
              </label>
            </div>
            <div className="mb-3 w-full md:w-2/5">
              <label
                htmlFor="file-upload-2"
                className="flex w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
              >
                <div className="flex py-2 space-x-6 items-center">
                  <img
                    src={Assets.vid}
                    alt="upload icon"
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
                <input id="file-upload-2" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full md:w-2/5 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="flex mt-5 space-x-7">
              <div className="flex">
                <img src={Assets.syrup} alt="" />
                <span>
                  <img src={Assets.multiply} alt="" />
                </span>
              </div>
              <div className="flex">
                <img src={Assets.syrup} alt="" />
                <span>
                  <img src={Assets.multiply} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-medium text-[24px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
