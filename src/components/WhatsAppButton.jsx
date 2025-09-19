import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/923149750409", "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton;
