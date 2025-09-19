import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // ✅ Import social icons

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

        {/* Right - Contact Info + Social Icons */}
        <div className="flex flex-col items-center md:items-start gap-3">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+923149750409" className="hover:text-blue-400 transition">
              +92 314 9750409
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>Near Air University Kamra, Hatian Road, Attock</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=61580902232158"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 rounded-full text-gray-900 hover:bg-blue-600 hover:text-white shadow-md transition transform hover:scale-110"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://x.com/home?lang=en"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 rounded-full text-gray-900 hover:bg-sky-500 hover:text-white shadow-md transition transform hover:scale-110"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.instagram.com/bluepavers"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 rounded-full text-gray-900 hover:bg-pink-500 hover:text-white shadow-md transition transform hover:scale-110"
            >
              <Instagram size={16} />
            </a>
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
