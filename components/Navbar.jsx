"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 z-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold flex items-center">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="inline-block"
          />
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
