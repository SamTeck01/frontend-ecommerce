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
    const [isVisible, setIsVisible] = useState(false);

    const handleClick =()=> {
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false)
        }, 3000);
    }
    
    const getTotalCartItems=()=>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    const getTotalCartAmount =()=> {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0 ) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];console.log(totalAmount)
            }
        }
        return totalAmount;
    }

    const contextValue = {isVisible, handleClick ,getTotalCartItems ,getTotalCartAmount ,all_products, cartItems, addToCart, removeFromCart, deleteCart };

    return (
        <ShopContext.Provider value={contextValue} >
            {children}
        </ShopContext.Provider>
    )
}
