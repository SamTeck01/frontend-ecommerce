/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import all_products from "../assets/all_products.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {

    let cart = {};

    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }

    return cart;
}

export default function ShopContextProvider ({children}){
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId] + 1 }));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]:prev[itemId] - 1 }) )
    }
    const deleteCart = (itemId) => {
      setCartItems((prev)=> ({...prev, [itemId]:prev[itemId]=0 }) )
    }
    
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, deleteCart };

    return (
        <ShopContext.Provider value={contextValue} >
            {children}
        </ShopContext.Provider>
    )
}
