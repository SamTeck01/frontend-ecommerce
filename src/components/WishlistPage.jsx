import { useWishlist } from "./WishlistContext";
import plans from "../assets/all_plans";
import { HashLink } from "react-router-hash-link";

export default function WishlistPage (){

  const {wishlist} = useWishlist();

  const wishlistedPlans = plans.filter(plan => wishlist.includes(plan.slug));

  if (wishlistedPlans.length === 0) {
    return (
      <div className="px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
        <HashLink smooth to="/plans" className="text-gold2 font-medium hover:underline">
          Browse Plans
        </HashLink>
      </div>
    );
  };
  return(
    <section className="px-4 py-24">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedPlans.map(plan => (
            <div key={plan.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={plan.image} alt={plan.title} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">{plan.title}</h2>
                <p className="text-gold2 font-bold">{plan.price}</p>
                <HashLink smooth 
                  to={`/plans/${plan.slug}`} 
                  className="inline-block mt-3 text-ash hover:text-gold2 text-sm"
                >
                  View Details
                </HashLink>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
};