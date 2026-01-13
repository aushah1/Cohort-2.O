import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 md:px-8 font-semibold text-sm">
        {/* Links */}
        <div className="links hidden md:flex items-center gap-10">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>

        {/* Logo */}
        <div className="logo flex items-center gap-3 font-bold text-base">
          <img className="w-7 md:w-8" src="/logo1.png" alt="" />
          <h3>Astratto</h3>
        </div>

        {/* CTA */}
        <div className="cta flex items-center gap-4">
          <a href="#" className="hidden md:block">
            Careers
          </a>

          <button className="p-2 px-4 flex items-center gap-2 border border-orange-400 rounded-full text-xs md:text-sm">
            Contact
            <img className="w-3" src="/arrow.png" alt="" />
          </button>
        </div>
      </nav>

      <div className="w-[95%] md:w-[96%] h-px mx-auto bg-gray-300"></div>
    </>
  );
};

export default Navbar;
