import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ServiceCard1 = ({ icon, title, desc }) => {
  return (
    <motion.article
      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <i className={`bx bx-${icon} text-gold2 text-3xl mb-4`}></i>
      <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.article>
  );
};

ServiceCard1.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const ServicesSection1 = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="services"
      className="px-4 py-12"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: false }}
    >
      <main className="container mx-auto">
        {/* Heading and Intro */}
        <div className="mb-10 max-w-[36rem]">
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-10 ">
            Our Smart Solar Services
          </span>
          <h1 className="h3 text-black">Smarter, Greener, and Connected: Our Solar Solutions</h1>
          <p className="text-ash text-[18px] leading-relaxed mt-4 max-w-[36rem]">
            Explore how our advanced, IoT-enabled solar solutions help you achieve energy independence and control your solar ecosystem online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "cog",
              title: "Inverter Design & Assembly",
              desc: "Tailored inverter solutions built to meet your energy needs with precision and reliability.",
            },
            {
              icon: "cloud",
              title: "IoT-Integrated Energy Systems",
              desc: "Smart IoT technology for seamless control, monitoring, and optimization of your energy usage.",
            },
            {
              icon: "sun",
              title: "Solar Panel Installations",
              desc: "High-quality solar installations for homes and businesses—bringing clean energy within reach.",
            },
            {
              icon: "search",
              title: "Energy Audits & Consulting",
              desc: "Expert analysis and guidance to help you maximize energy efficiency and savings.",
            },
            {
              icon: "bar-chart",
              title: "Smart Monitoring Solutions",
              desc: "Real-time data and analytics to keep you informed and in control of your solar performance.",
            },
            {
              icon: "support",
              title: "Ongoing Support & Maintenance",
              desc: "Dedicated support and proactive maintenance to ensure your system runs at peak performance.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ServiceCard1 {...service} />
            </motion.div>
          ))}
        </div>
      </main>
    </motion.section>
  );
};
export default ServicesSection1;