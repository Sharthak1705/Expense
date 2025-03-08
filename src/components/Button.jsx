import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa"; 

const SignOutButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600"
        onClick={toggleDropdown}
      >
        Sign Out <FaCaretDown className="ml-2" />
      </button>
      {showDropdown && (
        <div className="absolute right-0 w-40 mt-2 text-gray-800 bg-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => alert("Option 1 clicked")}
            >
              Profile
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => alert("Option 2 clicked")}
            >
             Home
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
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
