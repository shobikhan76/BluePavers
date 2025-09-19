import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Blogs from "./components/Blogs";
import TopBar from "./components/TopBar";
import Products from "./components/Products";
import QuickRequestCard from "./components/QuickRequestCard";
import WhatsAppButton from "./components/WhatsAppButton"; // ✅ IMPORT WHATSAPP BUTTON

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* ✅ HERO SECTION with Swiper (only for Home page) */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative h-[80vh] sm:h-[70vh] md:h-[80vh]">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="h-full"
                >
                  {[pic1, pic2, pic3, pic4].map((pic, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${pic})` }}
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          <TopBar />
                          <Header />

                          {/* Hero Content */}
                          <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
                            <motion.div
                              className="text-white text-center max-w-3xl"
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                            >
                              <Home />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            }
          />
          {/* ✅ For other pages, we just show TopBar + Header */}
          <Route
            path="*"
            element={
              <div className="bg-black">
                <TopBar />
                <Header />
              </div>
            }
          />
        </Routes>

        {/* ✅ Page Routing for main content */}
        <main className="flex-1 bg-white">
          <Routes>
            {/* ✅ Home shows all sections */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  
                  <Products />
                  <QuickRequestCard />
                  <Gallery />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>

        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
