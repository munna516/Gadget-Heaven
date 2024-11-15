import React from 'react';
import { useLocation } from 'react-router-dom';
import ReusableBanner from '../Components/ReusableBanner';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    const location = useLocation()
    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-14   rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Statistics"} subtitle={"Unlock Insights with Real-Time Product Statistics: Analyze Trends, Track Performance, and Make Data-Driven Decisions for Your E-Commerce Success."}></ReusableBanner>
                </div>

            </div >
            <div className='my-10 h-[250px] flex justify-center items-center border-2 border-gray-300 rounded-xl text-red-400'>
                <h1 className='text-4xl font-bold'>Stactistics Comming Soon.....</h1>
            </div>
        </>
    );
};

export default Statistics;