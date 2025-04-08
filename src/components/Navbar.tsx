"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white backdrop-blur-lg shadow-md border-b border-teal-200">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="">
            <motion.img
              src="/logo.png"
              alt="SMAS Logo"
              className="h-14 w-14 transform group-hover:scale-110 transition-transform"
            />
          </div>
          {/* Hide SMAS on Mobile */}
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-green-500 bg-clip-text text-transparent hidden md:inline">
            SMAS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {["About", "Products", "Farming", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-gray-800 hover:text-teal-600 px-3 py-1 transition-all
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
                before:bg-teal-500 before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium 
              rounded-full shadow-lg hover:from-teal-700 hover:to-green-600 transform hover:scale-105 
              transition-all duration-300 flex items-center space-x-2"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 flex flex-col md:hidden shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end p-2 text-gray-800 rounded-lg"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col">
              {["About", "Products", "Farming", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-800 hover:text-teal-600 transition-colors px-4 py-3 bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
