'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/svgs/logo'; // Keep your SVG import (replace with text if needed, e.g., <div>Siam Logo</div>)

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto py-[10px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 pr-28 font-semibold text-[#686868] text-base leading-[20px] tracking-[-0.01em]">
          <Link 
            href="/" 
            className={`px-14px py-[10px] rounded-lg transition-all duration-200 ${
              isActive('/') 
                ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm w-[124px] h-[40px] flex items-center justify-center' 
                : 'hover:text-[#F4511E] hover:underline'
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`px-[14px] py-[10px] rounded-lg transition-all duration-200 ${
              isActive('/about') 
                ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm w-[124px] h-[40px] flex items-center justify-center gap-[12px]' 
                : 'hover:text-[#F4511E] hover:underline'
            }`}
            onClick={closeMenu}
          >
            Portfolio&apos;s
          </Link>
          <Link 
            href="/contact" 
            className={`px-[14px] py-[10px] rounded-lg transition-all duration-200 ${
              isActive('/contact') 
                ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm w-[124px] h-[40px] flex items-center justify-center' 
                : 'hover:text-[#F4511E] hover:underline'
            }`}
            onClick={closeMenu}
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-end p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-[#686868] rounded transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6/12 h-0.5 bg-[#686868] rounded transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-[#686868] rounded transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-4 pt-4 font-semibold text-[#686868] text-base leading-[20px] tracking-[-0.01em]">
            <Link 
              href="/" 
              className={`py-3 px-4 rounded-lg transition-all ${isActive('/') ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm' : 'hover:text-[#F4511E] hover:bg-gray-50'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`py-3 px-4 rounded-lg transition-all ${isActive('/about') ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm' : 'hover:text-[#F4511E] hover:bg-gray-50'}`}
              onClick={closeMenu}
            >
              Portfolio&apos;s
            </Link>
            <Link 
              href="/contact" 
              className={`py-3 px-4 rounded-lg transition-all ${isActive('/contact') ? 'bg-white border-2 border-[#F6F5F5] text-[#F4511E] shadow-sm' : 'hover:text-[#F4511E] hover:bg-gray-50'}`}
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;