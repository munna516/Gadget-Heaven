import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';
import { CartProvider } from "../Utilities/CartContext";
import { WishProvider } from "../Utilities/WishContext";

const MainLayout = () => {
    return (
        <>
            <CartProvider>
                <WishProvider>
                    <Navbar></Navbar>
                    <div className="min-h-[calc(100vh-392px)] w-11/12 mx-auto">
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                    <ToastContainer />
                </WishProvider>
            </CartProvider>


        </>
    );
};

export default MainLayout;