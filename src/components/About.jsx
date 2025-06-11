import { motion } from "framer-motion";
import firstPic from '../assets/WhatsApp Image 2025-05-31 at 20.59.11_71b14972.jpg';
import secondPic from '../assets/WhatsApp Image 2025-05-31 at 20.59.10_89975621.jpg';

export default function About() {

  return (
    <section id="about" className="px-4 py-12 ">
      <div className="container mx-auto" >

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Heading and Subheading */}
          <div>       
            <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
              About Bee Energy
            </span>        
            <h2 className="h8 text-black">Empowering Homes with Sustainable Energy with IoT Solutions</h2>
            <p className="text-ash text-[18px] leading-relaxed mt-4 max-w-[36rem]">
              Join us on our mission to revolutionize home energy systems through innovative IoT-powered solutions, combining real-time monitoring, data-driven insights, and seamless integration for a cleaner, smarter, and more efficient future.
            </p>
          </div>

          {/* Right side: Overlapping images */}
          <div className="relative flexEnd">
            {/* Larger image */}
            <motion.div
              className="w-[76%] h-auto rounded-lg shadow-lg "
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -70 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src={secondPic}
                alt="Team at work"
                className="rounded-lg"
              />
            </motion.div>
            
            {/* Smaller overlapping image */}
            <motion.div
              className="absolute -bottom-8 left-3 w-[60%] h-auto rounded-lg shadow-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: 70 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src={firstPic}
                alt="Team discussion"
                className="rounded-lg"
              />
            </motion.div>
            
          </div>
        </section>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Customer Satisfaction */}
          <div className="bg-yellow-50 rounded-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-600 mb-2">99%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>

          {/* Solar Projects Completed */}
          <div className="bg-[#f0f9ff] rounded-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-[#0f172a] mb-2">120+</h3>
            <p className="text-gray-600">Solar Projects Completed</p>
          </div>

          {/* Average Energy Savings */}
          <div className="bg-[#f0fdfa] rounded-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-[#0f766e] mb-2">35%</h3>
            <p className="text-gray-600">Average Energy Savings</p>
          </div>
        </div>



      </div>
    </section>
  )
}
