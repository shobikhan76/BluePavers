import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, title: "Product 1", description: "High-quality concrete paver for residential and commercial projects." },
  { id: 2, title: "Product 2", description: "Durable kerb stone for roads, walkways, and landscaping solutions." },
  { id: 3, title: "Product 3", description: "Premium tuff tiles with aesthetic design for modern infrastructure." },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-50">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="border rounded-2xl p-6 shadow-sm bg-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
