import React from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../store/slice/user.thunk.js";
const Signup = () => {
  const [signupData, setSignupData] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleSignup = () => {
    // Handle signup logic 
    dispatch(registerUserThunk(signupData));
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-base-300 px-5">
      <div className="bg-base-200 rounded-xl shadow-xl w-full max-w-xl p-10">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="assets/LOGO.png"
            alt="Logo"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mt-6">
          Create Account
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-10">
          Join Gup Shup and Start Chatting
        </p>

        <h2 className="text-2xl font-semibold mb-5">
          Please Signup
        </h2>

        {/* Name */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-4">
          <FaUser />
          <input
            type="text"
            className="grow"
            placeholder="Name"
            name="name"
            value={signupData.name}
            onChange={handleInputChange}
          />
        </label>

        {/* Username */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-4">
          <FaUser />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="username"
            value={signupData.username}
            onChange={handleInputChange}
          />
        </label>

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-4">
          <CiMail />
          <input
            type="email"
            className="grow"
            placeholder="Email"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
          />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-4">
          <FaKey />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
          />
        </label>

        {/* Confirm Password */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-6">
          <FaKey />
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        {/* Gender */}
        <label className="input input-bordered flex items-center gap-2 w-full mb-6">
          <FaUser />
          <select
            className="grow"
            name="gender"
            value={signupData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Button */}
        <button
  onClick={() => {
    console.log("Button clicked");
    handleSignup();
  }}
  className="btn btn-primary w-full text-white"
>
  Signup
</button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;