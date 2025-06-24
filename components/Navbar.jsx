"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 z-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="inline-block"
          />
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-900 hover:text-gray-700">
            Home <Image
              src="/assets/vectors/Down_arrow.png"
              alt="Down Logo"
              width={10}
              height={10}
              className="inline-block"/>
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-700">
            About
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
