import { NavLink } from "react-router-dom";

export default function InverterSolutions() {
  return (
    <section className="text-black p-8 flex items-center justify-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          Powering Nigeria with Reliable Inverter Solutions ⚡
        </h1>

        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            At the heart of every thriving household, business, or industrial operation in Nigeria is reliable power. With erratic grid supply and increasing energy demands, our inverter solutions provide a dependable bridge between productivity and peace of mind.
          </p>

          <p>
            Our company is committed to engineering inverter systems that don’t just work — they perform. We build and configure inverters designed to handle fluctuations, power surges, and varying load capacities. Our custom setups combine sleek aesthetics with rugged internal architecture capable of withstanding Nigeria’s unique power landscape.
          </p>

          <p>
            Whether youre setting up a small home office or managing a commercial plaza, our inverter systems are scalable. From single-phase installations with battery banks to 3-phase industrial configurations, we tailor solutions that match real-life usage. You’ll enjoy automatic changeovers, real-time monitoring, and smart alerts that help you manage your power proactively.
          </p>

          <p>
            More than just hardware, we bring expertise. Our technical team conducts site assessments, load profiling, and budget analysis to determine the most efficient system for each client. No two installations are the same — because no two power needs are the same.
          </p>

          <p>
            Join hundreds of satisfied customers who have turned downtime into uptime through our inverter technologies. With durable batteries, intelligent switching systems, and long-term support, we bring future-proof energy into your present.
          </p>
        </article>

        <div className="mt-10 flex justify-center">
          <NavLink
            to="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-black hover:text-white font-medium transition"
          >
            Talk to an Expert
          </NavLink>
        </div>
      </div>
    </section>
  );
}
