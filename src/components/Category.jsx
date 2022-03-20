

import CategoryItem from "./CategoryItem";

export default function Category() {
    const categories = [
        {
          id: 1,
          img: require('../images/style.jpg'),
          title: "SHIRT STYLE!",
        },
        {
          id: 2,
          img: require('../images/style2.jpg'),
          title: "LOUNGEWEAR LOVE",
        },
        {
          id: 3,
          img: require('../images/style3.jpg'),
          title: "LIGHT JACKETS",
        },
      ];
  return (
    <div className="my-12 bg-green-50 py-10">
      <h1 className="text-gray-600 font-bold text-4xl text-center mb-10">CATEGORIES</h1>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
