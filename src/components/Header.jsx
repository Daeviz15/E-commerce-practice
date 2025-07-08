import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-green-900">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className=" w-full py-2 flex justify-between text-white text-[13px] font-light">
            <h1>
              <span>📞</span> +2347044114163
            </h1>
            <h1>Get 50% off on selected items | shop now</h1>
            <div className="flex gap-4">
              <h1>Eng</h1>
              <h1>Location</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
