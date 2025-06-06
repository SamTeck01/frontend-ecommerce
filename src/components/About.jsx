import { motion } from "framer-motion";
import firstPic from '../assets/demo-business-company-01.jpg';
import secondPic from '../assets/demo-business-company-02.jpg';

export default function About() {

  return (
    <section>
      <div className="px-4 py-12 " >

        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Heading and Subheading */}
          <div>       
            <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
              About Bee Energy
            </span>        
            <h2 className="h8 text-white">Empowering Homes with Sustainable Energy with IoT Solutions</h2>
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
      </div>
    </section>
  )
}
