import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import iotBanner from '../assets/iot banner.jpg';
import installationBanner from '../assets/WhatsApp Image 2025-05-31 at 20.59.10_f6ce1b15.jpg';
import buildingInverter from '../assets/WhatsApp Image 2025-06-11 at 18.57.05_75f82c29.jpg';

// ⬇️ Slide data with long descriptions and links
const slides = [
  {
    title: 'We Build Powerful Inverters ⚡',
    description:
      'Reliable, high-performance inverter systems designed for homes and businesses.',
    bgImage: buildingInverter,
    link: '/inverter-solutions',
  },
  {
    title: 'Expert Installation Services 🔧',
    description:
      'Professional setup of solar panels, batteries, and energy systems.',
    bgImage: installationBanner,
    link: '/installation-services',
  },
  {
    title: 'Smart IoT Energy Solutions 📡',
    description:
      'Monitor and control your power intelligently with smart IoT tech.',
    bgImage: iotBanner,
    link: '/iot-energy-solutions',
  },
];



export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full h-[100vh] relative bg-black text-white overflow-hidden">
      {/* 🖼️ Dynamic Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 z-0"
        style={{ backgroundImage: `url(${slides[activeIndex].bgImage})` }}
      />

      {/* 🧊 Full Section Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[5]" />

      {/* 🧭 Slide Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
                  <div className="p-10 text-center max-w-3xl">
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
                      <NavLink
                        to={slide.link}
                        className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-medium transition"
                      >
                        Learn More
                      </NavLink>
                      <NavLink
                        to="/#contact"
                        className="bg-gold2 text-white px-6 py-3 rounded hover:bg-orange-600 font-medium transition"
                      >
                        Contact Us
                      </NavLink>

                    </motion.div>
                      <div className="mt-6 text-center">
                        <p className="text-white text-lg">Want to see our work in action?</p>
                        <a 
                          href="/gallery" 
                          className="inline-block mt-2 text-gold2 hover:underline font-medium text-lg"
                        >
                          Browse Our Gallery →
                        </a>
                      </div>
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
