import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Mafle Agency</title>
                <meta name="description" content="Learn about Mafle's mission to revolutionize advertising through targeted coupon distribution." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            About <span className="text-primary">Mafle</span>
                        </h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                            Transforming how brands connect with customers through smart, data-driven coupon distribution.
                        </p>
                    </motion.div>

                    {/* Mission & Vision Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaborating"
                                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                At Mafle, we believe that advertising shouldn't just be noise. It should be a value exchange. We bridge the gap between premium brands and smart shoppers by delivering targeted offers that people actually want.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Founded in 2024, we've rapidly grown from a small startup to a leading agency managing campaigns for top-tier retail and tech companies.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 mb-20 shadow-lg"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: 'Shoppers Reach', value: '500M+' },
                                { label: 'Partner Brands', value: '100+' },
                                { label: 'Coupons Redeemed', value: '50M+' },
                                { label: 'Countries', value: '12' },
                            ].map((stat, index) => (
                                <div key={index} className="p-4">
                                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Why Choose Us?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Data-Driven', desc: 'We utilize advanced analytics to ensure your offers reach the right audience at the right time.' },
                                { title: 'Transparent', desc: 'Real-time reporting and clear metrics. No hidden fees, no guessing games.' },
                                { title: 'Scalable', desc: 'Whether you are a startup or a global enterprise, our solutions grow with you.' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutPage;
