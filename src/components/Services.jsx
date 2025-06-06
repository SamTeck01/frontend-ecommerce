const ServiceCard = ({ icon, title, desc }) => {
  return (
    <article className="border border-gray-200 p-6">
      <i className={`bx bx-${icon} text-ash text-lg mb-4`}></i>
      <h2 className="font-normal text-base mb-2 text-white">{title}</h2>
      <p className="text-ash text-xs leading-relaxed mb-2">
        {desc} Our innovative solar systems are equipped with IoT technology to give you complete control and monitoring capabilities—anytime, anywhere.
      </p>
      <button
        aria-label="More about our services"
        className="text-ash ring-1 rounded-full p-[5px] pb-0 float-end"
      >
        <i className="bx text-[24px] bx-arrow-right"></i>
      </button>
    </article>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="px-4 py-12">
      <main className="container mx-auto">

        <div className="mb-10 max-w-[36rem]">
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
            Our Smart Solar Services
          </span>

          <h1 className="h3 text-white">
            Smarter, Greener, and Connected: Our Solar Solutions
          </h1>
          <p className="text-ash text-[18px] leading-relaxed mt-4 max-w-[36rem]">
            Explore how our advanced, IoT-enabled solar solutions help you achieve energy independence and control your solar ecosystem online.
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon="sun"
            title="Smart Solar Systems"
            desc="Experience seamless energy management and real-time insights into your solar power generation."
          />
          <ServiceCard
            icon="bolt"
            title="Remote Monitoring"
            desc="Easily monitor your solar systems online and access detailed analytics from anywhere."
          />
          <ServiceCard
            icon="mobile"
            title="App Control"
            desc="Stay in command with our mobile app, offering full system control at your fingertips."
          />
          <ServiceCard
            icon="chart"
            title="Energy Insights"
            desc="Access data-driven insights to optimize your energy usage and savings."
          />
          <ServiceCard
            icon="wrench"
            title="Maintenance & Support"
            desc="Get expert support and proactive maintenance to keep your system running smoothly."
          />
          <ServiceCard
            icon="lock"
            title="Secure Connectivity"
            desc="Our secure IoT platform ensures safe and reliable connections for your smart energy systems."
          />
        </section>
      </main>
    </section>
  );
};

export default ServicesSection;
