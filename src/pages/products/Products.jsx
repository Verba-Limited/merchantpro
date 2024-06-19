import React from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Assets from "../../constants/Assets";
import { useNavigate } from "react-router-dom";
import ProductItems from "../../components/Ui/ProductItems";

export default function Products() {
  const navigate = useNavigate();
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

  const navigateToSuggestionPage = () => {
    navigate("/products/addProducts");
  };
  return (
    <div className="md:container mt-4 md:p-4">
      <div style={myStyle} className="">
        <div className="">
          <div className="flex justify-between md:p-5 p-6">
            <img src={Assets.emzorlogo} alt="emzor-logo" />
            <div className="hidden md:block ">
              <button className="text-white bg-[#4196bc] py-3 px-5 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex p-2 md:p-4  md:space-x-44 max-[450px]:space-y-4 mt-3">
        <h1 className="text-[#234A75] md:text-[36px] text-2xl  font-medium max-[450px]:mt-5">
          Emzor Pharmaceuticals
        </h1>
        <div className="flex space-x-10 items-center mr-24">
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

      <div className=" mt-3">
        <div className="flex max-[500px]:grid max-[500px]:grid-cols-2 gap-3 md:items-center  md:space-x-16  md:p-4 p-2">
          <FormControl variant="outlined" className="w-48 max-[500px]:w-[100%]">
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

          <div>
            <button
              onClick={navigateToSuggestionPage}
              className="bg-[#4d9a1d] px-5 md:py-2 max-[500px]:py-3  text-white rounded-lg whitespace-nowrap font-medium md:text-[24px]"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pt-5">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
            {products.map((product, index) => (
              <ProductItems key={index} />
            ))}
          </div>
        </div>

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
