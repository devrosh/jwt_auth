import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        data
      );
      dispatch(setUser(response.data));

      navigate("/profile"); // Handle success response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="w-[50%] mx-auto p-5" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input
          className="w-full border border-gray-300 p-2 rounded my-2"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      </label>

      <label>
        Password:
        <input
          className="w-full border border-gray-300 p-2 rounded my-2"
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      </label>

      <button
        className="bg-blue-600 w-full p-2 my-1 rounded text-white"
        type="submit"
      >
        Login
      </button>
      <div className="flex flex-col gap-3">
        <span>
          Don't have an account?{" "}
          <Link
            className="text-blue-600 text-sm hover:underline"
            to="/register"
          >
            Register here
          </Link>
        </span>
        <span>
          Forgot Password?{" "}
          <Link
            to="/forgot-password"
            className="text-blue-600 text-sm hover:underline "
          >
            Click here
          </Link>
        </span>
      </div>

      {errors.apiError && <p>{errors.apiError.message}</p>}
    </form>
  );
};

export default Login;
