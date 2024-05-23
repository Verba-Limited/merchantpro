import React, { useState } from "react";
import Assets from "../../constants/Assets";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export default function Products() {
  const [selectedStatus, setSelectedStatus] = useState("Malaria");

  const statuses = [
    { value: "malaria", label: "malaria" },
    { value: "Typhoid", label: "Typhoid" },
    { value: "pending", label: "Pending" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const myStyle = {
    backgroundImage: `url(${Assets.productbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "344px",
    position: "relative",
  };
  return (
    <div className="container mt-4 p-4">
      <div style={myStyle} className="">
        <div className="relative z-10">
          <div className="flex justify-between p-5">
            <img src={Assets.emzorlogo} alt="emzor-logo" />
            <div>
              <button className="text-white bg-[#4196bc] py-3 px-5 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-4 md:space-x-44">
        <h1 className="text-[#234A75] text-[36px] font-medium">
          Emzor Pharmaceuticals
        </h1>
        <div className="flex space-x-4 items-center mr-24">
          <div className="flex space-x-3 items-center">
            <img src={Assets.enterprise} alt="" width={30} height={30} />
            <p className="text-[#ACB0B6] text-[14px]">Nigeria</p>
          </div>
          <div className="flex space-x-3 items-center">
            <img src={Assets.mail} alt="" width={21} height={21} />
            <p className="text-[#ACB0B6] text-[14px]">
              emzorpharmaceuticals@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col">
          <label className=" text-gray-700">Product Category</label>
          <select
            className="min-w-[150px] md:min-w-[200px] lgimport { TextField } from '@mui/material';:min-w-[250px] border border-gray-300 rounded p-2"
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

        <div>
          <div className="flex flex-col">
            <label className=" text-gray-700">Created Date</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select date"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{ height: 20, "& .MuiInputBase-root": { height: 20 } }}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
