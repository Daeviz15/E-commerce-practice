import React, { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Nav() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setisMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
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

  const navItems = [
    { name: "Deals", href: "#" },
    { name: "What's New", href: "#" },
    { name: "Delivery", href: "#" },
  ];

  return (
    <nav className="bg-white">
      <div className=" xl:mx-auto max-w-6xl mx-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <ShoppingCartIcon className="h-6 w-6 text-green-900" />
          <span className="text-2xl font-bold text-green-900">Shopcart</span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center text-gray-800 font-semibold">
            Categories
            <ChevronDownIcon className="h-4 w-4 text-green-700 ml-1" />
          </button>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-800 font-semibold hover:text-green-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="relative flex items-center bg-gray-100 rounded-full px-6">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent focus:outline-none py-1 w-40 placeholder-gray-500"
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 ml-2" />
          </div>

          <div className="flex items-center gap-2 text-gray-800 font-semibold">
            <UserCircleIcon className="h-6 w-6" />
            <span className=" hover:text-green-600">Account</span>
          </div>

          <div className="flex items-center gap-2 text-gray-800 font-semibold">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className=" hover:text-green-600">Cart</span>
          </div>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-800 p-2"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className=" bg-white border-t absolute w-full border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button className="flex items-center w-full text-left text-gray-800 font-semibold py-2">
              Categories
              <ChevronDownIcon className="h-4 w-4 text-green-700 ml-1" />
            </button>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-800 font-semibold hover:text-green-600 py-2"
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-6 py-3">
            <div className="flex items-center justify-center w-5/6 bg-gray-100 rounded-full">
              <input
                type="text"
                placeholder="Search product"
                className="bg-transparent focus:outline-none py-1 w-40 placeholder-gray-500"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 ml-2" />
            </div>

            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <UserCircleIcon className="h-6 w-6" />
              <a href="#">
                <span className="hover:bg-green-400">Account</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <ShoppingCartIcon className="h-6 w-6" />
              <a href="#">
                <span className=" hover:bg-green-400">Cart</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
