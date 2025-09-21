import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo11.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white px-4 py-3 flex items-center justify-between relative bg-transparent">
      {/* Left: Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <img
          src={logo}
          alt="Business Logo"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
        />
      </Link>

      {/* Center: Navigation (Desktop Only) */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition-colors">
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/services" className="hover:text-gray-200 transition-colors">
              Services
            </Link>
          </li> */}
          <li>
            <Link to="/products" className="hover:text-gray-200 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-gray-200 transition-colors">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none z-20"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 text-white md:hidden shadow-lg z-50">
          <div className="pt-28 px-6">
            <ul className="flex flex-col items-start gap-6">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              {/* <li>
                <Link to="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li> */}
              <li>
                <Link to="/products" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
