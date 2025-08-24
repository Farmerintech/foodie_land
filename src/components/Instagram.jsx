import { FaForward, FaHeart, FaMessage } from "react-icons/fa6";
import Instagram1 from "../assets/instagram1.svg";
import Instagram2 from "../assets/instagram2.svg";
import Instagram3 from "../assets/instagram3.svg";
import Instagram4 from "../assets/instagram4.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineBookmark, HiOutlinePaperAirplane } from "react-icons/hi2";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiMessageCircle } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";


export const Instagram = ()=>{
    const instagrams =[
            {
                desc:'Big and Juicy Wagyu Beef Cheeseburger',
                image:Instagram1
            },
            {
                desc:'Big and Juicy Wagyu Beef Cheeseburger',
                image:Instagram2
            },
            {
                desc:'Big and Juicy Wagyu Beef Cheeseburger',
                image:Instagram3
            },
            {
                desc:'Big and Juicy Wagyu Beef Cheeseburger',
                image:Instagram4
            },
    ]
    return (
      <section
        style={{
            background:
              "linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)",
          }}
          className="py-[8px] md:px-[64px] px-[16px]"      
      >
        <aside className="flex flex-col items-center text-center justify-center ">
          <p className="md:text-[48px] text-3xl font-[600] text-center">
            Check out @foodieland on Instagram
          </p>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad
            minim{" "}
          </p>
        </aside>
        <aside className="flex items-center gap-5 flex-col md:flex-row"
        
        >
          {instagrams.map((item) => (
            <div className="bg-white">
              <div>
                <div className="flex gap-2 items-center p-2">
                  <span className="w-4 h-4 rounded-full bg-black">
                  </span>
                  <span className="text-[10px]">FoodieLand</span>
                </div>
              </div>
              <img src ={item.image} className="w-full"/>
              <div>
                <div className="flex justify-between px-2 py-2">
                    <span className="flex gap-2">
                        <AiOutlineHeart/>
                    <FiMessageCircle/>
                    <HiOutlinePaperAirplane/>
                    </span>
                    <span>
                   <HiOutlineBookmark/>

                    </span>
                </div>
              </div>
              <div className="flex gap-2 items-center px-2">
                <div className="w-4 h-4 rounded-full bg-red-200"></div>
               <p className="text-[8px]">Liked by farmerintech and 35 others</p>
              </div>
            <p className="text-[8px] p-2">Farmerintech: Well done the greatest cook of all time and day, we enjoy your cookies and we always love to patrnise</p>

            </div>
          ))}
        </aside>
        <div className="flex items-center justify-center py-10">
            <button className="bg-black px-[16px] py-[8px] items-center text-white rounded-[12px] flex gap-3 text-white">
            View on Instagram <FaInstagram/>
          </button>
        </div>
      </section>
    );
}