import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

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
                        <li>Home</li>
                        <li>Receipes</li>
                        <li>Contact</li>
                        <li>Abouts Us</li>
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