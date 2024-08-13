import React from "react";
import Spinner from "../loaders/spinners/Spinner";
import { useProductDetails } from "../hooks/distributorCustomHooks";
import Assets from "../../constants/Assets";

export default function ProductDetailsModal({ productId, onClose }) {
  console.log("Product ID in Modal:", productId);
  const { productItems, loading, error } = useProductDetails(productId);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error loading product: {error}</p>;
  }

  if (!productItems) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[80%] max-w-lg p-4">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-black font-semibold text-lg">
            {productItems.productName}
          </h1>
          <button onClick={onClose} className="text-gray-400">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <img
            src={productItems.imageUrl || Assets.lokaml}
            alt={productItems.productName}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>

        <div className="mb-4">
          <p className="text-gray-500 text-sm">
            {productItems.productDescription}
          </p>
          <p className="text-black font-semibold text-sm flex items-center">
            Quantity:{" "}
            <span className="font-normal ml-2">{productItems.quantity}</span>
          </p>
          <p className="text-black font-semibold text-sm flex items-center">
            Category:{" "}
            <span className="font-normal ml-2">
              {productItems.productCategory}
            </span>
          </p>
          <p className="text-black font-semibold text-sm flex items-center">
            Created Date:{" "}
            <span className="font-normal ml-2">
              {new Date(productItems.createdDate).toLocaleDateString()}
            </span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">Total Price:</p>
          <p className="text-black font-semibold text-lg">
            N{productItems.price}
          </p>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-[#234A75] text-white py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
