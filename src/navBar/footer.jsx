import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

export const Footer = ()=>{
    return(
        <>
        <footer className="flex justify-between px-[16px] py-8 flex-col md:flex-row border-t border-gray-100">
            <aside className='flex-1 mb-4'>
                <p>FoodieLand</p>
                <p></p>
            </aside>
            <aside className=" flex-1">
                <nav>
                    <ul className="flex gap-8 justify-between flex-col md:flex-row">
                        <Link to='/'>Home</Link>
                        <Link to='/receips'>Receipes</Link>
                        <Link to='/contact'>Contact</Link >
                        <Link to='/abouts-us'>Abouts Us</Link >
                    </ul>
                </nav>
            </aside>

        </footer>
            <section className='flex  md:flex-row justify-between items-center px-[16px] py-4 border-t border-gray-100'>
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
</>

    )
}