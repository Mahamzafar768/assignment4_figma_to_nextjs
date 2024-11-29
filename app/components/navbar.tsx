"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = ():void => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#F3F3F3] fixed w-full z-10 font-sans">
        <nav className="flex justify-between items-center md:px-20 px-6 py-6">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <h1 className= 'text-black'>ma.</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-xl text-black font-bold">
            <li><Link href={'/'}>Work</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/'}>Playground</Link></li>
            <li><Link href={'/'}>Contact</Link></li>
           
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-black p-2 rounded-md cursor-pointer hover:bg-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseSharp  size={30} />
            ) : (
              <GiHamburgerMenu  size={30} />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center md:hidden bg-gray-600  text-white font-bold text-lg py-6 space-y-4">
            <li><Link href="#">Work</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href="#">Playground</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        )}
      </header>
      
    </>
  );
};

export default Navbar;