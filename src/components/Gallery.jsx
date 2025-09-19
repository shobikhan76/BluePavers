import React from "react";
import { motion } from "framer-motion";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: g1, alt: "Gallery Image 1" },
    { id: 2, src: g2, alt: "Gallery Image 2" },
    { id: 3, src: g3, alt: "Gallery Image 3" },
    { id: 4, src: g4, alt: "Gallery Image 4" },
    { id: 5, src: g5, alt: "Gallery Image 5" },
    { id: 6, src: g6, alt: "Gallery Image 6" },
    { id: 7, src: g7, alt: "Gallery Image 7" },
    { id: 8, src: g8, alt: "Gallery Image 8" },
    { id: 9, src: g9, alt: "Gallery Image 9" },
    { id: 10, src: g10, alt: "Gallery Image 10" },
    { id: 11, src: g11, alt: "Gallery Image 11" },
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Gallery
      </motion.h2>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
