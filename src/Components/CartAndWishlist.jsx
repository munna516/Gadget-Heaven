import { MdDeleteForever } from "react-icons/md";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartAndWishlist = ({ product, handleDelete }) => {
    const { product_image, product_title, description, price, product_id } = product

    const deleteAlert = () => toast.error('Item removed', {
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

    return (
        <>
            <div className="border-2 border-gray-300 flex justify-between items-center p-5  rounded-2xl">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="h-[120px] w-[150px] rounded-xl" src={product_image} alt="" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="text-gray-400">{description}</p>
                        <p className="font-semibold">Price: ${price}</p>
                    </div>
                </div>
                <div className="text-2xl text-red-500 ">
                    <span onClick={() => { deleteAlert(); handleDelete(product_id) }} className="hover:cursor-pointer"><MdDeleteForever /></span>

                </div>
            </div>

        </>
    );
};

export default CartAndWishlist;