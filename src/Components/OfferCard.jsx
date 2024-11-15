import { Link } from "react-router-dom";


const OfferCard = ({ product }) => {
    const { product_title, product_image, price, save } = product
     const newPrice = parseFloat(price) - (parseFloat(price) * parseFloat(save/parseInt(100)))
    return (
        <>
            <div className="card card-compact bg-base-100 border-2 border-gray-200  p-3 transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure>
                    <img
                        className='w-full h-[250px] rounded-lg'
                        src={product_image}

                        alt='' />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title flex justify-center  text-center">{product_title} <span className="text-red-500">({save}%)</span></h2>
                    <p className='text-xl text-gray-500 font-bold'>Price : <strike className="text-red-400" > ${price}</strike> <span className="text-2xl text-black ml-2">${newPrice}</span></p>
                    <div className="card-actions justify-center mt-2">
                        <button  className="text-lg hover:bg-[#9538E2] hover:text-white border-2 border-[#9538E2] px-4 py-1 rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>



        </>

    );
};

export default OfferCard;