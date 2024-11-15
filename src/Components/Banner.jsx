import { Link, useLocation } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
import ReusableBanner from './ReusableBanner';
const Banner = () => {
    const location = useLocation()
    return (
        <>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-64  rounded-bl-xl rounded-br-xl`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>
                    <Link to='/dashboard' className="btn hover:bg-gray-300">Shop Now</Link>
                </div>


                <div className='relative flex justify-center mt-10'>
                    <img className='absolute rounded-lg w-2/3 h-[500px] border-2 border-gray-300 p-2 ' src={bannerImg} alt="" />
                </div>


            </div>
        </>
    );
};

export default Banner;