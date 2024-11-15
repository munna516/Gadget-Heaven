import { useState } from 'react';
import ReusableBanner from '../Components/ReusableBanner';
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const [cartBtn, setCartBtn] = useState(true)

    const handleCart = (btns) => {
        if (btns == 'cart') {
            setCartBtn(true)
        }
        else {
            setCartBtn(false)
        }
    }
    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-14   rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>
                    <div className=' gap-5'>

                        <NavLink to='/dashboard' onClick={() => handleCart("cart")} ><button className={`btn text-2xl  px-6 py-1 rounded-full text-[#9538E2] border-none ${cartBtn ? 'bg-blue-300 text-white' : ''}`}>Cartlist</button> </NavLink>

                        <NavLink onClick={() => handleCart('wish')} to='/dashboard/wishlist' ><button className={`btn text-2xl  px-6 py-1 rounded-full text-[#9538E2] border-none ${cartBtn ? '' : 'bg-blue-300 text-white'}`}>Wishlist</button></NavLink>
                    </div>
                </div>
            </div >

            <Outlet></Outlet>



        </>
    );
};

export default Dashboard;