import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero relative w-[98%] m-auto max-h-[90vh] overflow-hidden">
        <img className="object-cover w-full h-full" src="/hero.png" alt="" />
        <div
          className="overlay absolute h-full w-full bottom-0 flex flex-col items-start justify-center gap-4 px-8
        ">
          <h1 className="text-7xl">DESIGN</h1>
          <h1 className="text-7xl pl-28">& FREEDOM</h1>
          <p className="w-3/4 pl-28 text-[#8d8d8d]">
            Explore Independent style by Embracing Uniqueness with Our Exclusive
            Designer Appare!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
