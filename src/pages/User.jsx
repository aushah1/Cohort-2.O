import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  let name = params.id.split(",")[0];
  let img = params.id.split(",")[1];
  return (
    <>
      <div className="text z-20 flex flex-col justify-center items-start gap-4 px-5 sm:px-10 lg:px-16">
        <h2
          className="title text-[#282828] 
        text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[16rem]
        font-bold">
          {name}
        </h2>
      </div>
      <div className="img w-[80%] mx-auto  h-152 my-10 rounded-md">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src={`/${img}`}
          alt=""
        />
      </div>
    </>
  );
};

export default User;
