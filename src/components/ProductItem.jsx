import { ShoppingCartIcon } from "@heroicons/react/outline"

export default function ProductItem({index}) {

    const handleAnimation = () => {

    }

  return (
    <div
      onMouseEnter={handleAnimation}
      className="border p-2 flex flex-col rounded-md items-center justify-center bg-[#fcfbf9] shadow max-w-[150px] md:max-w-[200px] relative"
    >
      <img src={require(`../images/assets/p${index + 1}.png`)} alt="" className="h-[100px] w-[100px] object-cover" />
      <div className="flex flex-col items-center justify-between">
        <p className="text-gray-400 text-xs my-2">Unisex</p>
        <p className="text-sm truncate w-[100px] text-gray-500 font-semibold">
          Dolice Perfume
        </p>
        <p className="text-green-500 font-bold">#12,000</p>
        <ShoppingCartIcon className="h-8 p-1 bg-white border border-orange-500 text-orange-500 borderFull absolute top-0 right-0" />
      </div>
    </div>
  );
}
