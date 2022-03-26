import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useContext, useState } from "react";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "./axiosMethod";
import { AuthContext } from "../context/AuthContext";
import { productItem } from "../atom";


export default function ProductItem({product}) {

  const [added, setAdded] = useState(false)
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const [productItems, SetProductItems] = useRecoilState(productItem)

  const addToCart = async () => {
    if(!user){
      navigate("/register")
      return
    }
    setAdded(true)
    const newCart = {
      userId: user.id,
      productId: "12xyz",
      quantity:  1,
    }
    try {
      const res = await userRequest.post(`/cart/create/${user.id}`, newCart)
      console.log(res)
    } catch (error) {
      setAdded(false)
      console.log(error)
    }
  }

  return (
    <div>
        <div className="border p-2 flex flex-col rounded-md items-center justify-center bg-[#fcfbf9] shadow max-w-[150px] md:max-w-[200px] relative hover:scale-110 cursor-pointer">
          <div onClick={() => {SetProductItems(product); navigate("/single")}} className="h-full w-full bg-tansparent z-10 absolute" />
          <img
            src={product.picture}
            alt=""
            className="h-[100px] w-[100px] object-cover"
          />
          <div className="flex flex-col items-center justify-between">
            <p className="text-gray-400 text-xs my-2">{product.category}</p>
            <p className="text-md text-center truncate w-[100px] text-gray-500 font-semibold">
              {product.name}
            </p>
            <p className="text-green-500 font-bold"># {product.price.toLocaleString()}</p>
            <button
              onClick={addToCart}
              className={`p-1 text-xs z-20 hover:bg-black rounded-sm w-full ${!added ? "bg-gray-800 text-white" : "bg-white border border-orange-500 text-orange-500"} top-0 right-0`}
            >Add to Cart</button>
          </div>
        </div>
    </div>
  );
}
