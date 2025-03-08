import React from "react";
import Customer from '../assets/customer.png'

const Sideleft = () => {
  return (
    <div className="p-4 text-white bg-blue-900 rounded-lg shadow-lg w-72 "> 
      <div className="flex flex-col items-center mb-8">
        <img
          src={Customer}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
      </div>

      <div>
        <h3 className="px-4 mb-4 text-gray-400 uppercase">General</h3>
        <nav className="space-y-4">
          <a
            href="/"
            className="flex items-center px-4 py-2 transition rounded hover:bg-blue-800"
          >
            <span className="text-xl text-orange-400">🖌️</span>
            <span className="ml-4">Dashboard</span>
          </a>
          <a
            href="/expenses"
            className="flex items-center px-4 py-2 transition rounded hover:bg-blue-800"
          >
            <span className="text-xl text-teal-400">💰</span>
            <span className="ml-4">Expense Page</span>
          </a>
          <a
            href="/contact"
            className="flex items-center px-4 py-2 transition rounded hover:bg-blue-800"
          >
            <span className="text-xl text-pink-500">📞</span>
            <span className="ml-4">Contact</span>
          </a>
          <a
            href="/category"
            className="flex items-center px-4 py-2 transition rounded hover:bg-blue-800"
          >
            <span className="text-xl text-red-400">🕹️</span>
            <span className="ml-4">Category</span>
          </a>
          
        </nav>
      </div>
    </div>
  );
};

export default Sideleft;
