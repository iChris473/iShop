
import { useState } from "react";
import { useNavigate } from "react-router";
import { ShoppingCartIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"

export default function CartItem() {

  const navigate = useNavigate()
  
  const [counter, setCounter] = useState(1)
  const [subTotal, setSubTotal] = useState(13000)

  return (
    <div className="min-h-screen pt-20">
      <div className="relative bg-black bg-opacity-50 h-[30vh] flex items-center justify-center">
        <img
          src={require("../images/cartbg.jpg")}
          className="absolute w-full h-full opacity-50 -z-10 object-cover"
        />
        <h1 className="text-white font-bold text-4xl">Shopping Cart</h1>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row">
        <ShoppingCartIcon className="text-gray-300 h-[500px] md:w-[400px] w-[300px]" />
        <div className="flex flex-col gap-3 m-5 items-start justify-center">
          <h1 className="text-xl text-gray-600 font-semibold">
            Your shopping cart does not appear to be smelling so sweetly.
          </h1>
          <p className="text-lg text-green-600 font-semibold">
            Add items to your cart
          </p>
          <Link to="/product">
            <button className="p-2 bg-[#403e38] text-white rounded-sm">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      {false && (
        <div>
          <div className="relative pb-16 border border-gray-500 p-2 shadow my-10 mx-2 sm:mx-auto max-w-[600px] rounded-md">
            <div className="flex items-center gap-8 border-b p-3">
              <img
                src={require("../images/assets/p20.png")}
                alt=""
                className="h-[100px] w-[100px] object-cover"
              />
              <h2 className="text-gray-600 font-bold text-xl">
                Chanel Coco Mademoiselle Eau de Parfum
              </h2>
            </div>
            <div className="flex items-center gap-8 border-b p-3">
              <h2 className="text-gray-500 font-semibold tracking-wider text-lg">
                Price:
              </h2>
              <h2 className="text-gray-700 font-semibold tracking-widest text-lg">
                NGN 13,000
              </h2>
            </div>
            <div className="flex items-center gap-8 border-b p-3">
              <h2 className="text-gray-500 font-semibold tracking-wider text-lg">
                Quantity:
              </h2>
              <div className="border rounded-sm py-1 border-gray-300 flex items-center justify-center px-5">
                <button
                  disabled={counter == 1}
                  onClick={() => {
                    setSubTotal(subTotal / counter);
                    setCounter(counter - 1);
                  }}
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
                  onClick={() => {
                    setSubTotal(subTotal * (counter + 1));
                    setCounter(counter + 1);
                  }}
                  className="text-xl text-gray-400 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-8 border-b p-3">
              <h2 className="text-gray-500 font-semibold tracking-wider text-lg">
                Subtotal:
              </h2>
              <h2 className="text-gray-700 font-semibold tracking-widest text-lg">
                NGN {subTotal.toLocaleString()}
              </h2>
            </div>
            {subTotal != 13000 && (
              <button className="p-2 text-xs text-gray-700 border border-gray-700 px-4 rounded-md font-semibold absolute bottom-0 right-32 my-5">
                Update
              </button>
            )}
            <button className="bg-red-500 p-2 text-xs text-white rounded-md font-semibold absolute bottom-0 right-2 my-5">
              Remove from cart
            </button>
          </div>
          <div className="my-10  ml-5">
            <h1 className="text-2xl text-gray-800 font-semibold tracking-wide border-b border-orange-300 w-[90%] pb-2">
              Summary
            </h1>
            <div className="space-y-5">
              <h1 className="mt-4 text-gray-700 font-semibold tracking-wide text-xl">
                Total Perfumes: 1
              </h1>
              <h1 className="mt-4 text-gray-700 font-semibold tracking-wide text-xl">
                Total Amount: NGN 13000
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center my-10">
            <button
              onClick={() => navigate("/product")}
              className="p-2 border rounded-full text-lg font-semibold tracking-wide w-[90%] border-black"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="p-2 rounded-full text-lg font-semibold tracking-wide w-[90%] bg-blue-500 text-white animate-bounce"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
