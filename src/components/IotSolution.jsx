import SendWhatsAppMessage from "./SendWhatsappMessage";

export default function IoTEnergySolutions() {
  return (
    <section className="px-4 pt-24 flexCenter">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Smart IoT Energy Systems Built for the Future 📡
        </h1>

        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Energy doesn’t just need to be available — it needs to be intelligent. Our IoT-powered energy systems give you real-time control, insights, and automation to take your setup to the next level.
          </p>

          <p>
            Imagine getting alerts when battery levels drop, remote commands to power down devices, and usage data visualized on a mobile dashboard — that’s what we build into our systems.
          </p>

          <p>
            We integrate smart meters, wireless sensors, and communication modules into inverters, solar grids, and building circuits. This allows for predictive maintenance, remote diagnostics, and automatic load switching based on demand.
          </p>

          <p>
            Whether its a single home or a distributed industrial site, our IoT backbone ensures smooth operations and minimal downtime. The systems are expandable, encrypted, and tailored to your unique workflow.
          </p>

          <p>
            Our mission is simple: empower users to think less about energy and get more from it. IoT energy is no longer the future—it’s your power partner today.
          </p>
        </article>

        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => SendWhatsAppMessage(`Hello, I’d like to learn more about your IoT energy systems.`)} 
            className="bg-gold2 hover:bg-gold2/80 text-white font-medium px-6 py-3 rounded-md flex justify-between items-center gap-2 mt-3 transition"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
