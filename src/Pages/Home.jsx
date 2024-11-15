import React from 'react';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>

            <Outlet></Outlet>
        </>
    );
};

export default Home;