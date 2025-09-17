import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <section id="home" className="p-8 text-center">
    {/* Animated Heading */}
    <motion.h2
      className="text-3xl font-bold mb-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      We Build Trust
    </motion.h2>

    {/* Animated Button */}
    <motion.button
      className="bg-blue-600 text-white px-6 py-3 shadow-md hover:bg-blue-700 transition transform mt-6 rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      +92 3149750409
    </motion.button>
  </section>
);

export default Home;
