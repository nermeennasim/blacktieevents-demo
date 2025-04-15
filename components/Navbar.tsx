/* eslint-disable */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBlackTie } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, _setActivePage] = useState('/'); // Track the active page

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `px-4 py-2 rounded transition duration-300 ${
      isActive(path)
        ? 'bg-gray-600 text-purple-400'
        : 'hover:bg-gray-600 hover:text-purple-400'
    }`;

  // const isDropdownActive = (pathPrefix: string) =>
  //   pathname?.startsWith(pathPrefix);

  const dropdownLinkClass = (path: string) =>
    `block px-4 py-2 transition duration-300 rounded ${
      isActive(path)
        ? 'bg-gray-700 text-purple-400'
        : 'hover:bg-gray-700 hover:text-purple-400'
    }`;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 rounded-t-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        {/* Logo and Web Name in One Line */}
        <div className="flex items-center space-x-2">
          {/* Logo Icon */}
          <FaBlackTie className="text-white text-xl" />{' '}
          {/* Using the FontAwesome BlackTie icon */}
          {/* Web Name */}
          <span className="text-2xl font-bold">
            <Link href="/" onClick={() => _setActivePage('/')}>
              Black Tie Events
            </Link>
          </span>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>

          <Link href="/plans" className={linkClass('/plans')}>
            Plans
          </Link>

          <Link href="/testimonials" className={linkClass('/testimonials')}>
            Testimonials
          </Link>

          <Link href="/contact" className={linkClass('/contact')}>
            Contact Us
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={linkClass('/services')}
            >
              Services ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 text-white mt-2 rounded shadow-lg w-48 z-10">
                <Link
                  href="/services/book-a-call"
                  onClick={() => setIsDropdownOpen(false)}
                  className={dropdownLinkClass('/services/book-a-call')}
                >
                  Book a Call
                </Link>
                <Link
                  href="/services/rent-equipment"
                  onClick={() => setIsDropdownOpen(false)}
                  className={dropdownLinkClass('/services/rent-equipment')}
                >
                  Rent Equipment
                </Link>
                <Link
                  href="/services/request-song"
                  onClick={() => setIsDropdownOpen(false)}
                  className={dropdownLinkClass('/services/request-song')}
                >
                  Request a Song
                </Link>
                <Link
                  href="/services/photobooth"
                  onClick={() => setIsDropdownOpen(false)}
                  className={dropdownLinkClass('/services/photobooth')}
                >
                  Photobooth
                </Link>
              </div>
            )}
          </div>

          {/* Login Button with MdLogin Icon */}
          <Link
            href="/login"
            className="bg-purple-600 px-6 py-3 rounded hover:bg-purple-700 flex items-center transition duration-300"
          >
            <MdLogin className="mr-2" /> {/* MdLogin Icon */}
            <span>Login</span> {/* Text */}
          </Link>
        </div>

        {/* Mobile Menu (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items (Show when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link href="/plans" className="hover:text-purple-400">
            Plans
          </Link>
          <Link href="/testimonials" className="hover:text-purple-400">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-purple-400">
            Contact Us
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-purple-400 focus:outline-none"
            >
              Services ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg w-48 z-10">
                <Link
                  href="/services/book-a-call"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Book a Call
                </Link>
                <Link
                  href="/services/rent-equipment"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Rent Equipment
                </Link>
                <Link
                  href="/services/request-song"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Request a Song
                </Link>
                <Link
                  href="/services/photobooth"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Photobooth
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/login"
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
