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
        <Link to="/" className="">AhmerSite</Link>
      </div>
    </div>
    </nav>
  
    </>
  )
}

export default Navbar