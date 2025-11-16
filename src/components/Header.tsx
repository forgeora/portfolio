'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/constants/site";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt={`${SITE_CONFIG.name} Logo`}
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{SITE_CONFIG.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'home' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Home</Link>
            <Link href="/about" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'about' ? 'text-blue-600 dark:text-blue-400' : ''}`}>About</Link>
            <Link href="/services" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'services' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Services</Link>
            <Link href="/projects" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'projects' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Projects</Link>
            <Link href="/reviews" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'reviews' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Reviews</Link>
            <Link href="/contact" className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 ${currentPage === 'contact' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'home' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'about' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'services' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'projects' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                Projects
              </Link>
              <Link
                href="/reviews"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'reviews' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${currentPage === 'contact' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900' : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
