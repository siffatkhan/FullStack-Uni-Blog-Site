import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-t border-b border-black flex items-center justify-between px-5 py-2">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="px-3 py-1">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/journals" className="px-3 py-1">
            Journals
          </NavLink>
        </li>
        <li>
          <NavLink to="/past-papers" className="px-3 py-1">
            Papers
          </NavLink>
        </li>
        <li>
          <NavLink to="/gpa-calculator" className="px-3 py-1">
            GPA Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="px-3 py-1">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="px-3 py-1">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="px-3 py-1">
            Login
          </NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
