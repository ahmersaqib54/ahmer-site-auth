import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'; 
import LogIn from '../pages/LogIn'; 
import Signup from '../pages/Signup';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<LogIn />} />
      <Route path="/Register" element={<Signup />} />
    </Routes>
  )
}

export default AppRoutes;