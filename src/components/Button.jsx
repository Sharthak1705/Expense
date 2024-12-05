import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa"; // For the down arrow icon

const SignOutButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition  flex items-center"
        onClick={toggleDropdown}
      >
        Sign Out <FaCaretDown className="ml-2" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-gray-300 text-gray-800 shadow-lg rounded-lg w-40">
          <ul className="py-2">
            <li
              className="px-4 py-2  hover:bg-gray-200 cursor-pointer"
              onClick={() => alert("Option 1 clicked")}
            >
              Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => alert("Option 2 clicked")}
            >
             Home
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => alert("Option 3 clicked")}
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignOutButton;
