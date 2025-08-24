import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Receipes', path: '/receipes' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about-us' },

  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold ">Foodieland</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`relative hover:purple-500 transition ${
                pathname === link.path ? 'text-purple-500 font-semibold' : ''
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-cyan-400 transition-all duration-300 ${
                  pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
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
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-full w-full z-50 fixed top-0 left-0 bg-white flex flex-col items-left space-y-4 py-4 px-10 mt-15">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-lg hover:text-gray-500 transition ${
                pathname === link.path ? 'text-purple-500 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
