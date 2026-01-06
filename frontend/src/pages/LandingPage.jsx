import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Partners from '../components/home/Partners';
import { Helmet } from 'react-helmet-async';

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Mafle - Advertising & Coupon Distribution</title>
                <meta name="description" content="Reach 500M+ active shoppers through targeted discounts and vouchers." />
            </Helmet>
            <div className="min-h-screen">
                <Hero />
                <Features />
                <Partners />
            </div>
        </>
    );
};

export default LandingPage;
