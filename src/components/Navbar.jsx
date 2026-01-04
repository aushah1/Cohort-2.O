import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-8">
        <div className="name md:text-5xl sm:text-3xl text-xl">
          <h3>Dom Perignon</h3>
        </div>
        <div className="links flex items-center justify-center gap-6 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
