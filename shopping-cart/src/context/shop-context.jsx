import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i<=PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if(cartItem[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItem[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateCartitemCount = (newAmount, itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: newAmount}));
    }

    const contextValue = {cartItem, addToCart, removeFromCart, updateCartitemCount, getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};
