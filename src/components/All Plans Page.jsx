import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {ShieldCheck, Share2, Heart} from 'lucide-react'; 
//import plans from '../assets/all_plans';
import { useState } from 'react';
import { useWishlist } from './WishlistContext';
import { useContext } from 'react';
import { PlansContext } from './PlansContext';


const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const PlanCard2 = ({ image, title, price, slug, features = [], priceLabel, ctaText, custom, onToast }) => {
  const { planWishlist, togglePlanWishlist } = useWishlist();
  const isWishlisted = planWishlist.includes(slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out this energy plan: ${title} for ${price}.`,
        url: window.location.href
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Share failed', error));
    } else {
      alert('Sharing not supported on this browser. Copy the link manually.');
    }
  };

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
          {priceLabel}
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

          <div className="flex items-center gap-3">
            <motion.span
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                togglePlanWishlist(slug);
                onToast(`${isWishlisted ? 'Removed from Wishlist' : 'Plan Successfully Wishlisted'}`);
              }}
              className="cursor-pointer"
            >
              {isWishlisted ? (
                <Heart size={20} fill='#e49900' stroke='#e49900' />
              ) : (
                <Heart size={20} className="text-gold2" />
              )}
            </motion.span>

            <Share2 size={20} className="text-gold2 cursor-pointer" onClick={handleShare}/>
                
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
  priceLabel: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  custom: PropTypes.number.isRequired,
  onToast: PropTypes.func.isRequired
}

const PlansPage = () => {
  const { plans } = useContext(PlansContext);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  // Ensure plans is defined and has data
  if (!plans || !plans.length) return <div>Loading plans...</div>;

  return (
    <section className="px-4 pt-24 ">
      {showToast && (
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed top-20 right-4 bg-green-50 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          {toastMessage}
          <HashLink smooth to="/wishlist" className="text-white underline ml-2">
            View Wishlist
          </HashLink>
        </motion.div>
      )}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">All Solar Plans</h1>
        <p className="text-center text-ash max-w-2xl mx-auto mb-12">
          Browse our full range of solar solutions. Tap into efficient and smart energy tailored for your home or business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
          {plans.map((plan, index) => {
            let parsedFeatures = [];
            try {
              // Replace curly braces with square brackets
              parsedFeatures = JSON.parse(plan.features.replace(/^{/, '[').replace(/}$/, ']'));
            } catch (err) {
              console.error('Error parsing features:', err);
            }
            return(<div key={plan.slug}>
              <PlanCard2 
                image={plan.image}
                title={plan.title}
                slug={plan.slug}
                price={plan.price}
                features={parsedFeatures}
                ctaText={`Get ${plan.title}`}
                custom={index}
                priceLabel={plan.priceLabel}
                onToast={triggerToast}
              />
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default PlansPage;
