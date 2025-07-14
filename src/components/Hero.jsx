import React from "react";
import Lady from "./../assets/lady.png";
import PriceDropdown from "./PriceDropdown";
const Hero = () => {
  return (
    <div className="mx-auto max-w-6xl bg-[#FDF1E5]">
      <div className=" md:flex items-center md:justify-between justify-center px-6 pt-4">
        <div className="">
          <h1 className="font-sans font-light text-4xl text-green-900">
            Grab Up to 50% Off On <br /> Selected Headphone
          </h1>
          <button className="text-white bg-green-900 px-4 py-2 mt-4 rounded-full font-medium">
            Buy Now
          </button>
        </div>
        <div>
          <img src={Lady} className="w-100 object-cover" alt="A lady image" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
