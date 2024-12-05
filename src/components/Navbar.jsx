import React from "react";
import Logo from "../assets/customer.png"; 

import {  FaBell, FaCaretDown, FaEnvelope, FaUserCircle } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Stock Market</span>
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-xl cursor-pointer hover:text-gray-400 transition" title="Notifications" />
        <FaEnvelope className="text-xl cursor-pointer hover:text-gray-400 transition" title="Messages" />
        <FaUserCircle className="text-xl cursor-pointer hover:text-gray-400 transition" title="Profile" />
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex items-center">
      <span className="mr-2">Sign Out</span> 
      <FaCaretDown size={20} /> 
    </button>  
       
      </div>
    </div>
  );
};

export default Navbar;
