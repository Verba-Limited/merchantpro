import React, { useState } from "react";
import Assets from "../../constants/Assets";
import { orderItems, drugs, merchants, dates, statuses } from "../../data";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function Orders() {
  const [selectedMerchant, setSelectedMerchant] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState("today");
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const myStyle = {
    backgroundImage: `url(${Assets.ads})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "254px",
    position: "relative",
  };

  return (
    <div className="container md:space-y-4">
      <div className="flex max-[500px]:grid max-[500px]:grid-cols-2 gap-4 md:justify-between pt-4 md:p-3">
        {orderItems.map((items, index) => (
          <div
            key={index}
            className="flex bg-[#f3f8fb] max-[500px]:px-8 p-3 space-x-10 rounded"
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
      <div className="flex max-[500px]:flex-col justify-between items-center md:p-3">
        <div className="flex items-center  space-x-5 max-[500px]:grid max-[500px]:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className=" text-gray-700">Merchant</label>
            <select
              className="max-w-[150px] md:min-w-[150px] border border-gray-300 rounded p-2"
              value={selectedMerchant}
              onChange={(e) => setSelectedMerchant(e.target.value)}
            >
              {merchants.map((merchant) => (
                <option key={merchant.value} value={merchant.value}>
                  {merchant.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className=" text-gray-700">Status</label>
            <select
              className="max-w-[150px] md:min-w-[150px] border border-gray-300 rounded p-2"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className=" text-gray-700">Date</label>
            <select
              className="max-w-[150px] md:min-w-[150px] border border-gray-300 rounded p-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              {dates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <button className="flex items-center px-3 space-x-2 bg-[#234a75] text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-15 h-11"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <p>search</p>
            </button>
          </div>
        </div>

        <div className="md:mt-4 max-[500px]:pt-4">
          <button className="flex items-center px-2 space-x-2  bg-[#234a75] text-white rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-15 h-11"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <p>Download</p>
          </button>
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

      <div style={myStyle} className="mb-6 mt-5">
        <div className="relative z-10  h-full">
          <div className="flex flex-col items-center justify-center h-[35vh] text-white space-y-4">
            <h1 className="text-white text-[32px] font-medium">
              This is for AD
            </h1>
            <p className="text-center flex text-[24px] font-normal">
              Bring your import and export sales more simple with unified <br />
              Digital contract system
            </p>
            <button className="bg-[#4d9a1d] px-6 py-2 rounded-lg font-medium text-[24px]">
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
