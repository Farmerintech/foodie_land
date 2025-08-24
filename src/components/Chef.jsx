import chef from "../assets/chef.svg";
import Meat from "../assets/meat.svg";
import Onion from "../assets/onion.svg";
import Cabage from "../assets/cabage.svg";
import Tomato from "../assets/tomato.svg";

export const Chef = () => {
  return (
    <>
      <section className="flex justify-between px-[16px] gap-[32px] items-center flex-col md:flex-row">
        <aside className="md:w-[500px] lg:w-[900px]">
          <div className="mb-10">
            <p className="text-3xl md:text-[48px] font-[600] py-2">
              Everyone can be a chef in their own kitchen
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut l abore et dolore magna aliqut enim
              ad minim{" "}
            </p>
          </div>
          <button className="bg-black px-[24px] py-[8px] text-white rounded-[12px]">
            Learn More
          </button>
        </aside>
        <aside
          style={{
            background:
              "linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)",
          }}
          className="rounded-[24px] relative"
        >
          <div className="">
            <img src={chef} className="" />
          </div>
          <div className="absolute left-3 top-10 w-12 h-12">
            <img src={Meat} />
          </div>
          <div className="absolute right-20 top-10 w-10 h-10">
            <img src={Onion} />
          </div>
          <div className="absolute -right-4 top-30 w-10 h-10">
            <img src={Cabage} />
          </div>
          <div className="absolute -left-3 top-60 w-6 h-6">
            <img src={Tomato} />
          </div>
        </aside>
      </section>
    </>
  );
};
