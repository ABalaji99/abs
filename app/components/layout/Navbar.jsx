'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-white">
          Technova
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="/services" className="text-white hover:text-blue-400 transition duration-300">Services</Link>
          <Link href="/about" className="text-white hover:text-blue-400 transition duration-300">About</Link>
          <Link href="/contact" className="text-white hover:text-blue-400 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 text-white text-lg space-y-4 p-6 absolute top-0 left-0 right-0 shadow-lg"
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400">Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400">Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400">About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400">Contact</Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
