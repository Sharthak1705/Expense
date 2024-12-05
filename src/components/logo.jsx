import React from "react";
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import company icons

const CompanyCardRow = () => {
  return (
    <div className="flex justify-center items-center  gap-12 mt-8">
      <div className="h-[180px] w-[260px] bg-blue-600 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaFacebook size={60} color="white" />
        <p className="mt-6  font-bold text-2xl text-white">Facebook</p>
        <p className="mt-2 text-center text-white text-lg">Connect with Persons</p>
      </div>
      <div className="h-[180px] w-[260px] bg-red-500 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaGoogle size={60} color="white" />
        <p className="mt-6 font-bold text-2xl text-white">Gmail</p>
        <p className="mt-2 px-2 text-center text-white text-lg">Send and receive emails</p>
      </div>

      <div className="h-[180px] w-[260px] bg-blue-400 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaTwitter size={60} color="white" />
        <p className="mt-6 font-bold text-2xl text-white">Twitter</p>
        <p className="mt-2 px-2 text-center text-white text-lg">Join the conversation</p>
      </div>

      <div className="h-[180px] w-[260px] bg-blue-700 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaLinkedin size={60} color="white" />
        <p className="mt-6 font-bold text-2xl  text-white">LinkedIn</p>
        <p className="mt-2 px-2  text-center text-white text-lg">Network with professional</p>
      </div>
    </div>
  );
};

export default CompanyCardRow;
