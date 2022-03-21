import m1 from "../images/p2.png"

export default function NewArrival() {
  return (
    <div className="m-5 my-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-gray-700 text-3xl border-b border-orange-500">NEW ARRIVALS</h1>
      </div>
      {/* Featured products cards */}
      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-8 mt-12">
        <div className="border border-gray-200 p-2 shadow-md w-full md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
        </div>
        <div className="border border-gray-200 p-2 shadow-md w-full md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
        </div>
        <div className="border border-gray-200 p-2 shadow-md w-full md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
        </div>
      </div>
    </div>
  )
}
