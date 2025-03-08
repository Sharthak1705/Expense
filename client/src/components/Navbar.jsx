import React from "react";
import Logo from "../assets/customer.png"; 

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white bg-gray-800 shadow-lg">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Expense Calculator</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex items-center px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600">
      <span className="mr-2">Sign Out</span> 

    </button>  
       
      </div>
    </div>
  );
};

export default Navbar;
