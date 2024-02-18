import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, clearUser } from "../authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Dispatch action to clear user when logging out
    dispatch(clearUser());
    // Also, perform any other logout actions like redirecting or clearing tokens
  };
  return (
    <div className="flex flex-row justify-between px-5 w-full h-[60px] bg-gray-100 shadow-md items-center gap-5">
      <NavLink to="/" className="text-gray-800 text-xl font-bold">
        Home
      </NavLink>
      {user ? (
        <div className="flex flex-row justify-between items-center gap-2">
          <p className="text-sm">
            {user.firstName} {user.lastName}
          </p>
          <img
            className="w-[40px] h-[40px] rounded-full object-cover"
            src={user.profileImg}
            alt="img"
          />
          <NavLink
            onClick={handleLogout}
            className="bg-blue-600 px-5 py-1 rounded text-sm text-white"
            to="/register"
          >
            Logout
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-3">
          <NavLink
            className="bg-blue-300 px-5 py-1 rounded text-sm text-gray-800"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="bg-blue-600 px-5 py-1 rounded text-sm text-white"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
