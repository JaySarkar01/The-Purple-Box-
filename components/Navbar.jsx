"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={130}
            height={130}
            className="inline-block w-auto h-20 md:h-14"
          />
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`flex-col md:flex-row md:flex md:items-center gap-6 md:gap-16 absolute md:static top-20 left-0 w-full md:w-auto bg-white px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
          <Link href="/" className="text-gray-900 hover:text-gray-700 flex items-center">
            BAR & BURN
            <Image src="/assets/vectors/Down_arrow.png" alt="Down Logo" width={12} height={12} className="ml-1" />
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-700 flex items-center">
            BOARDROOM BUILT
            <Image src="/assets/vectors/Down_arrow.png" alt="Down Logo" width={12} height={12} className="ml-1" />
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-700">
            ABOUT US
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-700">
            CONTACT US
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/search">
            <Image src="/assets/vectors/search.png" alt="Search Icon" width={22} height={22} />
          </Link>
          <Link href="/login">
            <Image src="/assets/vectors/user.png" alt="User Icon" width={22} height={22} />
          </Link>
          <Link href="/cart">
            <Image src="/assets/vectors/cart.png" alt="Cart Icon" width={22} height={22} />
          </Link>
        </div>
      </div>

      {/* Icons on mobile (below menu) */}
      {isOpen && (
        <div className="flex md:hidden justify-center items-center gap-10 mt-4">
          <Link href="/search">
            <Image src="/assets/vectors/search.png" alt="Search Icon" width={22} height={22} />
          </Link>
          <Link href="/login">
            <Image src="/assets/vectors/user.png" alt="User Icon" width={22} height={22} />
          </Link>
          <Link href="/cart">
            <Image src="/assets/vectors/cart.png" alt="Cart Icon" width={22} height={22} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
