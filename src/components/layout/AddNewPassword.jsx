import React, { useState } from "react";
import Assets from "../../constants/Assets";
import ResetModal from "../modals/ResetModal";

export default function AddNewPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [openModal, setOpenModal] = useState(false);

  const handlePasswordResetModal = () => {
    setOpenModal(true);
  };

  const handleShowPassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <img src={Assets.reset} alt="Reset Icon" width={60} height={60} />
        <h1 className="font-bold text-[#234A75] text-[32px] mb-6">
          Update Password?
        </h1>

        <form className="w-full max-w-screen-sm space-y-4 ">
          <div className="flex flex-col">
            <label htmlFor="currentPassword" className="mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                className="w-full p-3 pr-10 border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type={showPassword.current ? "text" : "password"}
                id="currentPassword"
                placeholder="Enter your Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => handleShowPassword("current")}
              >
                <img
                  src={showPassword.current ? Assets.eye : Assets.eyeSlash}
                  alt="Toggle Password Visibility"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="newPassword" className="mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                className="w-full p-3 pr-10 border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type={showPassword.new ? "text" : "password"}
                id="newPassword"
                placeholder="Enter your Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => handleShowPassword("new")}
              >
                <img
                  src={showPassword.new ? Assets.eye : Assets.eyeSlash}
                  alt="Toggle Password Visibility"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                className="w-full p-3 pr-10 border border-gray-300 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type={showPassword.confirm ? "text" : "password"}
                id="confirmPassword"
                placeholder="Enter your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => handleShowPassword("confirm")}
              >
                <img
                  src={showPassword.confirm ? Assets.eye : Assets.eyeSlash}
                  alt="Toggle Password Visibility"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>

          <div className="justify-center flex">
            <button
              type="submit"
              onClick={handlePasswordResetModal}
              className=" w-full max-w-md p-3 mt-4 text-white bg-[#4d9a1d] rounded-md hover:bg-green-700 font-normal text-[24px]"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      {openModal && <ResetModal onClose={handlePasswordResetModal} />}
    </>
  );
}
