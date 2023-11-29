import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <label
          htmlFor="sidebar"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost text-white lg:hidden"
        >
          <HiMenuAlt2 size={24} />
        </label>
      </div>
      <div className="navbar-center text-white font-bold text-xl">E-Live</div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
