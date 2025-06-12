import { useParams } from 'react-router-dom';
import miniPlan from '../assets/bee mini plan.jpg';
import midiPlan from '../assets/bee midi plan.jpg';

const plans = [
  {
    slug: 'mini-basic',
    title: 'Mini Basic',
    price: '₦350,000',
    features: [
      '0.8KVA Inverter (1 year warranty)',
      '150AH Battery',
      'No Solar Panel',
      'Installation Kit Included',
    ],
    description: 'Ideal for small homes and minimal energy users. Easy to install and budget-friendly.',
    image: miniPlan,
  },
  {
    slug: 'mini-premium',
    title: 'Mini Premium',
    price: '₦600,000',
    features: [
      '1.2KVA Inverter (1 year warranty)',
      '220AH Battery',
      '2× 250W Solar Panels',
      'Installation + Monitoring',
    ],
    description: 'A robust upgrade for higher efficiency and real-time monitoring. Great for growing needs.',
    image: miniPlan,
  },
  {
    slug: 'midi-basic',
    title: 'Midi Basic',
    price: '₦950,000',
    features: [
      '2.5KVA Inverter (1 year warranty)',
      '2× 220AH Batteries',
      '3× 300W Solar Panels',
      'Battery Rack & Monitoring Kit',
    ],
    description: 'Reliable mid-range solution for stable energy. Ideal for shops or medium households.',
    image: midiPlan,
  },
  {
    slug: 'midi-premium',
    title: 'Midi Premium',
    price: '₦1,600,000',
    features: [
      '5KVA Inverter (2 years warranty)',
      '4× 220AH Batteries',
      '6× 300W Solar Panels',
      'Smart Monitoring & IoT Integration',
      'Free Maintenance (6 Months)',
    ],
    description: 'High-capacity energy solution with smart integration. Designed for commercial scale.',
    image: midiPlan,
  },
];

const PlanDetails = () => {
  const { slug } = useParams();
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    return <p className="text-center mt-20 text-red-500">Plan not found</p>;
  }

  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={plan.image} alt={plan.title} className="w-full rounded-lg shadow-md" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-ash">{plan.title}</h1>
          <p className="text-green-600 font-bold text-xl mb-4">{plan.price}</p>
          <p className="text-gray-600 mb-4">{plan.description}</p>

          <ul className="space-y-2 mb-4">
            {plan.features.map((f, i) => (
              <li key={i} className="text-sm text-ash">✔ {f}</li>
            ))}
          </ul>

          <a
            href={`https://wa.me/234XXXXXXXXXX?text=Hello,%20I'm%20interested%20in%20the%20${plan.title}%20plan.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-ash text-white rounded hover:bg-black transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlanDetails;
