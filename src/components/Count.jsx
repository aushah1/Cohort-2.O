import React from "react";

const Count = (props) => {
  return (
    <>
      <div className="count flex flex-col justify-center items-center">
        <h5 className="text-sm text-[#8d8d8d]">{props.title}</h5>
        <h5 className="text-3xl">${props.count} +</h5>
      </div>
    </>
  );
};

export default Count;
