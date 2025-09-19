import React from "react";
import { Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="text-gray-100 text-sm py-4 px-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-300/30">
      {/* Left: Phone Number */}
      <div className="flex items-center gap-2">
        <Phone size={16} />
        <span>+92 3149750409</span>
      </div>

      {/* Center: Location */}
      <div className="flex items-center gap-2 text-center">
        <MapPin size={16} />
        <span>Near Air university kamra, Hatian road Attock </span>
      </div>

      {/* Right: Social Icons */}
      <div className="flex gap-3 mt-2 md:mt-0">
        <a
          href="https://www.facebook.com/profile.php?id=61580902232158
"
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
  );
};

export default TopBar;
