import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "./axiosMethod";
import { AuthContext } from "../context/AuthContext";

export default function ProductItem({index}) {

  const [added, setAdded] = useState(false)
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

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
console.log(user?.token)

  return (
    <div>
        <div className="border p-2 flex flex-col rounded-md items-center justify-center bg-[#fcfbf9] shadow max-w-[150px] md:max-w-[200px] relative hover:bg-orange-50 hover:scale-125 cursor-pointer">
          <div onClick={() => navigate("/cart")} className="h-full w-full bg-tansparent z-10 absolute" />
          <img
            src={require(`../images/assets/p${index + 1}.png`)}
            alt=""
            className="h-[100px] w-[100px] object-cover"
          />
          <div className="flex flex-col items-center justify-between">
            <p className="text-gray-400 text-xs my-2">Unisex</p>
            <p className="text-sm truncate w-[100px] text-gray-500 font-semibold">
              Dolice Perfume
            </p>
            <p className="text-green-500 font-bold">#12,000</p>
            <ShoppingCartIcon
              onClick={addToCart}
              className={`h-8 p-1 ${added ? "bg-orange-500 text-white" : "bg-white border border-orange-500 text-orange-500"} borderFull absolute top-0 right-0`}
            />
          </div>
        </div>
    </div>
  );
}
