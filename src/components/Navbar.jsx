
import {MenuAlt3Icon, SearchIcon, ShoppingCartIcon, XIcon} from "@heroicons/react/outline"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobile, setMobile] = useState(false)
  return (
    <header className="bg-gray-100 border-b shadow border-gray-200 p-5 fixed w-full z-50">
      <div className="w-full flex items-center justify-between">
        <Link to="/">
          <h1 className="text-center text-3xl md:text-4xl font-bold tangerine">
            Perfumes and More Stores
          </h1>
        </Link>
        <div className="md:flex items-center justify-center gap-5">
          <div className="md:flex items-center justify-center hidden gap-5">
            <p className="text-gray-600 font-semibold">Register</p>
            <p className="text-gray-600 font-semibold">Sign In</p>
            <p className="text-gray-600 font-semibold">Products</p>
            <p className="text-gray-600 font-semibold">Contact Us</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <ShoppingCartIcon className="text-gray-700 h-7" />
              <div className="bg-blue-500 w-5 h-5 borderFull flex items-center justify-center absolute -top-3 -right-3">
                <p className="text-white font-semibold text-xs">3</p>
              </div>
            </div>
            {mobile ? (
              <XIcon
                onClick={() => setMobile(!mobile)}
                className="h-7 md:hidden"
              />
            ) : (
              <MenuAlt3Icon
                onClick={() => setMobile(!mobile)}
                className="h-7 md:hidden"
              />
            )}
          </div>
        </div>
      </div>
      {mobile && (
        <div className="md:hidden flex flex-col items-center justify-center gap-5 my-10 w-full transition-all duration-[1.5s] ease-out">
          <p className="text-gray-600 border-y pt-6 pb-2 border-white w-full text-center">
            REGISTER
          </p>
          <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
            SIGN IN
          </p>
          <Link to="/">
            <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
              Home
            </p>
          </Link>
          <Link to="/product">
            <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
              Product
            </p>
          </Link>
          <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
            Contact Us
          </p>
          {/* <div className="relative">
            <ShoppingCartIcon className="text-gray-700 h-7" />
            <div className="bg-blue-500 w-5 h-5 borderFull flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-white font-semibold text-xs">3</p>
            </div>
          </div> */}
        </div>
      )}
    </header>
  );
}
