// src/pages/ProductPage.jsx
import { useParams, Link } from 'react-router-dom';
import productCategories from '../assets/product_categories';

export default function ProductPage() {
  const { categoryId, productId } = useParams();

  const category = productCategories.find(c => c.id === categoryId);
  const slug = category.slug;
  if (!category) return <h2 className="text-center py-24">Category not found</h2>;

  const product = category.products.find(p => p.id === productId);
  if (!product) return <h2 className="text-center py-24">Product not found</h2>;

  return (
    <section className="px-4 py-12">
      <div className="container mx-auto max-w-3xl text-center">
        <Link to={`/categories/${slug}`} className="text-sm text-gray-500 hover:text-gold2 mb-4 inline-block">
          ← Back to {category.title}
        </Link>

        <img src={product.image} alt={product.name} className="w-full rounded-lg mb-6" />

        <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-4">{product.description}</p>
        <p className="text-green-700 text-xl font-semibold">{product.price}</p>

        {/* Sections (General, Specs, What’s in the box...) */}
        {product.sections?.map((section, index) => (
          <div key={index} className="mt-8 text-left">
            <h2 className="text-xl font-bold text-black mb-2">{section.title}</h2>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
