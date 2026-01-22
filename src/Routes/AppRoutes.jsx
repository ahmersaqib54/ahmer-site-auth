import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'; 
import Navbar from '../component/Navbar/Navbar'
import LogIn from '../pages/LogIn'; 
import Signup from '../pages/Signup';
const AppRoutes = () => {
  return (
<>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default AppRoutes;