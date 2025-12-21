import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card p-4 flex flex-col justify-center items-start gap-4 bg-[#1e1e1e] rounded-md">
        <h4 className="text-[#aeaeae]">{props.title}</h4>
        <p className="text-[#8d8d8d] text-sm">{props.desc}</p>
        <div className="btn text-[#aeaeae] text-sm">LEARN MORE</div>
      </div>
    </>
  );
};

export default Card;
