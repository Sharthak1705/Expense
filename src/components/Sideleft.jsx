import React from "react";
import Customer from '../assets/customer.png'

const Sideleft = () => {
  return (
    <div className="w-72 bg-blue-900 text-white p-4 rounded-lg shadow-lg "> 
      <div className="flex flex-col items-center mb-8">
        <img
          src={Customer}
          alt="Profile"
          className="rounded-full w-20 h-20"
        />
        <h2 className="mt-2 text-xl font-bold">John David</h2>
        <span className="text-green-400 text-sm">● Online</span>
      </div>

      <div>
        <h3 className="text-gray-400 uppercase mb-4 px-4">General</h3>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-orange-400 text-xl">🖌️</span>
            <span className="ml-4">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-red-400 text-xl">🕹️</span>
            <span className="ml-4">Widgets</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-purple-400 text-xl">💎</span>
            <span className="ml-4">Elements</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-pink-400 text-xl">📊</span>
            <span className="ml-4">Tables</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-cyan-400 text-xl">📱</span>
            <span className="ml-4">Apps</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-teal-400 text-xl">💰</span>
            <span className="ml-4">Pricing Tables</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-pink-500 text-xl">📞</span>
            <span className="ml-4">Contact</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-800 rounded transition"
          >
            <span className="text-orange-500 text-xl">⚙️</span>
            <span className="ml-4">Settings</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sideleft;
