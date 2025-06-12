import { Link } from 'react-router-dom';

const plans = [
  {
    title: 'Mini Basic',
    slug: 'mini-basic',
    price: '₦350,000',
    features: [
      '0.8KVA Inverter (1 year warranty)',
      '150AH Battery',
      'No Solar Panel',
      'Installation Kit Included',
    ],
  },
  {
    title: 'Mini Premium',
    slug: 'mini-premium',
    price: '₦600,000',
    features: [
      '1.2KVA Inverter (1 year warranty)',
      '220AH Battery',
      '2× 250W Solar Panels',
      'Installation + Monitoring',
    ],
  },
  {
    title: 'Midi Basic',
    slug: 'midi-basic',
    price: '₦950,000',
    features: [
      '2.5KVA Inverter (1 year warranty)',
      '2× 220AH Batteries',
      '3× 300W Solar Panels',
      'Battery Rack & Monitoring Kit',
    ],
  },
  {
    title: 'Midi Premium',
    slug: 'midi-premium',
    price: '₦1,600,000',
    features: [
      '5KVA Inverter (2 years warranty)',
      '4× 220AH Batteries',
      '6× 300W Solar Panels',
      'Smart Monitoring & IoT Integration',
      'Free Maintenance (6 Months)',
    ],
  },
];

const PlansPage = () => {
  return (
    <section className="px-4 pt-24 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">All Solar Plans</h1>
        <p className="text-center text-ash max-w-2xl mx-auto mb-12">
          Browse our full range of solar solutions. Tap into efficient and smart energy tailored for your home or business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.slug} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-lg font-bold text-green-600 mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                {plan.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>✔ {feat}</li>
                ))}
              </ul>
              <Link
                to={`/plans/${plan.slug}`}
                className="inline-block mt-2 px-4 py-2 bg-ash text-white rounded hover:bg-black transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
