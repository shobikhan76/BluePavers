import React, { useState } from "react";
import logo from "../assets/logo.png"; // Ideally replace this with a transparent logo.png
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white p-4 flex justify-between items-center relative">
      {/* Logo Section */}
      <a
        href="#home"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <img
          src={logo}
          alt="Business Logo"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ml-4 md:ml-8 shadow-lg 
             hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1">
        <ul className="flex justify-center gap-6 items-center flex-wrap">
          <li>
            <a href="#home" className="hover:text-gray-200 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200 transition-colors">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-200 transition-colors">Services</a>
          </li>
          <li>
            <a href="#products" className="hover:text-gray-200 transition-colors">Products</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-200 transition-colors">Gallery</a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none mr-4"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white md:hidden shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
