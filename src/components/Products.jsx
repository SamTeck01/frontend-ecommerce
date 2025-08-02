import { motion } from "framer-motion";
import CardComponent from './CardComponent.jsx';
import IconButton from '@mui/material/IconButton'
//import productCategories from "../assets/product_categories.js";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext.jsx"; // Import ProductsContext

export default function Products() {
  const { products } = useContext(ProductsContext); // Access products from context
  const getStartingPrice = (productsString) => {
    try {
      const products = JSON.parse(productsString.replace(/[\r\n]+/g, ''));
      const prices = products.map(p => {
        const raw = p.price.replace(/[₦,]/g, '');
        return parseFloat(raw);
      });
      const minPrice = Math.min(...prices);
      return `₦${minPrice.toLocaleString()}`;
    } catch (error) {
      console.error('Error parsing products:', error);
      return null;
    }
  };

  return (
    <motion.section
      id='products'
      className="px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className='container mx-auto'>
        <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-gold2/30 rounded-2xl text-[13px] uppercase mb-10 ">
          Our Products
        </span>   
        <h2 className="h8 text-black w-full md:w-[50%] lg:w-[50%]">We offer a range of products to choose from</h2>

        <div className='flexEnd'>
          <IconButton aria-label="" className='h-[35px] !rounded-3xl font-semibold'>
            <p className='text-black text-sm ms-1 '>Browse all products</p>
            <i className='bx text-black bx-arrow-right-stroke'></i> 
          </IconButton>
        </div>  
        
        {/*Products section with animation*/}
        <motion.div
          className='flexCenter'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.map((category) => {
              const parsedProducts = JSON.parse(category.products || '[]'); // Parse products if they are stored as a JSON string
              const startingPrice = getStartingPrice(category.products);
              return(
              <CardComponent
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
                to={`/products/${category.slug}`}
                productCount={parsedProducts.length}
                startingPrice={startingPrice}
              />
            )})}
          </div>

        </motion.div>
      </div>
    </motion.section>
  )
}