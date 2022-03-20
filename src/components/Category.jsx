import img1 from "../images/manpef.png"
import img2 from "../images/womanpef.png"

export default function Category() {
  return (
    <div className="my-12 p-5 flex flex-wrap gap-5 items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-[450px] shadow-md bg-gray-100 p-5 gap-5">
        <img src={img1} alt="" className="md:w-40 w-[9rem] h-[9rem] md:h-40" />
        <div>
          <h2 className="text-gray-700 font-bold text-3xl">MEN'S</h2>
          <h1 className="text-gray-700 font-bold text-3xl">PERFUMES</h1>
          <button className="p-1 text-xs rounded-sm font-semibold mt-5 text-gray-600 border border-gray-600">view collection</button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full max-w-[450px] shadow-md bg-gray-100 p-5 gap-5">
        <img src={img2} alt="" className="md:w-40 w-[9rem] h-[9rem] md:h-40" />
        <div>
          <h2 className="text-gray-700 font-bold text-3xl">WOMEN'S</h2>
          <h1 className="text-gray-700 font-bold text-3xl">PERFUMES</h1>
          <button className="p-1 text-xs rounded-sm font-semibold mt-5 text-gray-600 border border-gray-600">view collection</button>
        </div>
      </div>
    </div>
  );
}