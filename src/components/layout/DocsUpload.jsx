import React from "react";
import Assets from "../../constants/Assets";

export default function DocsUpload() {
  const documents = [
    {
      title: "Certificate of incorporation ",
      text: "Upload file",
    },
    {
      title: "Copy of certificate of Memorandom ",
      text: "Upload file",
    },
    {
      title: "Copy of form Co7 or CAC 2.3 (Particulars of Director) CAC 1.1 ",
      text: "Upload file",
    },

    {
      title: "TIN  Certificate",
      text: "Upload file",
    },

    {
      title: "Board Resolution or Mandate letter ",
      text: "Upload file",
    },
    {
      title: "Valid means of ID ",
      text: "Upload file",
    },
    {
      title: "Evidence of business Address ",
      text: "Upload file",
    },
    {
      title: " Residence Permit ",
      text: "Upload file",
    },
    {
      title: " SCUML Certificate",
      text: "Upload file",
    },
    {
      title: "Draft Agreement",
      text: "Upload file",
    },
    {
      title: "AML Policy ",
      text: "Upload file",
    },
  ];
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
