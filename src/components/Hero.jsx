import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero relative min-h-[88vh]  flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">
          Igniting the Spark Of Inspirations
        </p>
        <h1 className="text-7xl lg:text-8xl xl:text-9xl z-10 font-semibold">
          Unleash Your{" "}
        </h1>
        <h1 className="flex items-center justify-center text-7xl lg:text-8xl xl:text-9xl z-10 gap-2 font-semibold">
          Brand{" "}
          <span>
            <img className="w-12" src="/logo2.png" alt="logo" />{" "}
          </span>{" "}
          with Our
        </h1>
        <h1 className="text-7xl lg:text-8xl xl:text-9xl z-10 font-semibold">
          <span className=" bg-[#fef689] rounded-2xl text-purple-700 ">
            Māgico
          </span>{" "}
          Design
        </h1>
        <img
          className="w-48 lg:w-64 xl:w-72 absolute top-4 left-12"
          src="/img1.png"
          alt=""
        />
        <img
          className="w-48 lg:w-64 xl:w-72 absolute bottom-30 right-12"
          src="/img2.png"
          alt=""
        />
        <img
          className="w-52 lg:w-64 xl:w-80  absolute top-64 lg:top-80 xl:top-96 left-2 -rotate-12"
          src="/line-orange.png"
          alt=""
        />
        <img
          className="w-96 lg:w-md absolute bottom-14 lg:bottom-8  right-44 rotate-6"
          src="/line-yellow.png"
          alt=""
        />
        <div className="absolute top-6 right-2 flex items-end justify-center  flex-col gap-2">
          <p className="bg-purple-600 p-2 px-4 rounded-full text-white ">
            Via della Creativita, 23
          </p>
          <p className="bg-purple-600 p-2 px-4 rounded-full text-white ">
            20121 Milano
          </p>
        </div>
        <div className="absolute bottom-22 left-12 flex items-end justify-center -rotate-12">
          <button className="p-2 px-6 border-2 border-orange-400 rounded-full text-lg">
            Create Magic
          </button>
          <div className="magic relative bg-purple-600 p-3 rounded-full">
            <img
              className="w-5 h-5 object-cover invert"
              src="/magic.png"
              alt=""
            />
            <img
              className="w-8 absolute object-cover -rotate-90"
              src="/hand.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
