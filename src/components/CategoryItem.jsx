


export default function CategoryItem({item}) {
  return (
    <div className="relative bg-black bg-opacity-70 hover:bg-opacity-90">
        <img src={item.img} className="h-[300px] w-[300px] object-cover opacity-60 hover:opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col w-full">
            <h1 className="text-white font-bold text-xl">{item.title}</h1>
            <button className="bg-white p-1 rounded-sm font-semibold text-gray-600 text-sm w-1/3">SHOP NOW</button>
        </div>
    </div>
  )
}
