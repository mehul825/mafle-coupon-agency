import { FaRupeeSign, FaUserPlus, FaUsers, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <FaRupeeSign className="text-white" />,
            text: "Generate more Revenue",
            color: "bg-red-400"
        },
        {
            icon: <FaUserPlus className="text-white" />,
            text: "Acquire more Users",
            color: "bg-red-400"
        },
        {
            icon: <FaUsers className="text-white" />,
            text: "No need to have a Team",
            color: "bg-red-400"
        },
        {
            icon: <FaThumbsUp className="text-white" />,
            text: "We handle Everything",
            color: "bg-red-400"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16 uppercase tracking-wide">
                    Coupon Distribution & Generation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Side: List */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-6 group"
                            >
                                <div className={`p-3 rounded-full ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                                    {feature.text}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Details */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <img src="/assets/target-illustration.png" alt="Target Audience" className="w-full max-w-md mx-auto drop-shadow-xl" />
                        </motion.div>

                        {[
                            {
                                title: "Distribute your Coupons & Vouchers",
                                desc: "To 500M Active & Internet First Shoppers."
                            },
                            {
                                title: "Flipkart, Gpay Zomato Scratch Cards",
                                desc: "We've partnered with 50+ Distributors & Brands."
                            },
                            {
                                title: "Coupon Generation & Management",
                                desc: "Our Tech makes it Simple, Fast & Secure."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <img src="/assets/team-illustration.png" alt="Team Support" className="w-full max-w-md mx-auto drop-shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
