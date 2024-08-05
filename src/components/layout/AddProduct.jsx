import React from "react";
import useAddProduct from "../hooks/distributorCustomHooks";
import Assets from "../../constants/Assets";

export default function AddProduct() {
  const {
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    loading,
    error,
    preview,
  } = useAddProduct();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6 pt-5">
        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter name of product"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Expiry Date: MM/DD/YYYY <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Product Category <span className="text-red-500">*</span>
            </label>
            <select
              className="py-3 w-full bg-transparent border rounded-md border-[#d7dbde]"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Drug">Drug</option>
              <option value="Food">Food</option>
              <option value="Cosmetic">Cosmetic</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              NAFDAC Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter NAFDAC number"
              name="nafdacNumber"
              value={formData.nafdacNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Product Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="h-24 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter product description"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label
              htmlFor="file-upload-1"
              className="flex w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
            >
              <div className="flex py-2 space-x-6 items-center">
                <img
                  src={preview || Assets.vid}
                  alt="Preview"
                  width={40}
                  height={40}
                />

                <div>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal text-[20px]">
                      Upload cover picture
                    </span>
                  </p>
                </div>
              </div>
              <input
                id="file-upload-1"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Manufacturer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter manufacturer"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Manufacturer Date: MM/DD/YYYY{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter manufactured date"
              name="manufacturedDate"
              value={formData.manufacturedDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap md:space-x-8">
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Product Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter product number"
              name="productNumber"
              value={formData.productNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 w-full md:w-2/5">
            <label className="text-[17px] font-normal text-black">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg w-full border-gray-300"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {error && (
          <div className="mb-3 w-full md:w-2/5">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? (
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            ) : (
              "submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
