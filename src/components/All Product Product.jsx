// src/pages/AllProductsPage.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import productCategories from '../assets/product_categories';
import { ProductCard } from '../components/ProductCard';
import { HashLink } from 'react-router-hash-link';

export default function AllProductsPage() {

    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    const triggerToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };
  // Flatten all products into one array and tag each with its category
  const allProducts = productCategories.flatMap(category =>
    category.products.map(product => ({
      ...product,
      categoryId: category.id,
    }))
  );

  return (
    <section className="px-4 py-24">
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
        <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>
        <p className="text-center text-ash max-w-2xl mx-auto mb-12">
          Explore every solar product across panels, inverters, batteries, and controllers — all in one place.
        </p>

        <div className="md:flex md:flex-wrap  grid grid-cols-2 gap-6">
          {allProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
              categoryId={product.categoryId}
              productId={product.id}
              custom={index}
              onToast={triggerToast}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
