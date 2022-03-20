import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import img1 from "../images/perfumesbg.jpg"


export default function Slide() {
    const [slider, setSlider] = useState(0)
    // setSlider(0)
    
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
    <div className="h-screen pt-20 overflow-hidden">
      <div className={`flex w-full transform transition-all duration-[1.5s] ease-out translate-x-[${slider}vw]`}>
        <div className="w-full h-screen relative">
          <img src={img1} alt="" className="absolute h-screen w-screen top-0 -z-10 opacity-20 object-cover" />
          <div className="w-screen mx-auto mt-40 px-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-gray-800 text-center text-5xl md:text-6xl">WELCOME</h1>
            <p className="mx-5 text-md text-center">Get original perfumes at affordable prices from the comfort of your home</p>
            <button className="text-white bg-blue-500 shadow p-2 rounded-md">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
