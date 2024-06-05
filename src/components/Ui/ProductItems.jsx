import React, { useState } from "react";
import Assets from "../../constants/Assets";
import ProductEdit from "../modals/ProductEdit";

export default function ProductItems() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="bg-white shadow-md rounded-lg w-[80%] mx-auto">
        <div className="p-3 space-y-7">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg">Piriton Syrup</h1>
            <img src={Assets.heart} alt="Heart Icon" width={24} height={24} />
          </div>
          <div className="flex justify-center">
            <img
              src={Assets.piriton}
              alt="Piriton Syrup"
              className="w-[215px] h-[215px] object-contain"
            />
          </div>
          <div className="flex justify-between">
            <img src={Assets.naria} alt="Naira Icon" />
            <p className="text-xl font-semibold">254.99</p>
            <button
              onClick={handleOpenModal}
              className="flex items-center justify-center px-3 space-x-2 bg-[#234a75] text-white rounded"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {openModal && <ProductEdit onClose={handleCloseModal} />}
    </>
  );
}
