import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className="md:w-1/2 mb-12 md:mb-0 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 text-primary font-semibold text-sm mb-6">
                            Startup Agency Layout
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                            REACH 500M+ <br />
                            ACTIVE <span className="text-primary">SHOPPERS</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                            Through Targeted Discounts & Vouchers. We help you acquire users and grow revenue without the hassle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all transform hover:-translate-y-1 text-center">
                                CONTACT US
                            </Link>
                            <Link to="/services" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-center">
                                LEARN MORE
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Placeholder for the illustration - Using a placeholder or potentially one of the uploaded images if accessible via URL in a real app, 
                           but here I will use a generated style or external placeholder if needed. 
                           Since I can't easily see the uploaded image path as a usable URL for the browser (unless I copy it), 
                           I'll simulate the isometric city view with a nice placeholder or code. 
                           For now, I'll use a placeholder image that looks professional. */}
                        <img
                            src="/assets/hero-illustration.png"
                            alt="Marketing Illustration"
                            className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-full blur-3xl -z-10 opacity-60"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
