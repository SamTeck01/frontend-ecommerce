import PropTypes from 'prop-types';

const ServiceCard1 = ({ icon, title, desc }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md cursor-pointer">
      <i className={`bx bx-${icon} text-gold2 text-3xl mb-4`}></i>
      <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </article>
  );
};

ServiceCard1.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const ServicesSection1 = () => {
  return (
    <section id="services" className="px-4 py-12 ">
      <main className="container mx-auto ">
        {/* Heading and Intro */}
        <div className="mb-10 max-w-[36rem]">
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-10 ">
            Our Smart Solar Services
          </span>

          <h1 className="h3 text-black">
            Smarter, Greener, and Connected: Our Solar Solutions
          </h1>
          <p className="text-ash text-[18px] leading-relaxed mt-4 max-w-[36rem]">
            Explore how our advanced, IoT-enabled solar solutions help you achieve energy independence and control your solar ecosystem online.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard1
            icon="cog"
            title="Inverter Design & Assembly"
            desc="Tailored inverter solutions built to meet your energy needs with precision and reliability."
          />
          <ServiceCard1
            icon="cloud"
            title="IoT-Integrated Energy Systems"
            desc="Smart IoT technology for seamless control, monitoring, and optimization of your energy usage."
          />
          <ServiceCard1
            icon="sun"
            title="Solar Panel Installations"
            desc="High-quality solar installations for homes and businesses—bringing clean energy within reach."
          />
          <ServiceCard1
            icon="search"
            title="Energy Audits & Consulting"
            desc="Expert analysis and guidance to help you maximize energy efficiency and savings."
          />
          <ServiceCard1
            icon="bar-chart"
            title="Smart Monitoring Solutions"
            desc="Real-time data and analytics to keep you informed and in control of your solar performance."
          />
          <ServiceCard1
            icon="support"
            title="Ongoing Support & Maintenance"
            desc="Dedicated support and proactive maintenance to ensure your system runs at peak performance."
          />
        </div>
      </main>
    </section>
  );
};
export default ServicesSection1;
ServicesSection1.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
};