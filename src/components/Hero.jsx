import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const slides = [
  {
    title: 'We Build Powerful Inverters ⚡',
    description: 'High-performance inverter systems built and assembled for businesses and homes.',
    bgImage: '/images/inverter.jpg',
  },
  {
    title: 'Expert Installation Services 🔧',
    description: 'Seamless installations of solar panels, energy systems, and inverter setups.',
    bgImage: '/images/installation.jpg',
  },
  {
    title: 'Smart IoT Energy Solutions 📡',
    description: 'Intelligent monitoring and control powered by IoT-enabled devices.',
    bgImage: '/images/iot.jpg',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-[100vh] relative bg-black text-white overflow-hidden">
      {/* 🖼️ Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${slides[activeIndex].bgImage})` }}
      />

      {/* 🧭 Slide Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          autoplay={{ delay: 6000 }}
          loop
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          navigation
          className="w-full h-full"
        >
          {slides.map((slide, index) => {
            const [ref, inView] = useInView({ threshold: 0.6 });
            return (
              <SwiperSlide key={index}>
                <div ref={ref} className="w-full h-full flex items-center justify-center px-6">
                  <div className="bg-black/60 backdrop-blur-md p-10 rounded-xl text-center max-w-3xl">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-orange-400/30 text-white px-4 py-1 rounded-full text-sm tracking-wide inline-block mb-4"
                    >
                      Business Solutions
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-4xl md:text-5xl font-bold mb-3"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-lg text-gray-300 mb-6"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <NavLink to="/" className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-medium transition">
                        Get Started
                      </NavLink>
                      <NavLink to="/services" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black font-medium transition">
                        Explore Services
                      </NavLink>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* 🔘 Custom Pagination Container */}
      <div className="swiper-pagination absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3" />
    </section>
  );
}
