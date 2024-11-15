import { useLoaderData } from "react-router-dom";
import CountdownTimer from "../Components/CountdownTime";
import ReusableBanner from "../Components/ReusableBanner";
import OfferCard from "../Components/OfferCard";
import { Helmet } from "react-helmet";

const AllOffers = () => {
    const targetDate = new Date("November 31, 2024 23:59:59").getTime();
    const data = useLoaderData()

    return (
        <>
            <Helmet>
                <title>Gadget Heaven | Offers</title>
            </Helmet>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-10  rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Offer!! Offer!! Save Upto (25%)"} subtitle={"Exclusive Offer: Unlock amazing savings on our best products! Act now to enjoy incredible discounts and special perks, available for a limited time only. Don't wait!"}></ReusableBanner>
                </div>
            </div>

            <div className="flex justify-between px-4 mt-10 mb-10">
                <h1 className="text-2xl font-bold">Grab Your Offer</h1>
                <div className="text-2xl">
                    <CountdownTimer targetDate={targetDate}></CountdownTimer>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {
                    data.map((product) => <OfferCard key={product.product_id} product={product}></OfferCard>)
                }
            </div>
        </>
    );
};

export default AllOffers;