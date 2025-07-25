import { useParams } from 'react-router-dom';
import productCategories from '../assets/product_categories';
import { ProductCard } from './ProductCard';

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

  return (
    <section className="px-4 py-24">
      <div className="container mx-auto text-center">
        {/*<img src={category.image} alt={category.title} className="w-full rounded-lg mb-6" />*/}
        <h1 className="text-3xl font-bold text-center mb-6">{category.title}</h1>
        <p className="text-center text-ash max-w-2xl mx-auto mb-12">{category.description}</p>
        <div className="md:flex md:flex-wrap  grid grid-cols-2 gap-6">
          {category.products.map((product, index) => (
            <div key={product.id}>
              <ProductCard
                image={product.image}
                title={product.name}
                price={product.price}
                categoryId={category.id}
                productId={product.id}
                custom={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}