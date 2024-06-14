/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import bell from "../../src/assets/img/bell.png";
import set from "../../src/assets/img/set.png";
import user from "../../src/assets/img/user.png";
import { Link } from "react-router-dom";

export default function TobarIcons() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownNotification, setdropdownNotification] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggledropdownNotification = () => {
    setdropdownNotification(!dropdownNotification);
  };

  return (
    <div className="container hidden md:flex items-center space-x-4">
      <button
        id="dropdownNotificationButton"
        onClick={toggledropdownNotification}
        data-dropdown-toggle="dropdownNotification"
      >
        <img src={bell} alt="Bell" className="w-12 h-w-12 cursor-pointer" />
      </button>
      <img src={set} alt="Settings" className="w-12 h-w-12 cursor-pointer" />
      <button
        id="dropdownUserAvatarButton"
        onClick={toggleDropdown}
        className="focus:outline-none"
      >
        <img src={user} alt="User" className="w-12 h-w-12 rounded-full" />
      </button>

      {dropdownVisible && (
        <div
          id="dropdownAvatar"
          className="absolute right-0 top-16  mt-2 w-44 bg-[#F3F8FB] rounded-lg shadow-lg z-10"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white bg-[#F3F8FB] dark:bg-gray-700">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
