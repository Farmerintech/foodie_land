import { FaClock, FaHeart } from "react-icons/fa";
import delicious1 from "../assets/delicious1.svg";
import delicious2 from "../assets/delicious2.svg";
import delicious3 from "../assets/delicious3.svg";
import delicious4 from "../assets/delicious4.svg";
import delicious5 from "../assets/delicious7.svg";
import delicious6 from "../assets/delicious6.svg";
import delicious7 from "../assets/delicious7.svg";
import delicious8 from "../assets/delicious8.svg";

import { FaSpoon } from "react-icons/fa6";

export const Delicious = () =>{
    const Delecious =[
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious1
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious2
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious3
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious4
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious5
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious6
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious7
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:delicious8
        },  
        
    ]
    return(
        <section className="md:px-[36px] px-[16px] py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:px-10">
                <p className="font-[800] md:text-[28px] xl:text-[36px] text-lg flex-1">Try this delicious Receipe to make Your Day</p>
                <p className="flex-1">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-10 justify-center items-center">
                {
                    Delecious.map(item=>(
                        <div 
                        
                        className="xl:w-[250px] w-full md:w-[220px] h-full rounded-2xl md:rounded-[30px] px-3 md:px-3 py-5 flex flex-col gap-5">
                            <div className="relative">
                                <img src={item.image} className="md:w-[280px] h-auto w-full rounded-[24px] md:h-[158px]"/>
                                <div className="absolute top-4 right-6 bg-white w-6 flex items-center justify-center h-6 rounded-full text-gray-200 hover:text-red-500"><FaHeart size={10}/></div>
                            </div>
                            <p className="font-[600] mb-2">{item.desc}</p>
                            <div className="flex gap-5">
                                <p className="flex gap-2 items-center md:justify-center">
                                    <span><FaClock size={10}/></span> 
                                    <span>30 Minutes</span>
                                </p>
                                <p className="flex gap-2 items-center md:justify-center">
                                    <span><FaSpoon size={10}/></span> 
                                    <span>Snacks</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}