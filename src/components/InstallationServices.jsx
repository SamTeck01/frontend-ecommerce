import SendWhatsAppMessage from "./SendWhatsappMessage";

export default function InstallationServices() {
  return (
    <section className="px-4 pt-24 flexCenter">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Seamless Installation Services Across Nigeria 🔧
        </h1>

        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Energy systems are only as reliable as the way they’re installed. Our team specializes in the precise and professional setup of solar panels, inverter banks, batteries, and hybrid energy systems for homes and businesses.
          </p>

          <p>
            From site evaluation to final connection, we follow best practices with strict attention to detail and safety protocols. Every wire, panel, and battery is placed with longevity in mind—minimizing faults and maximizing performance.
          </p>

          <p>
            Whether you’re retrofitting an older setup or launching a full green energy transition, we handle everything from civil groundwork to grid synchronization. Our projects are fully documented and verified to meet regulatory standards.
          </p>

          <p>
            Our installation process includes tailored load analysis, durable cabling, weather-resistant mounts, and clean aesthetic integrations that blend perfectly with your building design.
          </p>

          <p>
            By choosing us, youre not just getting installers — youre getting energy partners that treat your infrastructure like their own. We don’t disappear after the last cable is clipped. We stay connected.
          </p>
        </article>

        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => SendWhatsAppMessage(`Hello, I’m interested in your installation services.`)} 
            className="bg-gold2 hover:bg-gold2/80 text-white font-medium px-6 py-3 rounded-md flex justify-between items-center gap-2 mt-3 transition"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
