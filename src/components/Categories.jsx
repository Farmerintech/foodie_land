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
      color: "rgba(112, 130, 70, 0.10)", // #708246
      from: "rgba(112, 130, 70, 0.00)",
      image: Breakfast,
    },
    {
      name: "Vegan",
      color: "rgba(108, 198, 63, 0.10)", // #6CC63F
      from: "rgba(108, 198, 63, 0.00)",
      image: Vegan,
    },
    {
      name: "Meat",
      color: "rgba(204, 38, 27, 0.10)", // #CC261B
      from: "rgba(204, 38, 27, 0.00)",
      image: Meat,
    },
    {
      name: "Desert",
      color: "rgba(240, 158, 0, 0.10)", // #F09E00
      from: "rgba(240, 158, 0, 0.00)",
      image: Desert,
    },
    {
      name: "Lunch",
      color: "rgba(0, 0, 0, 0.05)", // black
      from: "rgba(0, 0, 0, 0.00)",
      image: Lunch,
    },
    {
      name: "Chocolate",
      color: "rgba(0, 0, 0, 0.05)", // black
      from: "rgba(0, 0, 0, 0.00)",
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
            className="w-[100px] h-[120px] rounded-[30px] flex flex-col items-center justify-center text-center"
            style={{
              background: `linear-gradient(180deg, ${item.from} 0%, ${item.color} 100%)`,
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
