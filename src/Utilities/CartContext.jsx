import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        if (item == 'zero')
            setCartItems([])
        else if (item == 'deleteOne') {
            const deleteOne = [...cartItems]
            deleteOne.pop()
            setCartItems(deleteOne)
        }
        else
            setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);