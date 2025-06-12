import { motion } from "framer-motion";
import firstPic from '../assets/WhatsApp Image 2025-05-31 at 20.59.11_71b14972.jpg';
import secondPic from '../assets/WhatsApp Image 2025-05-31 at 20.59.10_89975621.jpg';

export default function About() {
  return (
    <section id="about" className="px-4 py-12">
      <div className="container mx-auto">

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Heading and Subheading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >       
            <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-10">
              About Bee Energy
            </span>        
            <h2 className="h8 text-black">
              Empowering Homes with <span className="text-ash">Sustainable Energy</span> with IoT Solutions
            </h2>
            <p className="text-ash text-[18px] leading-relaxed mt-4 max-w-[36rem]">
              Join us on our mission to revolutionize home energy systems through innovative IoT-powered solutions, combining real-time monitoring, data-driven insights, and seamless integration for a cleaner, smarter, and more efficient future.
            </p>
          </motion.div>

          {/* Right side: Overlapping images */}
          <div className="relative flexEnd">
            <motion.div
              className="w-[76%] h-auto rounded-lg shadow-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -70 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <img src={secondPic} alt="Team at work" className="rounded-lg" />
            </motion.div>

            <motion.div
              className="absolute -bottom-8 left-3 w-[60%] h-auto rounded-lg shadow-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 70 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <img src={firstPic} alt="Team discussion" className="rounded-lg" />
            </motion.div>
          </div>
        </section>

        {/* Animated stats section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
        >
          {[
            { title: "100+", desc: "Inverters Built", color: "text-yellow-600", bg: "bg-yellow-50" },
            { title: "30+", desc: "Businesses Empowered with Smart IoT", color: "text-[#0f172a]", bg: "bg-[#f0f9ff]" },
            { title: "99%", desc: "Customers Satisfaction", color: "text-[#0f766e]", bg: "bg-[#f0fdfa]" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className={`${stat.bg} rounded-lg p-6 text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.title}</h3>
              <p className="text-gray-600">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
