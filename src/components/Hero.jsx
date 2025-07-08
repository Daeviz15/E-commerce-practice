import React from "react";
import Lady from "./../assets/lady.png"
const Hero = () => {
  return (
    <div className="mx-auto max-w-6xl bg-[#FDF1E5]">
<div className="flex justify-around items-center">
          <div className="">
        <h1 className="font-sans font-semibold text-4xl text-green-900">
          Grab Up to 50% Off On <br /> Selected Headphone
        </h1>
        <button className="text-white bg-green-700 px-4 py-2 mt-4 rounded-full font-medium">Buy Now</button>
      </div>
      <img src={Lady} className="h-64" alt="Lady with headphones" />
</div>
    </div>
  );
};

export default Hero;
 