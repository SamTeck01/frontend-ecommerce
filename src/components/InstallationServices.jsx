import { NavLink } from "react-router-dom";

export default function InstallationServices() {
  return (
    <section className="min-h-screen text-black p-8 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Professional Installations 🔧</h1>
        <p className="text-lg text-ash mb-6">
          We specialize in safe, precise installations of solar panels, inverter batteries, and hybrid energy systems.
          From on-site assessments to final setup and testing, our team delivers turnkey energy solutions that perform.
          Every project is handled with care, compliance, and lasting quality.
        </p>
        <NavLink to="/services" className="bg-orange-400 text-white px-6 py-3 rounded hover:bg-white hover:text-black font-medium transition">
          See Full Installation Process
        </NavLink>
      </div>
    </section>
  );
}
