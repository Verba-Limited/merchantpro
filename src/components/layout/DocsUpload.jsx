import React from "react";
import Assets from "../../constants/Assets";
import { documents } from "../../data";

export default function DocsUpload() {
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
        <div className="flex justify-between mb-5">
          <p className="">
            {" "}
            Sign merchant agreement form<span className="text-red-600">*</span>
          </p>
          <div className="flex space-x-3">
            <img src={Assets.sign} alt="" />
            <p>Sign</p>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <p className="">
            {" "}
            Merchant registration Form<span className="text-red-600">*</span>
          </p>
          <div className="flex space-x-3">
            <img src={Assets.download} alt="" width={36} height={36} />
          </div>
        </div>
        {documents.map((docs, index) => (
          <div key={index} className="flex justify-between mb-5">
            <p>
              {docs.title} <span className="text-red-600">*</span>
            </p>
            <label htmlFor="file-upload" className="cursor-pointer">
              <h1 className="text-[#5C99CF] text-[16px] font-normal">
                Upload file
              </h1>
              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
