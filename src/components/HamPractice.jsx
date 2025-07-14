import React from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
const HamPractice = () => {
  const myNav = [
    { name: "Home", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Services", href: "#" },
    { name: "Support", href: "#" },
    { name: "Faq", href: "#" },
  ];

  return (
    <nav className="bg-green-500 text-white font-extralight">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 ">
        {/* left side */}
        <div className="flex gap-2">
          <h2 className="font-bold">Ridal</h2>
          <span>🚵</span>
        </div>
        {/* right side */}
        <div className="w-full hidden md:flex justify-center gap-2">
          {myNav.map((item, index) => (
            <a id={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <button className="w-5 h-5 md:hidden">
            <Bars2Icon/>
        </button>
      </div>
    </nav>
  );
};

export default HamPractice;
