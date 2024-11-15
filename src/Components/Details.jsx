import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import ReusableBanner from './ReusableBanner';
import { addToStoreCartList, addToStoreWishList } from '../Utilities/AddToDb';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useCart } from '../Utilities/CartContext';
import { useWish } from '../Utilities/WishContext';

const Details = () => {
    const { addToCart } = useCart();
    const { addToWish } = useWish()
    const [isDisabled, setIsDisabled] = useState(false);
    const { title } = useParams()
    const data = useLoaderData()
    const detailsProduct = data.find(product => product?.product_title == title)
    const { product_id, product_image, product_title, price, rating, specification, description } = detailsProduct

    const notify1 = () => toast.success('Item added in Cart List', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const notify3 = () => toast.success('Item added in Wish List', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const notify2 = () => toast.warn('Already added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const handleCart = (id) => {
        const isTrue = addToStoreCartList(id)
        if (isTrue) {
            notify2()
        }
        else {
            notify1()
            addToCart(id)
        }
    }
    const handleWish = (id) => {
        const isTrue = addToStoreWishList(id)
        if (isTrue) {

        }
        else {
            notify3()
            addToWish(id)
            setIsDisabled(true);
        }

    }
    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Product Details</title>
            </Helmet>
            <div className={`bg-[#9538E2] mb-96 text-center text-white pt-10 pb-64  rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>

                <ReusableBanner title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>

                <div className='relative flex justify-center mt-10 mb-24 text-black '>
                    <div className='absolute rounded-lg w-2/3 h-[550px] border-2 border-gray-300 p-4 bg-white mb-96 lg:flex gap-2 lg:gap-8 items-center'>
                        <div className='w-1/3 mx-auto lg:w-1/2'>
                            <img className='lg:h-[470px]  rounded-lg' src={product_image} alt="" />
                        </div>
                        <div className='lg:w-1/2 text-left space-y-1 lg:space-y-2'>
                            <h1 className='lg:text-2xl font-bold'>{product_title}</h1>
                            <p className='lg:text-2xl'>Price : ${price}</p>
                            <button className='border-2 border-green-400 px-3 py-1 rounded-full bg-green-200'>In Stock</button>
                            <br />

                            <p className='text-gray-400'>{description}</p>
                            <h1 className='font-bold lg:text-lg'>Specification: </h1>
                            {
                                specification.map((item, index) => <p key={index} className='text-gray-400'>{index + 1}. {item}</p>)
                            }
                            <h1 className='font-bold lg:text-lg'>Ratings : </h1>
                            <div className='flex items-center gap-6'>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1 className='lg:text-xl font-bold'>{rating}</h1>
                            </div>

                            <div className='flex items-center gap-16 '>
                                <button onClick={() => handleCart(product_id)} className=' btn flex items-center border-2 border-[#9538E2] gap-3 lg:text-xl  lg:px-4 lg:py-3 rounded-full hover:bg-[#9538E2] hover:text-white pb-1'>Add to cart <FaCartPlus /></button>
                                <button onClick={() => handleWish(product_id)} className='btn   rounded-full  lg:text-4xl' disabled={isDisabled}><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;