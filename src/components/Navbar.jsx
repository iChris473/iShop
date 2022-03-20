
import {MenuAlt3Icon, SearchIcon, ShoppingCartIcon, XIcon} from "@heroicons/react/outline"
import { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false)
  return (
    <header className="bg-pink-100 border-b shadow border-gray-200 p-5 fixed w-full z-50">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-center text-3xl font-semibold">iShop</h1>
        <div className="flex items-center justify-between border bg-white p-2 rounded-md">
          <input
            type="text"
            placeholder="search items"
            className="outline-none focus:ring-0"
          />
          <SearchIcon className="h-5 text-gray-500" />
        </div>
       {
         mobile ? 
         <XIcon
         onClick={() => setMobile(!mobile)}
         className="h-7 md:hidden"
          /> :
         <MenuAlt3Icon
         onClick={() => setMobile(!mobile)}
         className="h-7 md:hidden"
       />
       }
        <div className="md:flex items-center justify-center gap-5 hidden">
          <p className="text-gray-600">REGISTER</p>
          <p className="text-gray-600">SIGN IN</p>
          <div className="relative">
            <ShoppingCartIcon className="text-gray-700 h-7" />
            <div className="bg-blue-500 w-5 h-5 borderFull flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-white font-semibold text-xs">3</p>
            </div>
          </div>
        </div>
      </div>
      { mobile &&
        <div className="md:hidden flex flex-col items-center justify-center gap-5 my-10 w-full transition-all duration-[1.5s] ease-out">
          <p className="text-gray-600 border-y pt-6 pb-2 border-white w-full text-center">
            REGISTER
          </p>
          <p className="text-gray-600 border-b pb-2 border-white w-full text-center">
            SIGN IN
          </p>
          <div className="relative">
            <ShoppingCartIcon className="text-gray-700 h-7" />
            <div className="bg-blue-500 w-5 h-5 borderFull flex items-center justify-center absolute -top-3 -right-3">
              <p className="text-white font-semibold text-xs">3</p>
            </div>
          </div>
        </div>
      }
    </header>
  );
}
