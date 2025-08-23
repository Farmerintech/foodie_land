import { FaClock, FaPause, FaPlay } from "react-icons/fa"
import Receipt from "../assets/hero-receipt.svg"
import { FaSpoon } from "react-icons/fa6"
import User from "../assets/hero-user.svg"

export const Hero = () => {
  return (
    <section className="w-full flex h-[550px] pt-5">
      {/* LEFT SIDE */}
      <aside className="flex-1 px-4 md:px-16 bg-[#E7FAFE] rounded-[64px] md:rounded-[0px] md:rounded-l-[64px] py-5 flex gap-4 flex-col justify-center">
        <div className="bg-white w-[146px] flex items-center p-2 justify-center rounded-full">
          <img src={Receipt} alt="Receipt" className="w-5 h-5 mr-2" />
          <p className="text-sm">Hot Receipt</p>
        </div>

        <h2 className="font-semibold text-lg md:text-[64px] leading-tight">
          Spicy delicious chicken wings
        </h2>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>

        <div className="flex gap-10">
          <button className="flex gap-2 rounded-full px-3 bg-[#0000000D] py-2 justify-center items-center">
            <FaClock />
            <p>30 Minutes</p>
          </button>
          <button className="flex gap-2 rounded-full px-3 bg-[#0000000D] py-2 justify-center items-center">
            <FaSpoon />
            <p>Chicken</p>
          </button>
        </div>
       <div className="flex items-center gap-10 mt-10">
         <div className="md:flex gap-3 items-center ">
          <img src={User} alt="Receipt" className="w-10 h-10 mr-2" />
          <div>
            <p className="font-[600]">John smith</p>
            <p>8/August/2025</p>
          </div>
        </div>
        <button className="bg-black text-white flex items-center gap-4 p-2 rounded-[16px]"> 
            View Receipt 
            <span className="bg-white w-5 h-5 flex justify-center items-center rounded-full">
                <FaPlay size={6} color="black"/>
            </span>
        </button>
       </div>
      </aside>

      {/* RIGHT SIDE */}
      <aside className="md:flex-1 md:block hidden bg-[url('/src/assets/hero-plate.svg')] py-5 bg-no-repeat bg-contain bg-center rounded-r-[64px]">
      </aside>
    </section>
  );
};
