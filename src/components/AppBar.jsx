import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaYoutube, FaSearch, FaUserCircle } from 'react-icons/fa';

const AppBar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2  text-white mb-2">
        {/* YouTube Logo */}
        <div className="flex items-center space-x-2">
          <FaYoutube className="text-red-600 text-3xl" />
          <span className="text-xl font-semibold text-black">YouTube</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 gap-2">
          <input
            type="text"
            className="w-full p-2 rounded-l-md border text-black"
            placeholder="Search"
          />
          <button className="px-4 py-2 bg-black  rounded-md">
            <FaSearch />
          </button>
        </div>

        {/* Sign In Button */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md">
            Sign In
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AppBar;
