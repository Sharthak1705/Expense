import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdDriveFolderUpload } from "react-icons/md";

const BoxRow = () => {
  return (
    <div className="flex justify-center  items-center gap-12 mt-8">
       <div className="h-[180px] w-[260px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <FaRegUser size={60} color="#1E40AF" /> 
        <p className="mt-6 font-bold text-2xl">2000</p>
        <p className="mt-2 text-gray-700 text-lg">Welcome</p>
      </div>
      <div className="h-[182px] w-[260px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <CiClock2 size={70} color="blue"/>
      <p className="mt-6 font-bold text-2xl">123.50</p>
      <p className="mt-2 text-gray-700 text-lg">Average Time</p>
      </div>

      <div className="h-[182px] w-[260px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <MdDriveFolderUpload size={70} color="green" />
      <p className="mt-6 font-bold text-2xl">1805</p>
      <p className="mt-2 text-gray-700 text-lg">Collections</p>
      </div>

      <div className="h-[182px] w-[260px] bg-blue-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <IoIosChatbubbles size={70} color='red'/>
      <p className="mt-6 font-bold text-2xl">54</p>
      <p className="mt-2 text-gray-700 text-lg">Comments</p>
      </div>
    </div>
  );
};

export default BoxRow;
