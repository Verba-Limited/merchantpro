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
import Assets from "../../../constants/Assets";
import { useNavigate } from "react-router-dom";
import { useFetchProducts } from "../../../components/hooks/distributorCustomHooks";
import ProductLoader from "../../../components/loaders/cards/ProductLoader";
import { formatDate } from "../../../helpers/formatDate";
import Spinner from "../../../components/loaders/spinners/Spinner";

export default function Products() {
  const navigate = useNavigate();
  // const products = Array(9).fill({});
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const { products, loading, error } = useFetchProducts();

  console.log(products, "all product");

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

  if (loading) {
    return <Spinner />;
  }
  // if (error) return <p>Error loading products: {error}</p>;
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
      <div className="mt-7">
        <div className="mt-8 gap-4 grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {loading ? (
            <>
              <ProductLoader color="#f0f0f0" />
              <ProductLoader color="#f0f0f0" />
              <ProductLoader color="#f0f0f0" />
            </>
          ) : error ? (
            <p>Error loading products: {error}</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div key={product._id}>
                <div className="bg-white shadow rounded-lg w-[80%] mx-auto p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-black font-semibold text-lg">
                        {product.productName}
                      </h1>
                      <p className="text-sm font-normal text-gray-900">
                        {formatDate(product.createdDate)}
                      </p>
                      <p className="text-gray-400 text-xs font-normal">
                        Category: {product.productCategory}
                      </p>
                    </div>
                    <button className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.75 9.75L12 4.5l6.25 5.25M12 4.5v14.25"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-4 space-y-5">
                    <p className="text-gray-500 text-sm">
                      {product.productDescription}
                    </p>
                    <p className="text-black font-semibold text-sm flex items-center">
                      QTY:{" "}
                      <span className="font-normal">{product.quantity}</span>
                    </p>
                  </div>
                  <div className="mb-4">
                    <img
                      src={Assets.lokaml} // Use your product image URL here
                      alt={product.name}
                      className="w-full h-[150px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm">Total Price:</p>
                      <p className="text-black font-semibold text-lg">
                        N{product.price}
                      </p>
                    </div>
                    <button className="bg-[#234A75] text-white py-2 px-4 rounded-lg">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
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
