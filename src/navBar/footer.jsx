import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import Salad from '../assets/salad.svg';
import SaladPlate from '../assets/salad-plate.svg';
import Leaf from '../assets/leaf.svg';

export const Footer = ()=>{
    return(
        <section className='px-[16px] md:px-[64px]'>

        <section className='py-20 bg-[#E7F9FD] rounded-[32px] my-20 relative'>
            <div className='flex flex-col items-center justify-center gap-4 md:gap-10 text-center'>
                <p className='font-[600] text-3xl md:text-[48px]'>Deliciousness to your inbox</p>
                <p className='md:w-[560px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='bg-white py-[12px] md:px-[16px] flex justify-between rounded-[16px]  w-full md:w-[480px] lg:w-[500px] md:mx-auto my-10'>
                <input type='text' className='outline-none border-none bg-none' placeholder='Your email adress'/>
                <button className='bg-black text-white py-[8px] px-[16px] rounded-[8px]'>Subscribe</button>
            </div>
            <div>
                <div className=''>
                    <img src={Salad} className='absolute w-[120px] md:w-[300px] bottom-0 left-0 rounded-b-[32px]'/>
                </div>
<div className=''>
                                    <img src={SaladPlate} className='w-[120px] md:w-[200px] absolute bottom-0 right-0 rounded-b-[32px]'/>

</div>
<div className=''>
                                    <img src={Leaf} className='w-[50px] md:w-[100px] absolute bottom-20 right-30 md:bottom-30 md:right-50 rounded-b-[32px]'/>

</div>

            </div>
        </section>

        <footer className="flex justify-between px-[16px] py-8 flex-col md:flex-row ">
            <aside className='flex-1 mb-4'>
                <p>FoodieLand</p>
                <p></p>
            </aside>
            <aside className=" flex-1">
                <nav>
                    <ul className="flex gap-8 justify-end flex-col md:flex-row">
                        <Link to='/' className='hover:text-cyan-500'>Home</Link>
                        <Link to='/receipes'>Receipes</Link>
                        <Link to='/contact'>Contact</Link >
                        <Link to='/about-us'>Abouts Us</Link >
                    <Link to='/blog'>Blog </Link >

                    </ul>
                </nav>
            </aside>

        </footer>
            <section className='flex  md:flex-row justify-end gap-10 items-center px-[16px] py-4 border-t border-gray-100'>
                <p>
                    © 2025 farmerintech. 
                </p>
                <div>
                            <button className="">
                              <FaFacebook className="inline mr-2" />
                            </button>
                            <button className="">
                              <FaTwitter className="inline mr-2" />
                            </button>
                            <button className="">
                              <FaInstagram className="inline mr-2" />
                            </button>
                          </div>
            </section>
                </section>

    )
}