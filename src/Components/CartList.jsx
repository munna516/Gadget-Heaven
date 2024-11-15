import React, { useEffect, useState } from 'react';
import { HiOutlineAdjustments } from "react-icons/hi";
import { getStoreCartList } from '../Utilities/AddToDb';
import { json, useLoaderData, useNavigate } from 'react-router-dom';
import CartAndWishlist from '../Components/CartAndWishlist';
import { MdVerified } from "react-icons/md";
import { useCart } from '../Utilities/CartContext';

const CartList = () => {
    const { addToCart} = useCart();
    const navigate = useNavigate()
    const [isDisable, setDisable] = useState(true)
    const [newPrice, setNewPrice] = useState(0)
    const data = useLoaderData()
    let storedCartId = getStoreCartList()
    const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
    const [store, setStore] = useState(storedInCart)
    const totalPrice = storedInCart.reduce((accumulator, item) => accumulator + item.price, 0);

    useEffect(() => {
        storedCartId = getStoreCartList()
        storedCartId.length == 0 ? setDisable(true) : setDisable(false)
    }, [storedCartId])

    const handleCart = () => {
        const storedCartId = getStoreCartList()
        const storedInCart = data.filter((items) => storedCartId.includes(items.product_id))
        setStore(storedInCart)
        addToCart('deleteOne')
    }

    const handleSortByPrice = () => {

        const storedCartId = getStoreCartList()
        const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
        const sortedByPrice = [...storedInCart].sort((a, b) => b.price - a.price)
        setStore(sortedByPrice)

    }
    const handleDelete = (id) => {
        const storedCartId = getStoreCartList()
        const storedInCart = storedCartId.filter(item => item !== id);
        localStorage.setItem('cart-list', JSON.stringify(storedInCart))
        handleCart()
    }
    const deleteCart = () => {
        localStorage.setItem('cart-list', JSON.stringify([]))
        setNewPrice(totalPrice)
        setStore([])
        addToCart('zero')
    }
    const navigateHome = () => {
        navigate('/')
    }
    return (
        <div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex  flex-col items-center">
                    <h3 className="font-bold text-7xl text-green-400"><MdVerified /></h3>
                    <p className="py-4 text-4xl font-bold">Payment Successfull</p>
                    <p className='text-xl text-gray-400'>Thanks For purchasing.</p>
                    <p className='text-xl text-gray-400'>Total : ${newPrice}</p>
                    <div className="modal-action text-center">
                        <form method="dialog">
                            <button className="btn border-[#9538E2] hover:bg-[#9538E2] hover:text-white" onClick={() => navigateHome()}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className='md:flex justify-between items-center text-center mt-10 px-5'>
                <h1 className='text-2xl font-bold'>Cart</h1>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl font-bold'>Total Cost: ${totalPrice}</h1>
                    <button onClick={() => handleSortByPrice()} className="btn border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white">Sort By Price <HiOutlineAdjustments /></button>

                    <button onClick={() => { document.getElementById('my_modal_1').showModal(); deleteCart() }} className="btn border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white" disabled={isDisable}>Purchase</button>
                </div>
            </div>

            <div className='mt-10 mb-20 space-y-5 border-2 rounded-lg p-3 min-h-[100px] border-[#9538E2]'>
                {
                    store.map(product => <CartAndWishlist key={product.product_id} product={product} handleDelete={handleDelete}></CartAndWishlist>)

                }
            </div>
        </div>
    );
};

export default CartList;