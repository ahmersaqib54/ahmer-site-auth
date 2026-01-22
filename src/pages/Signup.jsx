import React from 'react'
import { useState } from 'react';

const Signup = () => {
const [formData, setformData] = useState({
  name: "",
  email: "",
  password: "",
});

const handleChange = (e) => {
  setformData(
    {
      ...formData,
      [e.target.name]: e.target.value,
    }
  );
};

const handleSubmit = (e) => {
  e.prevent.Default();
  console.log("Signup Data:", formData);
};
return(
<div className='min-h-screen flex justify-center items-center bg-gray-100 '>
  <form onSubmit={handleSubmit} className='bg-blue-800 p-6 rounded-lg shadow-md font-bold w-full max-w-sm'>

<h2 className='text-2xl font-boldbold text-yellow-300 text-center mb-4'>Sign Up, Nigga!</h2>
<input name="name" type="text" placeholder='Full Name' className='w-full mb-3 p-2 border rounded bg-blue-200' required onChange={handleChange}></input>
<input name="email" type="email" placeholder='example@email.com' className='w-full mb-3 p-2 border rounded bg-blue-200' required onChange={handleChange}></input>
<input name="password" type="password" placeholder='Enter password' className='w-full mb-3 p-2 border rounded bg-blue-200' required onChange={handleChange}></input>
<button className='w-full bg-black text-yellow-300 rounded py-2'>Create Account boy!</button>
  </form>
</div>


)
}

export default Signup;