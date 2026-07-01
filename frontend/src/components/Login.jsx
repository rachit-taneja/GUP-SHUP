import React from 'react'
import { FaUser, FaKey } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {fetchUserThunk} from '../store/slice/user.thunk.js'

const Login = () => {
  const [LoginData, setLoginData] = React.useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    })
  }
  const dispatch = useDispatch();
  const handleLogin = async () => {
    // Handle login logic here
    // toast.success("Login successful!");
    await dispatch(fetchUserThunk(LoginData));
  }
  return (
    <div className="justify-center items-center flex p-6 min-h-screen">
      <div className="max-w-[40rem] flex flex-col gap-5 p-10 w-[40rem] rounded-lg bg-base-200">

        {/* Logo & Welcome */}
        <div className="flex flex-col items-center gap-3">
          <img
            src="/assets/LOGO.png"   // Place your logo in public folder
            alt="Gup Shup Logo"
            className="w-20 h-20 rounded-full"
          />

          <h1 className="text-3xl font-bold text-center">
            Welcome Back to Gup Shup
          </h1>

          <p className="text-gray-500 text-center">
            Connect, Chat & Share with Friends
          </p>
        </div>

        {/* Login Heading */}
        <h2 className="text-xl font-semibold">
          Please Login
        </h2>

        {/* Username */}
        <label className="input w-full">
          <FaUser />
          <input
            type="text"
            required
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>

        {/* Password */}
        <label className="input w-full">
          <FaKey />
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </label>

        {/* Button */}
        <button onClick={handleLogin} className="btn w-full bg-blue-500 text-white">
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <a className="text-blue-500 underline" href="/signup">
            Signup
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login