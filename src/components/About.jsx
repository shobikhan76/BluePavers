import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const firstHalf = `
    Blue Pavers and Concrete is a modern manufacturing facility dedicated to producing High-Quality Pavers, Kerb Stones, Tuff tiles, and Concrete Products for construction and infrastructure projects.
    
    Established with a vision to provide Durable, Sustainable, and Aesthetically Appealing Solutions, the factory combines Advanced Technology, Skilled Craftsmanship, and Strict Quality Control to meet International Standards.
  `;

  const secondHalf = `
    With a focus on innovation and sustainability, Blue Pavers & Concrete uses state-of-the-art machinery, premium raw materials, and eco-friendly processes to deliver products that are not only strong and long-lasting but also enhance the beauty of residential, commercial, and industrial landscapes.

    Our wide range of products is designed to support Urban Development, Smart City Projects, Roads, Pavements, Parking Areas, and Landscaping Solutions. By prioritizing Customer Satisfaction, Timely Delivery, and Continuous Improvement, we aim to be a Trusted Partner for Builders and Architects.

    At Blue Pavers and Concrete, we don’t just manufacture building materials — we build TRUST.
  `;

  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-12 lg:px-24 text-center flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 cursor-pointer tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Blue Pavers and Concrete
      </motion.h2>

      {/* First Half (Always Visible) */}
      <motion.p
        className="max-w-4xl text-gray-700 leading-relaxed text-lg sm:text-xl text-justify"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {firstHalf}
      </motion.p>

      {/* Show More Section (Animated) */}
      <AnimatePresence>
        {showMore && (
          <motion.p
            key="more-text"
            className="max-w-4xl text-gray-700 leading-relaxed text-lg sm:text-xl text-justify mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {secondHalf}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Read More / Read Less Button */}
      <motion.button
        onClick={() => setShowMore(!showMore)}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-500 hover:shadow-lg transition"
        whileTap={{ scale: 0.95 }}
      >
        {showMore ? "Read Less" : "Read More"}
      </motion.button>
    </section>
  );
};

export default About;
