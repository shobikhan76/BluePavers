import React from "react";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-center">
        
        {/* Left - Phone */}
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>+92 3149750409</span>
        </div>

        {/* Center - Location */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <MapPin size={16} />
          <span>22 KM Multan Road Lahore, 54000 Pakistan</span>
        </div>

        {/* Right - Copyright */}
        <p className="mt-2 sm:mt-0">
          &copy; {new Date().getFullYear()} Blue Pavers and Concrete. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
