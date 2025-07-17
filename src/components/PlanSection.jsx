import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <Link
            to={`/plans/${slug}`} className="text-sm text-white bg-gold2 px-4 py-2 rounded-full hover:bg-black transition">
            {ctaText}
          </Link>

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
  label: PropTypes.string,
  ctaText: PropTypes.string,
  custom: PropTypes.number,
};

const PlanCard = ({ title, priceLabel, price, features = [], slug, bgColor = 'bg-white', iconBg = 'bg-ash', icon = 'cart', textColor = 'text-gray-800', custom }) => {
  return (
    <motion.div
      className={`rounded-xl p-8 transition-all duration-300 hover:shadow-xl ${bgColor} flex flex-col justify-between`}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      custom={custom}
    >
      <div className={`w-16 h-16 rounded-full ${iconBg} flex items-center justify-center mb-6`}>
        <i className={`bx bx-${icon} text-[24px] text-white`}></i>
      </div>

      <div className="border-b flex items-center justify-between">
        <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
        <div className="text-right">
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-sm font-medium text-ash mb-1">{priceLabel}</p>
        </div>
      </div>

      <ul className="space-y-3 mb-1 py-4">
        {features.slice(0, 3).map((feat, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mt-1 mr-2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className={`${textColor}`}>{feat}</p>
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t">
        <Link
          to={`/plans/${slug}`}
          className="block w-full text-center bg-transparent text-ash border-2 border-ash hover:bg-ash hover:text-white py-3 rounded-md font-medium transition duration-300"
        >
          See Details
        </Link>
      </div>
    </motion.div>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  priceLabel: PropTypes.string,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  iconBg: PropTypes.string,
  icon: PropTypes.string,
  textColor: PropTypes.string,
  custom: PropTypes.number,
};

const PlansSection = () => {
  
  return (
    <section id="plans" className="px-4 py-12 mt-5">
      <div className="container mx-auto">
        <motion.div
          className="max-w-[36rem]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-6">
            Trending Plans
          </span>

          <h2 className="h8 text-black">Popular Solar Plans for Your Home or Business</h2>

          <p className="text-ash text-[18px] my-4 leading-relaxed">
            Explore a few of our most selected plans. Want more? Visit the full plans page for all available packages.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 place-items-center">
          {plans.map((plan, index) => (<div key={plan.slug} >
            <PlanCard2
              image={plan.image}
              title={plan.title}
              price={plan.price}
              slug={plan.slug}
              label={plan.priceLabel}
              features={plan.features}
              ctaText={`Get ${plan.title}`}
              custom={index}
            />

            {/*<PlanCard
              key={plan.slug}
              custom={index}
              title={plan.title}
              price={plan.price}
              priceLabel={plan.priceLabel}
              features={plan.features}
              slug={plan.slug}
              icon={plan.icon}
              bgColor={plan.bgColor}
              textColor="text-ash"
            />*/}
          </div>))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/plans" className="text-ash underline font-medium text-lg hover:text-black transition-all">
            View All Plans →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
