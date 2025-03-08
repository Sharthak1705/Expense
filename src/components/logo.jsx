import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import company icons

const CompanyCardRow = () => {
  return (
    <div className="flex items-center justify-center gap-12 m-auto mt-8">
      <div className="h-[180px] w-[260px] bg-blue-600 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaFacebook size={60} color="white" />
        <p className="mt-6 text-2xl font-bold text-white">Facebook</p>
        <p className="mt-2 text-lg text-center text-white">Connect with Persons</p>
      </div>
      <div className="h-[180px] w-[260px] bg-red-500 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaGoogle size={60} color="white" />
        <p className="mt-6 text-2xl font-bold text-white">Gmail</p>
        <p className="px-2 mt-2 text-lg text-center text-white">Send and receive emails</p>
      </div>

      <div className="h-[180px] w-[260px] bg-blue-400 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaTwitter size={60} color="white" />
        <p className="mt-6 text-2xl font-bold text-white">Twitter</p>
        <p className="px-2 mt-2 text-lg text-center text-white">Join the conversation</p>
      </div>

      <div className="h-[180px] w-[260px] bg-blue-700 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaLinkedin size={60} color="white" />
        <p className="mt-6 text-2xl font-bold text-white">LinkedIn</p>
        <p className="px-2 mt-2 text-lg text-center text-white">Network with professional</p>
      </div>
    </div>
  );
};

export default CompanyCardRow;
