import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkenrgq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 text-gray-800"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Phone */}
        <a
          href="tel:+923149750409"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Phone size={20} />
          <span className="font-medium">+92 314 9750409</span>
        </a>

        {/* Email */}
        <a
          href="mailto:bluepavers7@gmail.com"
          className="flex items-center gap-2 hover:text-blue-600 transition"
        >
          <Mail size={20} />
          <span className="font-medium">bluepavers7@gmail.com</span>
        </a>
      </motion.div>

      <div className="max-w-xl mx-auto">
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
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
        ) : (
          <motion.div
            className="text-center bg-white rounded-2xl shadow-xl p-8 text-green-700 font-semibold"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl mb-2">✅ Message Sent</h2>
            <p>Thanks for contacting us! We will get back to you shortly.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
