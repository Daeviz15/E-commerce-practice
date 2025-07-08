import React from "react";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Nav() {
  return (
    <nav className="bg-white">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <ShoppingCartIcon className="h-6 w-6 text-green-900" />
          <span className="text-2xl font-bold text-green-900">Shopcart</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center text-gray-800 font-semibold">
            Categories
            <ChevronDownIcon className="h-4 w-4 text-green-700 ml-1" />
          </button>
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-green-600"
          >
            Deals
          </a>
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-green-600"
          >
            What’s New
          </a>
          <a
            href="#"
            className="text-gray-800 font-semibold hover:text-green-600"
          >
            Delivery
          </a>
        </div>

        <div className="flex items-center gap-6">
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
            <span>Account</span>
          </div>

          <div className="flex items-center gap-2 text-gray-800 font-semibold">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
