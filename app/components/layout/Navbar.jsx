'use client'


import { useState, useEffect } from "react";
import Link from "next/link";
import navbarLinks from "@/app/(data)/navbar/navbarLinks";


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolling direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
      setIsScrolling(true);

      // Clear previous timeout and set a new one for scroll inactivity
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true); // Show when not scrolling
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
        isVisible || !isScrolling ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Logo
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 items-center">
          {navbarLinks.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="text-gray-600 hover:text-blue-600">
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ul>
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 21l-2-2m-2-2a7 7 0 1114 0m-7-7v4m-3 0h6"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-blue-600">🌐</button>
        </div>
      </div>
    </nav>
  );
}
