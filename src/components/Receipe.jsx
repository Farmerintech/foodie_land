import { FaClock, FaHeart } from "react-icons/fa";
import Receipe1 from "../assets/receip1.svg";
import Receipe2 from "../assets/receip2.svg";
import Receipe3 from "../assets/receip3.svg";
import Receipe4 from "../assets/receip4.svg";
import Receipe5 from "../assets/receip5.svg";
import Receipe6 from "../assets/receip6.svg";
import Receipe7 from "../assets/receip7.svg";
import Receipe8 from "../assets/receip8.svg";
import Receipe9 from "../assets/receip9.svg";
import { FaSpoon } from "react-icons/fa6";

export const Receipe = () =>{
    const Receipes =[
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe1
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe2
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe3
        },
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe4
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe5
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe6
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe7
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe8
        },  
        {
            desc:'Big and Juicy Wagyu Beef Cheeseburger',
            image:Receipe9
        },
        
    ]
    return(
        <section>
            <div className="flex flex-col items-center justify-center gap-3">
                <p className="font-[600] md:text-[48px] text-lg">Simple and tasty recipes</p>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-10 justify-between items-center">
                {
                    Receipes.map(item=>(
                        <div 
                        style={{
                           background: "linear-gradient(180deg, rgba(231, 249, 253, 0.00) 0%, #E7F9FD 100%)",
                         }}
                        className="w-[150px] md:w-[250px] h-full rounded-2xl md:rounded-[30px] px-3 md:px-3 py-5">
                            <div className="relative">
                                <img src={item.image} className="w-[130px] md:w-[350px] rounded-3xl h-[158px]"/>
                                <div className="absolute top-4 right-6 bg-white w-6 flex items-center justify-center h-6 rounded-full text-gray-200 hover:text-red-500"><FaHeart size={10}/></div>
                            </div>
                            <p className="font-[600] mb-2">{item.desc}</p>
                            <div className="md:flex gap-5">
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