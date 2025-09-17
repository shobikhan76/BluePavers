import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded-2xl shadow-xl max-w-xl mx-auto p-8 flex flex-col gap-5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          required
        ></textarea>

        <motion.button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
