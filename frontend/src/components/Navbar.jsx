import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-t border-b border-black flex items-center justify-between px-5 py-2">
      <ul className="flex space-x-4">
        <li>
          {/* Removed Classname from home becasuse i dont want it to highlight all tume */}
          <NavLink  to="/" >  
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/journals" >
            Journals
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/past-papers" >
            Papers
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/gpa-calculator" >
            GPA Calculator
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/about" >
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/contact" >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={(e)=>{return e.isActive?  "highlight":""}} to="/login">
            Login
          </NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
