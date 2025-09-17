import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import pro from "../assets/pro-2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.webp";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";
import pro55 from "../assets/pro55.jpg";

const products = [
  { id: 1, name: "Rectangle", image: pro5 },
  { id: 2, name: "Uni Block", image: pro },
  { id: 3, name: "Kerb Stone", image: pro3 },
  { id: 4, name: "I Section", image: pro4 },
  { id: 5, name: "Solid Block", image: pro55 },
  { id: 6, name: "Hollow Block", image: pro6 },
];

const Products = () => {
  return (
    <section id="products" className="p-8 bg-gray-100">
      {/* Animated heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
      </motion.h2>

      {/* Mobile Slider with Arrows */}
      <div className="block md:hidden relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="overflow-hidden rounded-xl w-48 h-48 mx-auto">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-800 text-center">
                  {product.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-button-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="swiper-button-next absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden rounded-xl w-40 h-40">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-800">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
