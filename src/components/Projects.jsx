import React from "react";

const Projects = () => {
  return (
    <>
      <div className="projects px-8 max-w-384 2xl:mx-auto">
        <div className="top flex justify-between items-center mb-8">
          <h3 className="text-xl md:text-2xl lg:text-4xl">Recent Projects</h3>
          <p className="text-gray-500 w-2/3 lg:w-1/2 text-start text-xs md:text-base">
            Step into the world of our most recent projects, a showcase of our
            unwavering commitment to progressive design
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-start justify-center gap-8">
          <div className="left flex items-center justify-center flex-col gap-10">
            <div className="card flex items-start justify-center flex-col gap-3">
              <div className="img cursor-pointer relative rounded-xl w-full h-96 lg:h-120 ">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src="/img6.png"
                  alt=""
                />
                <div className="circle  absolute w-14 h-14 rounded-full p-4  bg-white  top-2 right-2">
                  <img className="" src="/arrow.png" alt="" />
                </div>
                <div className="overlay bg-white px-3 py-1 rounded-full absolute bottom-2 left-2">
                  2D Animation
                </div>
              </div>
              <h3 className="text-2xl text-[#b040b6]">The Lighthouse</h3>
              <p className="text-gray-500 text-xs md:text-base">
                Adding a new dimension to projects through thoughtfully designed
                2D animations
              </p>
            </div>
            <div className="card flex items-start justify-center flex-col gap-3">
              <div className="img cursor-pointer relative rounded-xl w-full h-96 lg:h-120 ">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src="/img8.png"
                  alt=""
                />
                <div className="circle  absolute w-14 h-14 rounded-full p-4  bg-white  top-2 right-2">
                  <img className="" src="/arrow.png" alt="" />
                </div>
                <div className="overlay bg-white px-3 py-1 rounded-full absolute bottom-2 left-2">
                  Motion Graphics
                </div>
              </div>

              <h3 className="text-2xl text-[#b040b6]">
                Navigating Possibilities
              </h3>
              <p className="text-gray-500 text-xs md:text-base">
                Motion graphics breathe life into the project. blending
                direction and creativity
              </p>
            </div>
          </div>
          <div className="right pt-20 flex items-center justify-center flex-col gap-10">
            <div className="card flex items-start justify-center flex-col gap-3">
              <div className="img cursor-pointer relative rounded-xl w-full h-96 lg:h-120 ">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src="/img7.png"
                  alt=""
                />
                <div className="circle  absolute w-14 h-14 rounded-full p-4  bg-white  top-2 right-2">
                  <img className="" src="/arrow.png" alt="" />
                </div>
                <div className="overlay bg-white px-3 py-1 rounded-full absolute bottom-2 left-2">
                  Visual Identity
                </div>
              </div>
              <h3 className="text-2xl text-[#b040b6]">Snowscape Haven</h3>
              <p className="text-gray-500 text-xs md:text-base">
                Crafting a v•jsual Identity that mtrrors the serenity and allure
                Of a winter sanctuary
              </p>
            </div>
            <div className="card flex items-start justify-center flex-col gap-3">
              <div className="img cursor-pointer relative rounded-xl w-full h-96 lg:h-120 ">
                <img
                  className="rounded-xl w-full h-full object-cover"
                  src="/img9.png"
                  alt=""
                />
                <div className="circle  absolute w-14 h-14 rounded-full p-4  bg-white  top-2 right-2">
                  <img className="" src="/arrow.png" alt="" />
                </div>
                <div className="overlay bg-white px-3 py-1 rounded-full absolute bottom-2 left-2">
                  3D Animation
                </div>
              </div>
              <h3 className="text-2xl text-[#b040b6]">Nocturnal Symphony</h3>
              <p className="text-gray-500 text-xs md:text-base">
                Through 3D artistry, we orchestrate an animated ode to the
                evening. a dance Of shadows and dreams
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
