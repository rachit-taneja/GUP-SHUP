import React from 'react'
import { FaUser ,FaKey } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

const Signup = () => {

  const[SignupData,setSignupData]=React.useState({
    name:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleInputChange = (e) => {
    
    setSignupData({
      ...SignupData,
      [e.target.name]: e.target.value
    });
   
  };
  

  return (<div className='justify-center items-center flex p-6 min-h-screen'>
   
    <div className='max-w-[40rem] flex flex-col gap-5 w-90 m-full p-10 rounded-lg bg-base-200 w-full'>
        <h1 className=' text-xl'>Please Signup..!!!!</h1>
        <label className="input w-full">
  <FaUser/>
  <input
    type="text"
    required
    name='name'
    placeholder="Name"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minLength="3"
    maxLength="30"
    title="Only letters, numbers or dash"
    onChange={handleInputChange}
  />
    </label>
  {/* Username */}
    <label className="input w-full">
  <FaUser/>
  <input
    type="text"
    required
    name='username'
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minLength="3"
    maxLength="30"
    title="Only letters, numbers or dash"
    onChange={handleInputChange}
  />
    </label>

  {/* Email*/}
  <label className="input w-full">
  <CiMail/>
  <input
    type="email"
    required
    name='email'
    placeholder="Email"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minLength="3"
    maxLength="30"
    title="Only letters, numbers or dash"
    onChange={handleInputChange}
  />
    </label>
    
{/* PassWord */}
<label className="input w-full">
    <FaKey/>
  <input
    type="password"
    required
    name='password'
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    onChange={handleInputChange}
  />
</label>
{/* Confirm Password */}
<label className="input w-full">
    <FaKey/>
  <input
    type="password"
    required
    name='confirmpassword'
    placeholder="Confirm Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    onChange={handleInputChange}
  />
</label>

{/* Button */}
<button className='btn border w-full bg-blue-500 text-white'>Signup</button>
<p>Already have an account? <a className='text-blue-500 underline' href="/login">Login</a></p>
    </div>
    </div>
  )
}

export default Signup
