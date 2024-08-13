import React, { useEffect, useState } from "react";
import Assets from "../../constants/Assets";
import { priceDesc } from "../../data";

export default function ProductEdit({ productData, onClose, onUpdate }) {
  const [formData, setFormData] = useState(productData);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setFormData(productData);
  }, [productData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    if (onUpdate) {
      await onUpdate(formData);
    }
    setIsUpdating(false);
  };
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-md w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[100vh] p-4 overflow-y-auto">
          <div className="flex justify-between border-b-2 p-2">
            <h1 className="text-[#1D252D] text-[22px] font-semibold">
              View Detail
            </h1>
            <button onClick={onClose}>
              <img src={Assets.close} alt="" />
            </button>
          </div>

          <div className="pt-4 md:space-y-5">
            <div className="flex flex-col md:flex-row justify-between md:space-x-5">
              <div className="mb-3 w-full md:w-1/2">
                <label className="text-[15px] font-normal text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg w-full"
                  placeholder="Product Name"
                  aria-label="Name"
                  name="productName"
                  value={formData.productName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 w-full md:w-1/2">
                <label className="text-[15px] font-normal text-black">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg w-full"
                  placeholder="Category"
                  aria-label="Category"
                  name="productCategory"
                  value={formData.productCategory || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:space-x-5">
              <div className="mb-3 w-full md:w-1/2">
                <label className="flex items-center text-[15px] font-normal text-black">
                  NAFDAC NO:{" "}
                  <span className="inline-block px-2 py-1 ml-2 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    Verified
                  </span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg w-full"
                  placeholder="12345-678-923"
                  aria-label="nafdacNumber"
                  name="nafdacNumber"
                  value={formData.nafdacNumber || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 w-full md:w-1/2">
                <label className="text-[15px] font-normal text-black">
                  Expiring Date
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg w-full"
                  placeholder="8/10/2012"
                  aria-label="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 w-full">
              <label className="text-[15px] font-normal text-black">
                Product Description
              </label>
              <input
                type="text"
                className="form-control form-control-lg w-full py-4"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend a orci rhoncus diam."
                aria-label="product Description"
                name="productDescription"
                value={formData.productDescription || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mb-3 w-full">
              <h1 className="text-[15px] font-normal text-black">Cover</h1>
              <div className="border-2 border-gray-300 p-3 mt-3">
                <img src={formData.coverPicture || Assets.cover} alt="" />
              </div>
            </div>
            <div className="flex flex-wrap justify-between mb-3">
              {priceDesc.map((item, index) => (
                <div key={index} className="mb-3 w-full md:w-1/2 space-y-3">
                  <h1 className="text-[#2B2B2B] text-[14px] font-medium">
                    {item.title}
                  </h1>
                  <div className="flex space-x-3 border-2 border-gray-300 px-4 py-2">
                    <div className="flex space-x-3">
                      <img src={item.img} alt="" width={23} height={20} />
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex space-x-3 items-center">
                <input type="checkbox" className="h-[20px] w-[20px]" />
                <p className="text-[#2B2B2B] text-[16px] font-normal">
                  Requested Post Dated Cheque
                </p>
              </div>
              <p className="text-[#8DE301] text-[14px] font-normal">
                Available
              </p>
            </div>
            {/* <div className="mb-3 space-y-3 w-full">
              <h1 className="text-[#2B2B2B] text-[14px] font-medium">
                Payment Plan
              </h1>
              <div className="flex items-center space-x-3 border-2 border-gray-300 px-4 py-2">
                <p>Start Date</p>
                <img src={Assets.divide} alt="" />
                <p>End Date</p>
                <img src={Assets.date} alt="" />
              </div>
            </div> */}
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-[#4d9a1d] px-5 py-2 text-white rounded-lg font-medium text-[16px]"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
