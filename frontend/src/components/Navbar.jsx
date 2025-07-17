// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="border-t border-b border-black flex items-center justify-between px-5 py-2">
//       <ul className="flex space-x-4">
//         <li>
//           {/* Removed Classname from home becasuse i dont want it to highlight all tume */}
//           <NavLink  to="/" >  
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/journals" >
//             Journals
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/past-papers" >
//             Papers
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/gpa-calculator" >
//             GPA
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/about" >
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive? "highlight":""}} to="/contact" >
//             Contact
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={(e)=>{return e.isActive?  "highlight":""}} to="/login">
//             Login
//           </NavLink>
//         </li>
//       </ul>

//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`hamburger ${isOpen ? "open" : ""}`}
       onClick={toggleMenu}>
        {isOpen ? "×" : "☰"}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/journals" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Journals</NavLink>
        </li>
        <li>
          <NavLink to="/past-papers" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Papers</NavLink>
        </li>
        <li>
          <NavLink to="/gpa-calculator" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>GPA</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>About Me</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Contact</NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/login" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Login</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
