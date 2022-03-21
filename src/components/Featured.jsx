import m1 from "../images/p1.png"


export default function Featured() {
  return (
    <div className="m-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-gray-700 text-3xl">FEATURED PRODUCTS</h1>
        <button className="rounded-sm p-1 text-sm text-orange-500 border-b border-orange-500">
          View all
        </button>
      </div>
      {/* Featured products cards */}
      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-8 mt-12">
        <div className="border border-gray-200 p-2 shadow-md w-full  md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2 relative">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
          <p className="p-2 pr-5 font-semibold rounded-r-md bg-orange-500 absolute top-0 left-0 text-white">
            NEW
          </p>
        </div>
        <div className="border border-gray-200 p-2 shadow-md w-full  md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2 relative">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
          <p className="p-2 pr-5 font-semibold rounded-r-md bg-orange-500 absolute top-0 left-0 text-white">
            NEW
          </p>
        </div>
        <div className="border border-gray-200 p-2 shadow-md w-full  md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2 relative">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
          <p className="p-2 pr-5 font-semibold rounded-r-md bg-orange-500 absolute top-0 left-0 text-white">
            NEW
          </p>
        </div>
        <div className="border border-gray-200 p-2 shadow-md w-full  md:max-w-[250px] lg:max-w-xs flex bg-gray-100 items-center justify-center flex-col gap-2 relative">
          <img src={m1} alt="" className="w-52 h-52 object-contain" />
          <h3 className="font-bold text-gray-800 text-xl">CRYSTAL INDIGO</h3>
          <p className="bg-[#fcc68b] font-bold py-2 px-5 text-md rounded-sm">
            #7,900.99
          </p>
          <p className="p-2 pr-5 font-semibold rounded-r-md bg-orange-500 absolute top-0 left-0 text-white">
            NEW
          </p>
        </div>
      </div>
    </div>
  );
}
