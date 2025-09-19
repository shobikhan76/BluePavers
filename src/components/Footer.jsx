import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left - About Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About Us</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Blue Pavers and Concrete is a modern manufacturing facility producing 
            high-quality pavers, kerb stones, tuff tiles, and concrete products. 
            Our focus is on durability, sustainability, and aesthetic excellence 
            to meet international standards and support urban development.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">Products</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+923149750409" className="hover:text-blue-400 transition">
              +92 314 9750409
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Near Air University Kamra, Hatian Road, Attock</span>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Blue Pavers and Concrete. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
