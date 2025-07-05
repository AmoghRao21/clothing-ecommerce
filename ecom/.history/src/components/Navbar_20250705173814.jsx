import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LS20250601003303.png';

const ObsidianNavbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true); // scrolling up
      } else {
        setShowNavbar(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-gradient-to-br from-black/80 to-[#1a0000]/80 border-b border-red-900/20 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 text-white uppercase text-base tracking-widest font-semibold max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Dark Elk Logo"
            className="w-12 h-12 object-contain drop-shadow-[0_2px_5px_rgba(255,0,0,0.25)]"
          />
          <div className="text-2xl tracking-wider text-white drop-shadow-[0_2px_4px_rgba(255,0,0,0.3)]">
            DARK ELK
          </div>
        </Link>

        <div className="hidden md:flex gap-10">
          {[{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }, { name: 'Lookbook', path: '#' }, { name: 'Contact', path: '#' }].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group hover:text-red-400 transition"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 via-orange-400 to-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button className="w-7 h-7 flex flex-col justify-between items-center focus:outline-none">
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ObsidianNavbar;