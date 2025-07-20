import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from './WishlistContext';

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ image, title, price, categoryId, productId, custom, onToast }) => {
  const { productWishlist, toggleProductWishlist } = useWishlist();
  const isWishlisted = productWishlist.includes(productId);

  return (
    <motion.div
      className="md:w-[220px] min-w-[150px] mb-2"
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      custom={custom}
    >
      <Link
        to={`/products/${categoryId}/${productId}`}
        className="rounded-xl bg-white shadow-sm group hover:shadow-md overflow-hidden block"
      >
        {/* Image */}
        <div className="bg-white relative">
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleProductWishlist(productId);
              onToast(`${isWishlisted ? 'Removed from Wishlist' : 'Plan Successfully Wishlisted'}`);
            }}
            className="absolute bottom-2 right-2 z-10"
          >
            {isWishlisted ? (
              <Heart size={20} fill="#e49900" stroke="#e49900" />
            ) : (
              <Heart size={20} className="text-gold2" />
            )}
          </button>
        </div>

        {/* Details */}
        <div className="p-1 ps-2">
          <h3 className="text-[14px] font-medium text-black">{title}</h3>
          <p className="text-[14px] font-medium text-ash mt-1">{price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,  // ✅ new
  productId: PropTypes.string.isRequired,   // ✅ new
  custom: PropTypes.number.isRequired
};
