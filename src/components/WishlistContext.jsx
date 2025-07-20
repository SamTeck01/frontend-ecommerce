/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [productWishlist, setProductWishlist] = useState([]);
  const [planWishlist, setPlanWishlist] = useState([]);

  // Load wishlists from localStorage on mount
  useEffect(() => {
    const storedProductWishlist = JSON.parse(localStorage.getItem('productWishlist')) || [];
    const storedPlanWishlist = JSON.parse(localStorage.getItem('planWishlist')) || [];
    setProductWishlist(storedProductWishlist);
    setPlanWishlist(storedPlanWishlist);
  }, []);

  const toggleProductWishlist = (productId) => {
    setProductWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((item) => item !== productId)
        : [...prevWishlist, productId];
      localStorage.setItem('productWishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const togglePlanWishlist = (slug) => {
    setPlanWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(slug)
        ? prevWishlist.filter((item) => item !== slug)
        : [...prevWishlist, slug];
      localStorage.setItem('planWishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ productWishlist, planWishlist, toggleProductWishlist, togglePlanWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
