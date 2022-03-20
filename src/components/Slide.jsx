import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import img1 from "../images/ishop1.jpg"
import img2 from "../images/ishop2.jpg"
import img3 from "../images/shope3.jpg"


export default function Slide() {
    const [slider, setSlider] = useState(-100)
    
    const rightArrorw = () => {
        if(slider == -200){
            setSlider(0)
        } else{
            setSlider(slider - 100)
        }
    }
    const leftArrorw = () => {
        if(slider === 0){
            setSlider(-200)
        } else {
            setSlider(slider + 100)
        }
    }

  return (
    <div className=" relative h-screen pt-20 overflow-hidden">
      <ChevronLeftIcon onClick={leftArrorw} className="h-10 z-10 cursor-pointer text-white bg-pink-500 bg-opacity-30 borderFull p-2 absolute left-0 top-1/2" />
      <div className={`flex w-full transform transition-all duration-[1.5s] ease-out translate-x-[${slider}vw]`}>
        <div className="w-full h-screen relative">
          <img src={img1} alt="" className="absolute h-screen w-screen top-0 -z-10 opacity-20 object-cover" />
          <div className="w-screen mx-5 mt-40 px-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-gray-800 text-center text-4xl">COOL PRODUCTS WITH <br /> CHEAP PRICES</h1>
            <p className="mx-5 text-md text-center">Checkout product on iShop with just few clicks and with very cool prices</p>
            <button className="text-white border border-pink-500 bg-pink-500 shadow p-2 rounded-md">SHOP NOW</button>
          </div>
        </div>
        <div className="w-[102%] h-screen relative">
          <img src={img2} alt="" className="absolute h-screen w-screen top-0 -z-10 opacity-20 object-cover" />
          <div className="w-screen mx-5 mt-40 px-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-gray-800 text-center text-4xl">COOL PRODUCTS WITH <br /> CHEAP PRICES</h1>
            <p className="mx-5 text-md text-center">Checkout product on iShop with just few clicks and with very cool prices</p>
            <button className="text-white border border-pink-500 bg-pink-500 shadow p-2 rounded-md">SHOP NOW</button>
          </div>
        </div>
        <div className="w-[102%] h-screen relative">
          <img src={img3} alt="" className="absolute h-screen w-screen top-0 -z-10 opacity-20 object-cover" />
          <div className="w-screen mx-5 mt-40 px-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-gray-800 text-center text-4xl">COOL PRODUCTS WITH <br /> CHEAP PRICES</h1>
            <p className="mx-5 text-md text-center">Checkout product on iShop with just few clicks and with very cool prices</p>
            <button className="text-white border border-pink-500 bg-pink-500 shadow p-2 rounded-md">SHOP NOW</button>
          </div>
        </div>

      </div>
      <ChevronRightIcon onClick={rightArrorw} className="h-10 cursor-pointer z-10 text-white bg-pink-500 bg-opacity-30 borderFull p-2 absolute right-0 top-1/2" />
    </div>
  );
}
