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
          <div className="p-2 bg-white rounded-full shadow-md transition-shadow group-hover:shadow-lg">
            <motion.img
              src="/images/logo.png"
              alt="SMAS Logo"
              className="h-10 w-10 transform group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 10 }}
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-green-500 bg-clip-text text-transparent">
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

        {/* Mobile Menu Button (Hide when Menu is Open) */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 gap-4 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end p-2 text-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
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
            <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4">
              {["About", "Products", "Farming", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-800 hover:text-teal-600 transition-colors bg-white px-4 py-2 rounded-lg"
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
