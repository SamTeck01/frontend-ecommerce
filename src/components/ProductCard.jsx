import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export const ProductCard = ({ image, title, price, custom }) => {

  return (
    <motion.div
      className={`rounded-xl bg-white shadow-sm hover:shadow-md overflow-hidden md:w-[220px] min-w-[150px] mb-2 text-left`}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      custom={custom}
    >
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-contain hover:scale-105"/>

      {/* Details */}
      <div className="p-1 ps-2">
        <h3 className="text-[14px] font-medium text-black">{title}</h3>
        <p className="text-[14px] font-medium text-ash mt-1">{price}</p>
      </div>
    </motion.div>
  );
};
ProductCard.propTypes = {
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