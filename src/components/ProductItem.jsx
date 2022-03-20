import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/outline"


export default function ProductItem({img}) {

    const handleAnimation = () => {

    }

  return (
    <div  onMouseEnter={handleAnimation} className="border p-2 flex flex-col rounded-md items-center justify-center bg-pink-50 shadow">
        <img src={img} alt="" className="h-[200px] w-[200px] object-cover" />
        <div className="flex items-center justify-between">
            <p className="text-sm truncate w-3/4 text-gray-500 font-semibold">Vicking Men dress Lorem ipsum dolor sit amet.</p>
            <ShoppingCartIcon className="h-8 p-1 bg-white border border-green-500 text-green-500 borderFull" />
            <HeartIcon className="h-8 p-1 bg-white border border-green-500 text-green-500 borderFull" />
        </div>
    </div>
  )
}
