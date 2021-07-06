import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [item, setItem] = useState([]);

    const removeItem = (itemId) => {

    }

    const clear = () => {
        setItem([]);
    }

    const isInCart = () => {

    }



    return (
        <CartContext.Provider value={{ item, removeItem, clear }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;