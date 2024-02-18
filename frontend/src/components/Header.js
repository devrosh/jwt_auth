import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-5 w-full h-[60px] bg-gray-100 shadow-md items-center gap-5">
      <NavLink to="/" className="text-gray-800 text-xl font-bold">
        Home
      </NavLink>
      <div className="flex flex-row items-center gap-3">
        <NavLink
          className="bg-blue-300 px-5 py-1 rounded text-gray-800"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className="bg-blue-600 px-5 py-1 rounded text-white"
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
