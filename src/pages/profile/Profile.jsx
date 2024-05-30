import React from "react";
import Assets from "../../constants/Assets";

export default function Profile() {
  const myStyle = {
    backgroundImage: `url(${Assets.productbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "344px",
    position: "relative",
  };
  return (
    <>
      <div className="container mt-4 p-4">
        <div className="space-y-6">
          <div style={myStyle} className="">
            <div className="relative z-10">
              <div className="flex justify-between p-5">
                <img src={Assets.avatar2} alt="emzor-logo" />
                <div>
                  <button className="text-white bg-[#4196bc] py-3 px-5 rounded-md">
                    502k Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-16">
            <h1 className="text-[#234A75] text-4xl font-medium">
              Tunde Orioza
            </h1>
            <button className="bg-[#234A75] flex px-4 py-2 rounded-md items-center space-x-3">
              <img src={Assets.mobile} alt="" />
              <span className="text-white text-[24px]">Call RM</span>
            </button>
          </div>
        </div>

        <div className="pt-6">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl font-[inter] text-[#353F4D]">
              Account Details
            </h1>
            <button className="bg-[#4d9a1d] px-5 py-3 text-white rounded-lg font-normal text-sm">
              Download
            </button>
          </div>

          <div className="border border-gray-300">
            <div className="p-6 space-y-7">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">Email</h1>
                  <p>Tunde.Orioza@gmail.com</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">Phone</h1>
                  <p>07044290256</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Username
                  </h1>
                  <p>Ezeja</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Wallet ID
                  </h1>
                  <p>234500</p>
                </div>
              </div>
              {/* <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">State</h1>
                  <p>Lagos</p>
                </div>
                <div className="">
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Local Government
                  </h1>
                  <p>Alimosho</p>
                </div>
              </div> */}
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Documents
                  </h1>
                  <div className="flex items-center">
                    <p className="text-[#4d9a1d] text-base">Verified</p>
                    <button className="text-white bg-[#234A75]  px-2 p-1  rounded-md">
                      Edit
                    </button>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Last Seen
                  </h1>
                  <p>10 hours ago</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Total Sales
                  </h1>
                  <p>10,000</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Total Volume
                  </h1>
                  <p>N200,000</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Payment Type
                  </h1>
                  <p>Margin</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Total Volume
                  </h1>
                  <p>N200,000</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">
                    Business Category
                  </h1>
                  <p>Ltd Liablity</p>
                </div>
                <div>
                  <h1 className="text-[#353F4D] font-bold text-2xl">Status</h1>
                  <p>Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
