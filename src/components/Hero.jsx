import { FaClock, FaPlay } from "react-icons/fa";
import { FaSpoon } from "react-icons/fa6";
import Receipt from "../assets/hero-receipt.svg";
import User from "../assets/hero-user.svg";

export const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch pt-5 overflow-hidden">
      {/* LEFT SIDE */}
      <aside className="w-full lg:w-1/2 bg-[#E7FAFE] rounded-[64px] lg:rounded-none lg:rounded-l-[64px] py-5 px-4 lg:px-16 flex flex-col justify-center gap-4">
        <div className="bg-white w-[146px] flex items-center p-2 justify-center rounded-full">
          <img src={Receipt} alt="Receipt" className="w-5 h-5 mr-2" />
          <p className="text-sm">Hot Receipt</p>
        </div>

        <h2 className="font-semibold text-lg md:text-[48px] lg:text-[64px] leading-tight">
          Spicy delicious chicken wings
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim.
        </p>

        <div className="flex gap-4 flex-wrap mt-4">
          <button className="flex gap-2 rounded-full px-4 bg-[#0000000D] py-2 justify-center items-center">
            <FaClock />
            <p>30 Minutes</p>
          </button>
          <button className="flex gap-2 rounded-full px-4 bg-[#0000000D] py-2 justify-center items-center">
            <FaSpoon />
            <p>Chicken</p>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
          <div className="flex gap-3 items-center">
            <img src={User} alt="User" className="w-10 h-10" />
            <div>
              <p className="font-semibold">John Smith</p>
              <p className="text-sm text-gray-500">8/August/2025</p>
            </div>
          </div>
          <button className="bg-black text-white flex items-center gap-4 px-4 py-2 rounded-[16px]">
            View Receipt
            <span className="bg-white w-5 h-5 flex justify-center items-center rounded-full">
              <FaPlay size={6} color="black" />
            </span>
          </button>
        </div>
      </aside>

      {/* RIGHT SIDE (Only visible on large screens and up) */}
      <aside className="hidden lg:block w-1/2">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center rounded-r-[64px]"
          style={{ backgroundImage: "url('/src/assets/hero-plate.svg')" }}
        ></div>
      </aside>
    </section>
  );
};
