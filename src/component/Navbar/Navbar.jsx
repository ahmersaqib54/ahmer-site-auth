import {React} from 'react'
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <>
  
    <nav className="w-full bg-blue-800 shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-300">AhmerSite</Link>
        {/* Desktop lnks */}
        <div className="hidden md:flex items-center space-x-6"><NavLinks /></div>
        {/* Auth Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/Login" className="text-yellow-300 hover:text-white">Login</Link>
          <Link to="/Login" className="text-yellow-300 hover:text-white bg-black px-4 py-2 rounded-md">Register</Link>
        </div>
      </div>
    </div>
    </nav>
  
    </>
  )
}

export default Navbar;