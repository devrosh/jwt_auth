import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("profileImg", data.profileImg[0]);

      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        formData
      );

      navigate("/login"); // Handle success response
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className=" w-[50%] mx-auto p-5" onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input
          className="w-full border border-gray-300 p-2 rounded my-1"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p className="text-red-700">{errors.firstName.message}</p>
        )}
      </label>

      <label>
        Last Name:
        <input
          className="w-full border border-gray-300 p-2 my-1 rounded"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <p className="text-red-700">{errors.lastName.message}</p>
        )}
      </label>

      <label>
        Email:
        <input
          className="w-full border border-gray-300 p-2 my-1 rounded"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-700">{errors.email.message}</p>}
      </label>

      <label>
        Password:
        <input
          className="w-full border border-gray-300 p-2 my-1 rounded"
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        {errors.password && (
          <p className="text-red-700">{errors.password.message}</p>
        )}
      </label>

      <label>
        Upload Profile Image:
        <input
          className="my-1 mx-1"
          {...register("profileImg", { required: "Profile image is required" })}
          type="file"
        />
        {errors.profileImg && (
          <p className="text-red-700">{errors.profileImg.message}</p>
        )}
      </label>

      <button
        className="bg-blue-600 w-full p-2 my-2 rounded text-white"
        type="submit"
      >
        {isLoading ? <LoadingSpinner /> : "Register"}
      </button>
      <span>
        Already have an account?{" "}
        <Link className="text-blue-600 text-sm hover:underline " to="/login">
          Login here
        </Link>
      </span>

      {errors.apiError && (
        <p className="text-red-700">{errors.apiError.message}</p>
      )}
    </form>
  );
};

export default Register;
