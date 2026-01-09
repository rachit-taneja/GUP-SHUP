import React from 'react'
import { FaUser ,FaKey } from 'react-icons/fa'
import { useState } from 'react'
const Login = () => {

  const[LoginData,setLoginData]=React.useState({
    username:"",
    password:""
  })
  const handleInputChange = (e) => {
    
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    });
    // const { name, value } = e.target;
    // setLoginData(prevState => ({
    //   ...prevState,
    //   [name]: value
    // }));
  };

  return (<div className='justify-center items-center flex p-6 min-h-screen '>
   
    <div className='max-w-[40rem] flex flex-col gap-5 m-full p-10 w-[40rem] rounded-lg bg-base-200  '>
        <h1 className=' text-xl'>Please Login...!!!!</h1>
  {/* Username */}
  <label className="input  w-full ">
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
   
{/* PassWord */}
<label className="input w-full ">
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

{/* Button */}
<button className='btn border w-full bg-blue-500 text-white'>Login</button>
<p>Don't have an account? <a className='text-blue-500 underline' href="/signup">Signup</a></p>
    </div>
    </div>
  )
}

export default Login
