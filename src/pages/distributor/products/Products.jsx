import React, { useState } from "react";
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
import ProductEdit from "../../../components/modals/ProductEdit";
import { $api } from "../../../services";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Products() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState("");
  const { products, setProducts, loading, error } = useFetchProducts();
  const [openModal, setOpenModal] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const user = useSelector((state) => state.auth.user);

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

  const handleOpenModal = (product) => {
    setSelectedProductData(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProductData(null);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await $api.update(`/api/products/${updatedProduct._id}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
      handleCloseModal();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product:");
    }
  };

  return (
    <>
      <div className="md:container mt-4 md:p-4">
        <div style={myStyle} className="">
          <div className="">
            <div className="flex justify-between md:p-5 p-6">
              <img src={Assets.emzorlogo} alt="emzor-logo" />
              <div className="hidden md:block ">
                <button className="text-white bg-[#4196bc] py-3 px-5 rounded-md">
                  Product
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex p-2 md:p-4  md:space-x-44 max-[450px]:space-y-4 mt-3">
          <h1 className="text-[#234A75] md:text-[36px] text-2xl  font-medium max-[450px]:mt-5">
            {user.businessInfo.businessName}
          </h1>
          <div className="flex space-x-10 items-center mr-24">
            <div className="flex space-x-3 items-center">
              <img src={Assets.enterprise} alt="" width={30} height={30} />
              <p className="text-[#ACB0B6] text-[14px]">Nigeria</p>
            </div>
            <div className="flex space-x-3 items-center">
              <img src={Assets.mail} alt="" width={21} height={21} />
              <p className="text-[#ACB0B6] text-[14px]">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col w-full md:w-auto">
                <InputLabel>Product Category</InputLabel>
                <FormControl
                  id="cat"
                  sx={{ m: 1, width: { xs: "100%", md: 260 } }}
                >
                  <Select
                    labelId="cat"
                    value={category}
                    onChange={handleCategoryChange}
                    label="Product Category"
                  >
                    <MenuItem value="Malaria">Malaria</MenuItem>
                    <MenuItem value="Covid-19">Covid-19</MenuItem>
                    <MenuItem value="Flu">Flu</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="flex flex-col w-full md:w-auto">
                <label>Created Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        className="w-full md:w-[230px]"
                        variant="outlined"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="w-full md:w-auto  flex justify-center md:justify-start">
                <div className="relative flex items-center w-full md:w-auto md:mt-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full md:w-auto px-4 py-2 h-12 border-2 border-[#234a75] rounded text-black focus:outline-none"
                  />
                  <div className="absolute right-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="gray"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={navigateToSuggestionPage}
                className="bg-[#4d9a1d] px-5 md:py-2 max-[500px]:py-3  text-white rounded-lg whitespace-nowrap font-medium md:text-[24px]"
              >
                Add product
              </button>
            </div>
          </div>

          <div>
            <div className="mt-4 gap-4 grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
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
                      </div>
                      <div className="mb-4">
                        <img
                          src={Assets.lokaml || product.coverPicture}
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
                        <button
                          onClick={() => handleOpenModal(product)}
                          className="bg-[#234A75] text-white py-2 px-4 rounded-lg"
                        >
                          View
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
              <button className="text-gray-500 hover:text-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <ProductEdit
          productData={selectedProductData}
          onClose={handleCloseModal}
          onUpdate={handleUpdateProduct}
        />
      )}
    </>
  );
}
