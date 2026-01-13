import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className=" my-8  border border-gray-300 rounded-4xl py-10 px-6 mx-6 max-w-384 2xl:mx-auto">
        <div className="text relative flex flex-col justify-center items-center gap-4  lg:w-4/5 xl:w-2/3 md:w-11/12 mx-auto text-center ">
          <p className="text-[#d835e0] text-base">
            Open the door to forging your brand's story
          </p>
          <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl leading-relaxed">
            Embark on a Transformative Journey Shaping{" "}
            <span className="text-white p-2 bg-[#ffcb01] rounded-2xl text-nowrap">
              Your Brand's Destiny
            </span>{" "}
            Through Our Dedicated Partnership
          </h4>
          <p className="text-gray-400 text-xs md:text-base">
            Join us on a transformative journey to shape your brand's destiny
            through our dedicated partnership. crafting a narrative that
            resonates
          </p>
          <img
            className="absolute w-8 md:w-14 md:-top-4 top-5 left-0"
            src="/stars.png"
            alt=""
          />
          <img
            className="absolute w-24 lg:w-32 bottom-14 right-0 hidden md:block"
            src="/get-started-logo.png"
            alt=""
          />
        </div>
        <div className="line h-px w-[98%] mx-auto my-5 mt-10 bg-gray-300"></div>
        <div className="bottom flex justify-between text-gray-400 text-[8px] sm:text-xs md:text-sm ">
          <h5>Via Creativlta, 23. 20121 Milano</h5>
          <div className="links flex items-center justify-center gap-2 md:gap-4 ">
            <i>
              <FaXTwitter />
            </i>
            <i>
              <FaLinkedinIn />
            </i>
            <i>
              <FaInstagram />
            </i>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 ">
            <h5>Privacy & Cookie Policy</h5>
            <h5>Astratto &copy; 2023</h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
