import { useParams, Link } from 'react-router-dom';
import productCategories from '../assets/product_categories';

export default function ProductCategoryPage() {
  const { categoryId } = useParams();
  const category = productCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold text-gray-800">Category Not Found</h2>
      </div>
    );
  }

  // Parse "₦150,000" → 150000
  const parsePrice = price => parseInt(price.replace(/[^\d]/g, ''), 10);
  const startingPrice = `₦${Math.min(...category.products.map(p => parsePrice(p.price))).toLocaleString()}`;

  return (
    <section className="px-4 py-12">
      <div className="container mx-auto max-w-4xl text-center">
        <img src={category.image} alt={category.title} className="w-full rounded-lg mb-6" />
        <h1 className="text-3xl font-bold text-black mb-2">{category.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{category.description}</p>
        <p className="text-gold2 text-xl font-semibold mb-4">Starting from {startingPrice}</p>
        <p className="text-gray-700 mb-10">Total Products: {category.products.length}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.products.map(product => (
            <div key={product.id} className="border rounded-xl shadow-lg p-4 text-left">
              <Link to={`/products/${category.id}/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-green-700 font-semibold">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
