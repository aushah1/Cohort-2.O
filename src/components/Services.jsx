import React from "react";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";

export const Services = () => {
  return (
    <>
      <div className="services my-8 border border-gray-300 rounded-3xl py-10 px-6 mx-6 relative max-w-384 2xl:mx-auto">
        <div className="top flex justify-between items-center mb-8">
          <h3 className="text-xl md:text-2xl lg:text-4xl">Our Services</h3>
          <p className="text-gray-500 w-2/3 lg:w-1/2 text-center text-xs md:text-base">
            Discover a wide range Of opportunities through a comprehensive range
            of qualified services
          </p>
        </div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 xl:w-3/4 mx-auto ">
          <div className="card relative border-2 border-purple-600 rounded-xl hover:rounded-bl-[220px]  p-4 flex items-center justify-center flex-col gap-4 hover:text-white hover:bg-purple-500 cursor-pointer transition-all duration-500 group ">
            <div className="top flex items-center justify-between w-full">
              <h4 className="text-xl md:text-2xl lg:text-4xl">
                Motion Graphics
              </h4>
              <div className="circle group-hover:hidden block  w-12 h-12 rounded-full p-3 bg-purple-600 group-hover:bg-white group-hover:border-2 group-hover:border-purple-800">
                <img
                  className="invert group-hover:invert-0"
                  src="/arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div className="line h-px bg-purple-600 w-full"></div>
            <p className="text-gray-500 group-hover:text-white text-xs md:text-base ">
              Bring your ideas to life through dynamic visuals and engaging
              animations.{" "}
            </p>
            <div className="img w-full h-64  rounded-3xl group-hover:rounded-bl-[220px] transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-4xl transition-all duration-500 group-hover:rounded-bl-[220px] "
                src="/img3.png"
                alt=""
              />
            </div>
            <div className="circle group-hover:block hidden absolute w-22 h-22 rounded-full p-4 border-3 bg-white border-purple-600 bottom-0 left-2">
              <img className="" src="/arrow.png" alt="" />
            </div>
          </div>
          <div className="card relative border-2 border-purple-600 rounded-xl hover:rounded-bl-[220px]  p-4 flex items-center justify-center flex-col gap-4 hover:text-white hover:bg-purple-500 cursor-pointer transition-all duration-500 group ">
            <div className="top flex items-center justify-between w-full">
              <h4 className="text-xl md:text-2xl lg:text-4xl">
                2D/3D Animations
              </h4>
              <div className="circle group-hover:hidden block w-12 h-12 rounded-full p-3 bg-purple-600 group-hover:bg-white group-hover:border-2 group-hover:border-purple-800">
                <img
                  className="invert group-hover:invert-0"
                  src="/arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div className="line h-px bg-purple-600 w-full"></div>
            <p className="text-gray-500 group-hover:text-white text-xs md:text-base">
              Turn imagination into reality with our stunning 2D/3D animations.
            </p>
            <div className="img w-full h-64  rounded-3xl group-hover:rounded-bl-[220px] transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-4xl  group-hover:rounded-bl-[220px] transition-all duration-500"
                src="/img4.png"
                alt=""
              />
            </div>
            <div className="circle group-hover:block hidden absolute w-22 h-22 rounded-full p-4 border-3 bg-white border-purple-600 bottom-0 left-2">
              <img className="" src="/arrow.png" alt="" />
            </div>
          </div>
          <div className="card relative border-2 border-purple-600 rounded-xl hover:rounded-bl-[220px]  p-4 flex items-center justify-center flex-col gap-4 hover:text-white hover:bg-purple-500 cursor-pointer transition-all duration-500 group ">
            <div className="top flex items-center justify-between w-full">
              <h4 className="text-xl md:text-2xl lg:text-4xl">
                Visual Identity
              </h4>
              <div className="circle group-hover:hidden block  w-12 h-12 rounded-full p-3 bg-purple-600 group-hover:bg-white group-hover:border-2 group-hover:border-purple-800">
                <img
                  className="invert group-hover:invert-0"
                  src="/arrow.png"
                  alt=""
                />
              </div>
            </div>
            <div className="line h-px bg-purple-600 w-full"></div>
            <p className="text-gray-500 group-hover:text-white text-xs md:text-base">
              Shape a unique brand persona through our comprehensive Visual
              Identity solutions.
            </p>
            <div className="img w-full h-64  rounded-3xl group-hover:rounded-bl-[220px] transition-all duration-500">
              <img
                className="w-full h-full object-cover rounded-4xl group-hover:rounded-bl-[220px] transition-all duration-500"
                src="/img5.png"
                alt=""
              />
            </div>
            <div className="circle group-hover:block hidden absolute w-22 h-22 rounded-full p-4 border-3 bg-white border-purple-600 bottom-0 left-2">
              <img className="" src="/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="controls flex items-center justify-between my-5">
          <div className="arrows flex items-center justify-center">
            <i className="text-5xl text-gray-400">
              <HiMiniArrowSmallLeft />
            </i>
            <i className="text-5xl ">
              <HiMiniArrowSmallRight />
            </i>
          </div>
          <div className="lines flex items-center justify-center gap-2">
            <div className="line w-12 h-0.5 bg-black rounded-full"></div>
            <div className="line w-6 h-0.5 bg-gray-500 rounded-full"></div>
            <div className="line w-6 h-0.5 bg-gray-500 rounded-full"></div>
            <div className="line w-6 h-0.5 bg-gray-500 rounded-full"></div>
            <div className="line w-6 h-0.5 bg-gray-500 rounded-full"></div>
            <div className="line w-6 h-0.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="about ">
          <h5 className="text-lg flex items-center gap-1 justify-center text-gray-400">
            <i>
              <TfiLayoutLineSolid />
            </i>{" "}
            ABOUT ASTRATTO
          </h5>
          <div className="text text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl lg:w-4/5 xl:w-2/3 mx-auto text-center my-4">
            <span>
              <img
                className="w-12 inline-block"
                src="/yellow-arrow.png"
                alt=""
              />{" "}
            </span>
            Our <span className="text-gray-400">visionary </span>{" "}
            <span className="text-orange-500">artisans </span> collaborate{" "}
            <span className="text-purple-600">seamlessly </span> to craft{" "}
            <span className="mx-2">
              <img className="w-10 inline-block" src="/logo1.png" alt="" />
            </span>
            inspiring <span className="text-gray-400">experiences, </span>
            <span className="text-orange-500">leaving </span> lasting
            <span className="text-gray-400"> imprints </span>
            on <span className="text-purple-600">brands </span>
            and spaces.
            <span>
              <img className="w-12 inline-block mx-2" src="/star.png" alt="" />{" "}
            </span>
          </div>
        </div>
        <div className="img absolute bottom-10 ">
          <img
            className="w-28 sm:w-44 md:w-52 lg:w-64 xl:w-80 rotate-12"
            src="purple-line.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
