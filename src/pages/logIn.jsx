import React from 'react'
import { useState } from "react" ;

const LogIn = () => {
  const [credentials, setCredentials] = useState({

    email: "",
    password: "",
  }
  );

  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,

    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", credentials);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-blue-800 p-6 font-bold rounded-lg shadow-md  w-full max-w-sm">
        <h2 className='text-2xl font-bold text-yellow-300 text-center mb-4'>What are you waiting for LogIn Noww Nigga</h2>
        <input name='email' type='email' placeholder='email' className='w-full mb-3 p-2 border rounded bg-blue-200 required' onchange={handleChange}/>
        <div className="relative mb-4">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="w-full p-2 pr-10 border rounded"
    onChange={handleChange}
    required
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute inset-y-0 right-2 flex items-center text-gray-600"
  >
    {showPassword ? (
      // Eye Off
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.08.173-2.12.49-3.09M9.88 9.88a3 3 0 104.24 4.24"
        />
      </svg>
    ) : (
      // Eye
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    )}
  </button>
</div>




        <button className='w-full bg-black rounded py-2 text-yellow-300'>what yoyu waitin for LogIn</button>
      </form>
    </div>
  )
}

export default LogIn