import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Partners = () => {
    // Partner configuration with image paths
    const partners = [
        { name: 'Google Pay', image: '/partners/google-pay.png' },
        { name: 'PhonePe', image: '/partners/phonepe.png' },
        { name: 'Paytm', image: '/partners/paytm.png' },
        { name: 'Zomato', image: '/partners/zomato.png' },
        { name: 'Flipkart', image: '/partners/flipkart.png' },
    ];

    return (
        <section className="py-20 bg-red-50 dark:bg-gray-800/50">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">

                {/* Text Content */}
                <div className="md:w-1/3 mb-10 md:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 uppercase">
                        Partner with Mafle
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-sm">
                        Anything related to Coupons & Vouchers. We are here to help.
                    </p>
                    <Link to="/contact" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded shadow-md hover:bg-red-600 active:scale-95 active:bg-red-700 transition-all duration-200 uppercase">
                        Contact
                    </Link>
                </div>

                {/* Logos */}
                <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 items-center">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer"
                        >
                            <img
                                src={partner.image}
                                alt={`${partner.name} Logo`}
                                className="h-10 md:h-12 w-auto grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-300 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
