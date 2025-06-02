import { motion } from "framer-motion";
import firstPic from '../assets/demo-business-company-01.jpg';
import secondPic from '../assets/demo-business-company-02.jpg';

export default function Popular() {

  return (
    <section>
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]" >

        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Heading and Subheading */}
          <div>       
            <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
              About Bee Energy
            </span>        
            <h2 className="h8 text-white">Empowering Homes with Sustainable Solar Solutions</h2>
            <p className="text-ash text-[18px]">
              We’re passionate about transforming homes and businesses with cutting-edge solar technology. 
              With years of experience, we’re dedicated to making clean energy accessible, reliable, and affordable for everyone.
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
