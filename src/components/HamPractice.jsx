import React, { useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
const HamPractice = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const openMenuBar = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  const resetMenu = () => {
    setisMobileMenuOpen(false);
  };

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) {
        setisMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const myNav = [
    { name: "Home", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Services", href: "#" },
    { name: "Support", href: "#" },
    { name: "Faq", href: "#" },
  ];

  return (
    <nav className="bg-green-500 text-white font-extralight">
      <div className="max-w-6xl lg:mx-auto flex justify-between items-center py-3 px-4">
        {/* left side */}
        <div className="flex gap-2">
          <h2 className="font-bold">Ridal</h2>
          <span>🚵</span>
        </div>
        {/* right side */}
        <div className="w-full hidden md:flex justify-center gap-2">
          {myNav.map((item, index) => (
            <a key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <button onClick={openMenuBar} className="w-5 h-5 md:hidden">
          {isMobileMenuOpen ? <XMarkIcon /> : <Bars2Icon />}
        </button>
      </div>
      {/* mobile view */}
      {isMobileMenuOpen && (
        <div className="w-full flex flex-col gap-3 py-2 justify-center items-center bg-white text-green-500 font-extralight border-1 ">
          {myNav.map((item, index) => (
            <a key={index} href={item.href} onClick={resetMenu}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default HamPractice;
