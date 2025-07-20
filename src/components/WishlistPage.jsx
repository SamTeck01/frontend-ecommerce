import { useWishlist } from "./WishlistContext";
import plans from "../assets/all_plans";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
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
  }

  return (
    <section className="px-4 py-24">
      <div className="container mx-auto bg-white p-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">
          Wishlist <span>({wishlistedPlans.length})</span>
        </h1>

        <div className="space-y-4">
          {wishlistedPlans.map(plan => (
            <div key={plan.slug} className="flex justify-between  border border-ash/20 rounded-[5px] p-4 shadow-sm">
              <div className="flex flex-row">
                <img src={plan.image} alt={plan.title} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded" />

                <div className="ml-4 flex flex-col justify-between ">
                  <h2 className="text-[16px] font-medium text-black">{plan.title}</h2>
                  <p className="text-gold2 font-bold text-xl">{plan.price}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-end items-center gap-2">
                <button
                  onClick={() => toggleWishlist(plan.slug)}
                  className="text-gold2 text-base hover:bg-gold2/25 rounded px-4 py-1.5 transition h-fit"
                >
                  Remove
                </button>
                <Link 
                  to={`/plans/${plan.slug}`}
                  className="bg-gold2 text-white text-sm px-4 py-1.5 rounded hover:bg-gold2/80 transition shadow-md h-fit"
                >
                  View Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flexCenter mt-5">
        <HashLink smooth to="/plans" className="text-gold2 font-medium hover:underline ">
          Browse Plans
        </HashLink>
      </div>
    </section>
  );
}
