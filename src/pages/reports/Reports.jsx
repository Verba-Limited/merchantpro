import React from "react";
import { orderItems, salesData, drugs } from "../../data";
import Assets from "../../constants/Assets";
import { orderTable } from "../../data";
import OrderTable from "../../components/Ui/OrderTable";

export default function Reports() {
  return (
    <>
      <div className="md:container md:space-y-10 p-2">
        <div className="flex md:justify-between pt-4 md:p-3 max-[500px]:grid max-[500px]:grid-cols-2 gap-4 ">
          {orderItems.map((items, index) => (
            <div
              key={index}
              className="flex bg-[#f3f8fb] p-3 space-x-10 rounded"
            >
              <div>
                <h1 className="text-[#A0AEC0] text-[12px] font-bold">
                  {items.status}
                </h1>
                <p className="text-[#2D3748] text-[18px] font-bold">
                  {items.price}
                </p>
              </div>
              <img src={items.img} alt="" />
            </div>
          ))}
        </div>

        <div className="border border-gray-300 mt-4 p-2 md:p-4">
          <div>
            <h2 className="text-[24px] text-[#414D55] font-bold mb-4 font-[inter]">
              Daily Sales
            </h2>
          </div>
          <div className="flex flex-col items-center w-full p-6">
            <div className="flex justify-between w-full">
              {salesData.map((data) => (
                <div key={data.day} className="flex flex-col items-center">
                  <div className="relative h-56 w-[1.4rem] bg-gray-200 rounded-xl overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-blue-600 rounded-lg"
                      style={{ height: `${data.value}%` }}
                    ></div>
                    {data.value === 62 && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full shadow p-1 text-xs">
                        {data.value}
                      </div>
                    )}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {data.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-3 border border-gray-300 hidden md:block md:p-4 ">
          <div className="flex justify-between items-center">
            <div className="flex space-x-24 items-center">
              <div className=" md:w-2/5 w-full row">
                <label className=" text-[17px] font-normal text-black">
                  Status
                </label>
                <select className="py-2 bg-transparent border rounded-md border-[#d7dbde]">
                  <option>Show All</option>
                  <option>Select Category</option>
                  <option>Select Category</option>
                  <option>Select Category</option>
                </select>
              </div>
              <div className="space-y-3">
                <h1 className="text-[#2B2B2B] text-[14px] font-medium">
                  Payment Plan
                </h1>
                <div className="flex space-x-3 border-2 border-gray-300 px-4 py-1">
                  <div className="flex items-center space-x-3">
                    <p className="whitespace-nowrap">Start Date</p>
                    <img src={Assets.divide} alt="" />
                    <p className="whitespace-nowrap">End Date</p>
                    <img src={Assets.date} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex mt-4">
              <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-normal text-xl">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <style>
            {`
          table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            border: 1px solid #ddd;
          }
          
          th, td {
            text-align: left;
            padding: 8px;
          }
          
        `}
          </style>
          <table className="min-w-full bg-white" responsive>
            <thead>
              <tr className=" bg-[#f3f8fb] py-3 ">
                <th className="py-3 px-4 border-b">Product No.</th>
                <th className="py-3 px-4 border-b">Cover</th>
                <th className="py-3 px-4 border-b">Product Name</th>
                <th className="py-3 px-4 border-b">Merchant Name</th>
                <th className="py-3 px-4 border-b">QTY</th>
                <th className="py-3 px-4 border-b">Price</th>
                <th className="py-3 px-4 border-b">Date Created</th>
                <th className="py-3 px-4 border-b">Status</th>
                <th className="py-3 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drugs.map((item, index) => (
                <tr key={index}>
                  <td className="py-4 px-4 border-b">{item.productNo}</td>
                  <td className="py-4 px-4 border-b">
                    <img src={item.cover} alt="cover" width={51} height={31} />
                  </td>
                  <td className="py-4 px-4 border-b">{item.productName}</td>
                  <td className="py-4 px-4 border-b">{item.merchantName}</td>
                  <td className="py-4 px-4 border-b">{item.qty}</td>
                  <td className="py-4 px-4 border-b">{item.price}</td>
                  <td className="py-4 px-4 border-b">{item.dateCreated}</td>
                  <td
                    className={`py-4 px-4 border-b ${
                      item.status === "Paid"
                        ? "text-green-500"
                        : item.status === "5days deferral"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="py-4 px-4 border-b">
                    <img src={Assets.dots} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end items-center py-2">
            <button className="text-gray-500 hover:text-gray-700">
              Previous
            </button>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button key={page} className="px-3 py-1 border rounded">
                  {page}
                </button>
              ))}
            </div>
            <button className="text-gray-500 hover:text-gray-700">Next</button>
          </div>
        </div>

        <div className="mb-3 border border-gray-300  p-4 hidden md:block ">
          <div className="flex justify-between items-center">
            <div className="flex space-x-24 items-center">
              <div className=" w-2/5 row">
                <label className=" text-[17px] font-normal text-black">
                  Status
                </label>
                <select className="py-2 bg-transparent border rounded-md border-[#d7dbde]">
                  <option>Show All</option>
                  <option>Select Category</option>
                  <option>Select Category</option>
                  <option>Select Category</option>
                </select>
              </div>
              <div className="space-y-3">
                <h1 className="text-[#2B2B2B] text-[14px] font-medium">
                  Payment Plan
                </h1>
                <div className="flex space-x-3 border-2 border-gray-300 px-4 py-1">
                  <div className="flex items-center space-x-3">
                    <p>Start Date</p>
                    <img src={Assets.divide} alt="" />
                    <p>End Date</p>
                    <img src={Assets.date} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-normal text-xl mt-3">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4">
          <div>
            <h1 className="text-[24px] text-[#414D55] font-bold mb-4 font-[inter]">
              Orders
            </h1>
            <OrderTable data={orderTable} />
          </div>
        </div>
      </div>
    </>
  );
}
