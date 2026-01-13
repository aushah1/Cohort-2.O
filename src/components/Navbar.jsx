import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 font-semibold text-sm ">
        <div className="links flex items-center justify-center gap-10">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>
        <div className="logo flex items-center justify-center gap-3 font-bold text-base">
          <img className="w-8" src="/logo1.png" alt="" />
          <h3>Astratto</h3>
        </div>
        <div className="cta flex items-center justify-center gap-4">
          <a href="#">Careers</a>
          <button className="p-2 px-4 flex items-center justify-center gap-2 border border-orange-400 rounded-full cursor-pointer">
            Contact Us
            <img className="w-3" src="/arrow.png" alt="" />
          </button>
        </div>
      </nav>
      <div className="line w-[96%] h-px m-auto bg-gray-300"></div>
    </>
  );
};

export default Navbar;
