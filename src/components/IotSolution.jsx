import { NavLink } from "react-router-dom";

export default function IoTEnergySolutions() {
  return (
    <section className="min-h-screen text-black p-8 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Smart IoT Energy Systems 📡</h1>
        <p className="text-lg text-ash mb-6">
          Our IoT-enabled energy systems empower you to monitor, manage, and optimize power usage remotely.
          With real-time diagnostics, alerts, and automation tools, we bring intelligent control to your fingertips.
          It’s energy, evolved—for homes, offices, and industrial zones.
        </p>
        <NavLink to="/solutions" className="bg-orange-400 text-white px-6 py-3 rounded hover:bg-white hover:text-black font-medium transition">
          Explore Smart Features
        </NavLink>
      </div>
    </section>
  );
}
