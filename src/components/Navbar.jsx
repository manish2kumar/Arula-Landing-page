import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // import react-scroll
import { Link } from "react-router-dom"; // keep for Home link
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses =
    "text-gray-700 font-medium hover:text-[#FF69B4] hover:scale-105 transition-all duration-200 cursor-pointer";

  return (
    <nav className="fixed w-full z-40 bg-[#FFE4EC] shadow-sm">
      <div className="max-w-[90%] mx-auto flex justify-between h-20 items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img className="h-12 w-auto" src={logo} alt="Arula for Autism" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={linkClasses}>
            Home
          </Link>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={linkClasses}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={linkClasses}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-brand focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFE4EC] shadow-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={linkClasses + " block px-3 py-2 rounded-md text-base"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={linkClasses + " block px-3 py-2 rounded-md text-base"}
              onClick={() => setIsOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={linkClasses + " block px-3 py-2 rounded-md text-base"}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
}
