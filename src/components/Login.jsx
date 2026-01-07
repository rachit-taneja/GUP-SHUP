import React from 'react'
import { FaUser ,FaKey } from 'react-icons/fa'
const Login = () => {
  return (<div className='justify-center items-center flex p-6 min-h-screen'>
   
    <div className='max-w-[40rem] flex flex-col gap-5 m-full p-10 rounded-lg bg-base-200'>
        <h1 className='flex justify-center items-center text-xl'>Login...!!!!</h1>
  {/* Username */}
  <label className="input ">
  <FaUser/>
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
    </label>
   
{/* PassWord */}
<label className="input ">
    <FaKey/>
  <input
    type="password"
    required
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>

{/* Button */}
<button className='btn border w-full bg-blue-500 text-white'>Login</button>
<p>Don't have an account? <a className='text-blue-500 underline' href="/signup">Signup</a></p>
    </div>
    </div>
  )
}

export default Login
