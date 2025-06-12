import { motion } from "framer-motion";
import iot from '../assets/iot.jpg'

const ExpertiseHighlight = () => {
  return (
    <section id="expertise" className="py-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-10 max-w-[36rem]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} // Animate every time in view
        >
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-10 ">
            Our Expertise
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Expertise in Inverter & IoT Systems
          </h1>
          <p className="text-ash max-w-2xl mx-auto text-base leading-relaxed">
            Bee Energy Hive delivers precision-built inverter systems and cutting-edge IoT integrations, ensuring seamless energy management for your home or business.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Images / Diagrams */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }} // Animate every time in view
          >
            <img
              src={iot}
              alt="Inverter Assembly"
              className="rounded-lg shadow-lg"
            />
            {/*<img
              src="/src/assets/iot-monitoring.jpg"
              alt="IoT Monitoring"
              className="rounded-lg shadow-lg"
            />*/}
          </motion.div>

          {/* Features & Testimonials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }} // Animate every time in view
          >
            <div className="flex flex-col justify-start  text-ash max-w-xl">
                {/* Step 1 */}
                <div>
                    <p className="text-sm leading-relaxed my-2">
                        <span className="inline-block w-8 font-mono font-bold">01.</span> High-efficiency inverter systems for reliable performance
                    </p>
                    <hr className="border-gray-300" />
                </div>

                {/* Step 2 */}
                <div>
                    <p className="text-sm leading-relaxed my-2">
                        <span className="inline-block w-8 font-mono font-bold">02.</span> Real-time energy monitoring and smart IoT integration
                    </p>
                    <hr className="border-gray-300" />
                </div>

                {/* Step 3 */}
                <div>
                    <p className="text-sm leading-relaxed my-2">
                        <span className="inline-block w-8 font-mono font-bold">03.</span> Custom solutions to meet your unique energy needs
                    </p>
                    <hr className="border-gray-300" />
                </div>

                {/* Step 4 */}
                <div>
                    <p className="text-sm leading-relaxed my-2">
                        <span className="inline-block w-8 font-mono font-bold">04.</span> Expert installation and ongoing support
                    </p>
                    <hr className="border-gray-300" />
                </div>
            </div>


            {/* Features 
            <ul className="list-disc list-inside text-ash space-y-2">
              <li>High-efficiency inverter systems for reliable performance</li>
              <li>Real-time energy monitoring and smart IoT integration</li>
              <li>Custom solutions to meet your unique energy needs</li>
              <li>Expert installation and ongoing support</li>
            </ul>*/}

            {/* Testimonial */}
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <p className="text-ash italic">
                "Bee Energy Hive’s smart energy solutions have transformed our home’s energy usage—reliable and cost-effective!"
              </p>
              <p className="text-gold2 font-semibold mt-2">– A satisfied customer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHighlight;
