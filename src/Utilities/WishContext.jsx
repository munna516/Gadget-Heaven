import { useContext, createContext, useState } from "react";
const WishContext = createContext()

export const WishProvider = ({ children }) => {
    const [wishItems, setWishItems] = useState([]);

    const addToWish = (item) => {
        if (item == 'zero')
            setWishItems([])
        else if (item == 'deleteOne') {
            const deleteOne = [...wishItems]
            deleteOne.pop()
            setWishItems(deleteOne)
        }
        else
            setWishItems((prevItems) => [...prevItems, item]);
    };

    return (
        <WishContext.Provider value={{ wishItems, addToWish }}>
            {children}
        </WishContext.Provider>
    );
};

export const useWish = () => useContext(WishContext);