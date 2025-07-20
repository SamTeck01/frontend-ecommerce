import { useWishlist } from "./WishlistContext";
import plans from "../assets/all_plans";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import productCategories from "../assets/product_categories";
import { useState } from "react";

export default function WishlistPage() {
  const { productWishlist, planWishlist, toggleProductWishlist, togglePlanWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState('plan');
  const wishlistedPlans = plans.filter(plan => planWishlist.includes(plan.slug));
  const allProducts = productCategories.flatMap(cat => cat.products);
  const wishlistedProducts = allProducts.filter(product => productWishlist.includes(product.id));

  const isEmpty = wishlistedPlans.length === 0 && wishlistedProducts.length === 0;

  return (
    <section className="px-4 py-24">
      <div className="container mx-auto bg-white p-3 rounded-lg shadow-md">
        <div className="flex gap-4 mb-8">
          <button
            className={`text-lg font-medium px-3 py-1 rounded transition ${activeTab === 'plan' ? 'bg-gold2 text-white' : 'bg-gray-100 text-black'}`}
            onClick={() => setActiveTab('plan')}
          >
            Plan Wishlist <span>({wishlistedPlans.length})</span>
          </button>
          <button
            className={`text-lg font-medium px-3 py-1 rounded transition ${activeTab === 'product' ? 'bg-gold2 text-white' : 'bg-gray-100 text-black'}`}
            onClick={() => setActiveTab('product')}
          >
            Product Wishlist <span>({wishlistedProducts.length})</span>
          </button>
        </div>

        {isEmpty ? (
          <div className="px-4 py-24 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
            <HashLink smooth to="/plans" className="text-gold2 font-medium hover:underline">
              Browse Plans
            </HashLink>
            <HashLink smooth to="/products" className="text-gold2 font-medium hover:underline ml-4">
              Browse Products
            </HashLink>
          </div>
        ) : (
          <div>
            {activeTab === 'plan' && (
              <div className="space-y-4">
                {wishlistedPlans.length === 0 ? (
                  <div className="text-center text-gray-500">No plans in wishlist.</div>
                ) : (
                  wishlistedPlans.map(plan => (
                    <div key={plan.slug} className="flex justify-between border border-ash/20 rounded-[5px] p-4 shadow-sm">
                      <div className="flex flex-row">
                        <img src={plan.image} alt={plan.title} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded" />
                        <div className="ml-4 flex flex-col justify-between ">
                          <h2 className="text-[13px] font-medium text-black">{plan.title}</h2>
                          <p className="text-gold2 font-medium text-lg">{plan.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-end items-center gap-2">
                        <button
                          onClick={() => togglePlanWishlist(plan.slug)}
                          className="text-gold2 text-base hover:bg-gold2/25 rounded px-4 py-1.5 transition h-fit"
                        >
                          Remove
                        </button>
                        <Link 
                          to={`/plans/${plan.slug}`}
                          className="bg-gold2 text-white text-sm px-4 py-1.5 rounded hover:bg-gold2/80 transition shadow-md h-fit"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
            {activeTab === 'product' && (
              <div className="space-y-4">
                {wishlistedProducts.length === 0 ? (
                  <div className="text-center text-gray-500">No products in wishlist.</div>
                ) : (
                  wishlistedProducts.map(product => (
                    <div key={product.id} className="flex justify-between border border-ash/20 rounded-[5px] p-4 shadow-sm">
                      <div className="flex flex-row">
                        <img src={product.image} alt={product.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded" />
                        <div className="ml-4 flex flex-col justify-between ">
                          <h2 className="text-[13px] font-medium text-black">{product.name}</h2>
                          <p className="text-gold2 font-medium text-lg">{product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-end items-center gap-2">
                        <button
                          onClick={() => toggleProductWishlist(product.id)}
                          className="text-gold2 text-base hover:bg-gold2/25 rounded px-4 py-1.5 transition h-fit"
                        >
                          Remove
                        </button>
                        <Link 
                          to={`/products/${product.id}`}
                          className="bg-gold2 text-white text-sm px-4 py-1.5 rounded hover:bg-gold2/80 transition shadow-md h-fit"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flexCenter mt-5">
        <HashLink smooth to="/plans" className="text-gold2 font-medium hover:underline ">
          Browse Plans
        </HashLink>
        <HashLink smooth to="/products" className="text-gold2 font-medium hover:underline ml-4">
          Browse Products
        </HashLink>
      </div>
    </section>
  );
}
