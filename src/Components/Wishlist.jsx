import React, { useState } from 'react';
import { getStoreWishList } from '../Utilities/AddToDb';
import { useLoaderData } from 'react-router-dom';
import CartAndWishlist from './CartAndWishlist';
import { useWish } from '../Utilities/WishContext';

const Wishlist = () => {
    const {addToWish} = useWish()
    const data = useLoaderData()
    const storedWishId = getStoreWishList()
    const storedInWish = data.filter(items => storedWishId.includes(items.product_id))
    const [store, setStore] = useState(storedInWish)

    const handleWish = () => {
        const storedWishId = getStoreWishList()
        console.log(storedWishId);
        const storedInWish = data.filter((items) => storedWishId.includes(items.product_id))
        console.log(storedInWish);
        setStore(storedInWish)
        addToWish('deleteOne')
    }
    const handleDelete = (id) => {
        const storedWishId = getStoreWishList()
        console.log(storedWishId);
        const storedInWish = storedWishId.filter(item => item !== id);
        localStorage.setItem('wish-list', JSON.stringify(storedInWish))
        console.log(storedInWish);
        handleWish()
    }
    return (
        <>
            <div className='flex justify-between items-center mt-10 '>
                <h1 className='text-2xl font-bold px-5'>Wishlist</h1>
            </div>
            <div className='mt-10 mb-20 space-y-5 border-2 min-h-[100px] border-[#9538E2] rounded-lg p-3'>
                {
                    store.map(product => <CartAndWishlist key={product.product_id} product={product} handleDelete={handleDelete}></CartAndWishlist>)
                }
            </div>
        </>
    );
};

export default Wishlist;