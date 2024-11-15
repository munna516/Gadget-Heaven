import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
const Product = ({ product, length }) => {
    const { product_title, product_image, price } = product
    return (
        <>
            {
                (length > 0) ?
                    <div className="card card-compact bg-base-100 border-2 border-gray-200  p-3 transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                        <figure>
                            <img
                                className='w-full h-[250px] rounded-lg'
                                src={product_image}
                                alt={product_title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_title}</h2>
                            <p className='text-xl text-gray-500'>Price : ${price}</p>
                            <div className="card-actions justify-start mt-2">
                                <Link to={`/details/${product_title}`} className="text-lg hover:bg-[#9538E2] hover:text-white border-2 border-[#9538E2] px-4 py-1 rounded-full">Details</Link>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <h1 className='text-4xl font-bold h-full flex justify-center text-red-400'>!!No Item Found</h1>
                    </div>
            }

        </>

    );
};
Product.propTypes = {
    product: PropTypes.object
}
export default Product;