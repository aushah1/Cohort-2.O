import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="second flex flex-col md:flex-row gap-2 w-[98%] mx-auto md:h-[60vh] items-stretch">
        <div className="left h-full bg-[#1e1e1e] rounded-lg md:w-1/2 flex flex-col items-start justify-start gap-8 px-10 py-20 ">
          <h5 className="text-xs mb-10">ABOUT</h5>
          <h2 className="text-5xl">WHERE FASHION MEETS FREEDOM</h2>
          <div className="text flex items-center justify-center gap-2">
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              amet facilis corporis earum dolore quae, corrupti sint voluptatem
              placeat quia!
            </p>
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              amet facilis corporis earum dolore quae, corrupti sint voluptatem
              placeat quia!
            </p>
          </div>
        </div>
        <div className="img md:w-1/2 h-full rounded-lg overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="/coat.png"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
