
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const  linkClass = "text-yellow-600 hover:text-white transition";
  return (
    <>
    <NavLink to="/" className={linkClass}>
    Home
    </NavLink>
    <NavLink to="/Products" className={linkClass}>
    Products
    </NavLink>
    <NavLink to="/Cart" className={linkClass}>
    Cart
    </NavLink>
    <NavLink to="/ContactUs" className={linkClass}>
    Contact Us
    </NavLink>
    </>
  )
}

export default NavLinks;