import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/LS20250601003303.png';

const ObsidianNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="group fixed top-0 left-0 w-full z-50 transform -translate-y-full hover:translate-y-0 transition-transform duration-500 bg-gradient-to-br from-black/80 to-[#1a0000]/80 border-b border-red-900/20 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 text-white uppercase text-base tracking-widest font-semibold max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Dark Elk Logo"
            className="w-12 h-12 object-contain drop-shadow-[0_2px_5px_rgba(255,0,0,0.25)]"
          />
          <div className="text-2xl tracking-wider text-white drop-shadow-[0_2px_4px_rgba(255,0,0,0.3)]">
            DARK ELK
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10">
          {['Home', 'Shop', 'Lookbook', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative group hover:text-red-400 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 via-orange-400 to-red-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="w-7 h-7 flex flex-col justify-between items-center focus:outline-none">
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
            <span className="w-full h-[2px] bg-white rounded" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default ObsidianNavbar;
