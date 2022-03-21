
import { useState } from "react";

export default function SingleProductItem() {
const [counter, setCounter] = useState(1)

  return (
    <div>
      <div>
        <div className="pt-32 flex flex-col md:flex-row items-center justify-center gap-5">
          <img
            src={require(`../images/assets/p4.png`)}
            alt=""
            className="hs-[250px] ws-[250px] h-[350px] w-[350px] object-cover bg-gray-50 p-2"
          />
        </div>
        <div className="my-10 p-5">
          <h1 className="font-semibold text-orange-600 tracking-wide text-2xl text-left border-b border-orange-200 pb-2">
            Chanel Coco Mademoiselle Eau de Parfum
          </h1>
          <div className="flex items-center justify-between gap-5 max-w-[250px] border-b pb-4 my-4">
            <h2 className="text-gray-400 font-semibold text-lg tracking-wide">
              Brand:
            </h2>
            <h1 className="text-gray-700 font-semibold text-xl tracking-wide">
              Dolce&Gabbana
            </h1>
          </div>
          <div className="flex items-center justify-between gap-5 max-w-[250px] border-b pb-4 my-4">
            <h2 className="text-gray-400 font-semibold text-lg tracking-wide">
              Availability:
            </h2>
            <h1 className="text-green-500 font-semibold text-xl tracking-wide">
              In Stock
            </h1>
          </div>
          <div className="flex items-center justify-between gap-5 max-w-[250px] border-b pb-4 my-4">
            <h2 className="text-gray-400 font-semibold text-lg tracking-wide">
              Price:
            </h2>
            <h1 className="text-gray-800 font-bold text-xl tracking-wide">
              NGN 14,000
            </h1>
          </div>
          <div className="flex items-center justify-between gap-5 max-w-[250px] border-b pb-4 my-4">
            <h2 className="text-gray-400 font-semibold text-lg tracking-wide">
              Category:
            </h2>
            <h1 className="text-gray-800 font-bold text-xl tracking-wide">
              Unisex
            </h1>
          </div>
          <div className="flex items-center justify-between gap-5 max-w-[250px] border-b pb-4 my-4">
            <h2 className="text-gray-400 font-semibold text-lg tracking-wide">
              Quantity:
            </h2>
            <div className="border rounded-sm py-1 border-gray-300 flex items-center justify-center px-5">
              <button
                disabled={counter == 1}
                onClick={() => setCounter(counter - 1)}
                className="text-xl text-gray-400 cursor-pointer disabled:opacity-20"
              >
                -
              </button>
              <input
                id="quantity"
                type="number"
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
                className="outline-none text-gray-700 max-w-[20px] mx-4 text-center placeholder:text-gray-800 text-lg font-semibold"
              />
              <button
                onClick={() => setCounter(counter + 1)}
                className="text-xl text-gray-400 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-orange-500 text-white p-2 font-semibold tracking-wide text-md w-[90%] rounded-2xl mb-10 max-w-[700px] block mx-auto animate-bounce hover:bg-orange-700">Add to Cart</button>
    </div>
  );
}
