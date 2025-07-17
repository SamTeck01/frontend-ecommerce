import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {ShieldCheck, Share2, Heart} from 'lucide-react'; 
import plans from '../assets/all_plans';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const PlanCard2 = ({ image, title, price, slug, features = [], label = 'Popular', ctaText, custom }) => {
  return (
    <motion.div
      className={`rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden w-[280px] min-w-[200px] mb-2`}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      custom={custom}
    >
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-40 w-full object-cover"/>
        <span className="absolute top-3 left-3 bg-white text-black text-xs font-medium px-2 py-1 rounded-full shadow">
          {label}
        </span>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-[17px] font-semibold text-gray-800">{title}</h3>
        <p className="text-lg font-bold text-gold2 mt-1">{price}</p>

        <ul className="space-y-1 mt-3 text-gray-500 text-sm">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-green-500"/> {feat}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-5">
          <HashLink smooth to={`/plans/${slug}`} className="text-sm text-white bg-gold2 px-4 py-2 rounded-full hover:bg-black transition">
            {ctaText}
          </HashLink>

          <div className="flex items-center gap-3 text-gray-400">
            <Heart size={18} className="hover:text-gold2 cursor-pointer"/>
            <Share2 size={18} className="hover:text-gold2 cursor-pointer"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
PlanCard2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  custom: PropTypes.number.isRequired
}

/*const plans = [
  {
    image: beeMiniPlan,
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
    image: beeMiniPlan,
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
    image: beeMidiPlan,
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
    image: beeMidiPlan,
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
];*/

const PlansPage = () => {
  return (
    <section className="px-4 pt-24 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">All Solar Plans</h1>
        <p className="text-center text-ash max-w-2xl mx-auto mb-12">
          Browse our full range of solar solutions. Tap into efficient and smart energy tailored for your home or business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
          {plans.map((plan, index) => (
            <div key={plan.slug}>
              <PlanCard2 
                image={plan.image}
                title={plan.title}
                slug={plan.slug}
                price={plan.price}
                features={plan.features}
                ctaText={`Get ${plan.title}`}
                custom={index}
              />
              {/*<div className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
                <p className="text-lg font-bold text-gold2 mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  {plan.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx}>✔ {feat}</li>
                  ))}
                </ul>
                <HashLink smooth to={`/plans/${plan.slug}`}
                  className="inline-block mt-2 px-4 py-2 bg-ash text-white rounded hover:bg-black transition"
                >
                  View Details
                </HashLink>
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
