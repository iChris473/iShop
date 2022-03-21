import ProductItem from "./ProductItem"


export default function Products() {
    const popularProducts = [
        {
          id:1,
          img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        },
        {
          id:3,
          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        },
        {
          id:4,
          img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
        },
        {
          id:5,
          img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        },
        {
          id:6,
          img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        },
        {
          id:8,
          img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        },
      ]

  return (
    <div className="overflow-hidden mb-20 w-full pt-32 p-3">
      <h1 className="font-bold text-center text-3xl text-gray-800 mb-10 border-b border-orange-500 w-[80%] mx-auto pb-3">
        ALL PERFUMES
      </h1>
      <div className="flex items-center justify-start gap-5 mb-10">
        <h1 className="text-gray-600 font-semibold text-xl">Filter Products: </h1>
          <select className="border p-1 border-gray-400 outline-none rounded-md text-sm">
            <option value="books">Unisex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className="border p-1 border-gray-400 outline-none rounded-md text-sm">
            <option value="books">Affordable</option>
            <option value="male">Expensive</option>
            <option value="female">Cheap</option>
          </select>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        {[...Array(20)].map((_, i) => (
          <ProductItem key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
