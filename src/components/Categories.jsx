import Breakfast from "../assets/cat-breakfast.svg";
import Lunch from "../assets/cat-lunch.svg";
import Meat from "../assets/cat-meat.svg";
import Vegan from "../assets/cat-vegan.svg";
import Desert from "../assets/cat-desert.svg";
import Chocolate from "../assets/chocolate.svg";

export const Categories = () => {
  const categories = [
    {
      name: "Breakfast",
      color: "#708246",
      image: Breakfast,
    },
    {
      name: "Vegan",
      color: "#6CC63F",
      image: Vegan,
    },
    {
      name: "Meat",
      color: "#CC261B",
      image: Meat,
    },
    {
      name: "Desert",
      color: "#F09E00",
      image: Desert,
    },
    {
      name: "Lunch",
      color: "#000000",
      image: Lunch,
    },
    {
      name: "Chocolate",
      color: "#000000",
      image: Chocolate,
    },
  ];

  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="font-[600] text-lg md:text-[48px]">Categories</p>
        <button className="bg-[#E7FAFE] px-[16px] py-[8px] h-[48px] rounded-[8px]">
          View all categories
        </button>
      </div>

      <div className="flex justify-between gap-[10px] flex-wrap">
        {categories.map((item, index) => (
          <div
            key={index}
            className="w-[100px] h-[120px] rounded-[12px] flex flex-col items-center justify-center text-center"
            style={{
              background: `linear-gradient(0deg, ${item.color}00 0%, ${item.color} 10%)`,
            }}
          >
            <img src={item.image} alt={item.name} className="w-[50px] h-[50px] mb-2" />
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
