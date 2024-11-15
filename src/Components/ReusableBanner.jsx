import React from 'react';

const ReusableBanner = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className="font-bold text-3xl w-1/2 mx-auto">{title}</h1>
            <p className="w-1/2 mx-auto mt-5">{subtitle}</p>
        </div>
    );
};

export default ReusableBanner;