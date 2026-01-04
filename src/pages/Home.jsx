import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero mt-10 relative flex flex-col justify-start gap-4">
        {/* Text */}
        <div className="text z-20 flex flex-col justify-center items-start gap-4 px-5 sm:px-10 lg:px-16">
          <h2
            className="title text-[#282828] 
        text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[16rem]
        font-bold">
            SYMPHONY
          </h2>

          <h2
            className="title text-[#282828] 
        text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[16rem]
        font-bold -mt-2 sm:-mt-6 pl-10">
            UNVEILED
          </h2>

          <p className=" md:w-1/2 w-2/3  sm:max-w-lg lg:max-w-xl text-sm sm:text-base pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            cupiditate laborum, velit omnis assumenda quaerat magnam
          </p>
        </div>

        {/* Images */}
        <img
          className="absolute h-36 sm:h-64 md:h-72 lg:h-96 
        right-4 sm:right-10 lg:right-[8%] top-2  z-10"
          src="/img1.jpeg"
          alt=""
        />

        <img
          className=" absolute h-36 sm:h-64 md:h-72 lg:h-96 
        right-[18%] rotate-12 top-16 "
          src="/img2.jpeg"
          alt=""
        />
      </div>
      <div className="bands h-48 xl:h-58 py-2 md:mt-4 mt-24 relative overflow-hidden">
        <div className="band absolute top-14 md:top-20 flex gap-4 justify-center items-center py-2 bg-[#282828] text-white w-full -rotate-6 z-20">
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10 invert rotate-45" src="/globe.png" alt="" />
          </div>
        </div>
        <div className="band absolute top-22 md:top-24 flex gap-4 justify-center items-center py-2 bg-white text-black border-y border-black w-full rotate-4">
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2 shrink-0">
            <p className="lg:text-7xl sm:text-5xl text-2xl">CELEBRATE LIFE</p>
            <img className="w-10  rotate-45" src="/globe.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
