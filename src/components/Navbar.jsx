import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-[98%] m-auto py-2 flex justify-between items-center">
      <div className="name text-xl">DVSY</div>
      <div className="flex items-center justify-center gap-4">
        <a
          className="py-2 px-3 font-light text-sm bg-[#1b1b1b] rounded-md"
          href="">
          DESIGNERS
        </a>
        <a
          className="py-2 px-3 font-light text-sm bg-[#1b1b1b] rounded-md"
          href="">
          COLLABS
        </a>
        <a
          className="py-2 px-3 font-light text-sm bg-[#1b1b1b] rounded-md"
          href="">
          EVENTS
        </a>
        <a
          className="py-2 px-3 font-light text-sm bg-[#1b1b1b] rounded-md"
          href="">
          BLOG
        </a>
        <a
          className="py-2 px-3 font-light text-sm bg-[#1b1b1b] rounded-md"
          href="">
          CAPS
        </a>
        <a
          className="py-2 px-3 font-semibold text-sm text-black bg-[#ef6f5c] rounded-md"
          href="">
          GET IN TOUCH
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
