import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Assets from "../../constants/Assets";
import ProductItems from "../../components/Ui/ProductItems";

export default function Products() {
  const products = Array(9).fill({});
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [category, setCategory] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

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

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-16 p-4">
          <FormControl variant="outlined" className="w-48">
            <InputLabel>Product Category</InputLabel>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Product Category"
            >
              <MenuItem value="Malaria">Malaria</MenuItem>
              <MenuItem value="Covid-19">Covid-19</MenuItem>
              <MenuItem value="Flu">Flu</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Created Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} className="w-48" variant="outlined" />
              )}
            />
          </LocalizationProvider>
          <button className="flex items-center px-4 h-12 space-x-2 bg-[#234a75] text-white rounded">
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

        <div>
          <button className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-medium text-[24px]">
            Add product
          </button>
        </div>
      </div>
      <div className="px-8">
        <div className=" py-8">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductItems key={index} />
            ))}
          </div>
        </div>
        {/* <ProductItems /> */}
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
    </div>
  );
}
