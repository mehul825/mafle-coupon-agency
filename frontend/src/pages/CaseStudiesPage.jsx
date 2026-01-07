import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaUsers, FaDollarSign } from 'react-icons/fa';

const CaseStudyCard = ({ title, category, result, description, image, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
        <div className="h-48 overflow-hidden relative">
            <div className={`absolute inset-0 bg-${color}-600 opacity-20 z-10`} />
            <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 z-20">
                <span className={`bg-white dark:bg-gray-900 text-${color}-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                    {category}
                </span>
            </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>

            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-6">
                <div className="flex items-center text-gray-900 dark:text-white font-bold text-lg">
                    <FaChartLine className={`text-${color}-500 mr-2`} />
                    {result}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Improvement in Key Metric</div>
            </div>

            <button className={`w-full py-3 rounded-xl border border-${color}-500 text-${color}-500 font-semibold hover:bg-${color}-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center group`}>
                Read Case Study
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    </motion.div>
);

const CaseStudiesPage = () => {
    const cases = [
        {
            title: "Global Fashion Retailer",
            category: "Retail",
            result: "+215% ROI",
            description: "How we helped a leading fashion brand clear seasonal inventory through targeted flash-sale coupons delivered to high-intent shoppers.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "pink"
        },
        {
            title: "Tech Subscription App",
            category: "SaaS",
            result: "45% Conversion Rate",
            description: "Driving premium subscriptions for a productivity app using personalized discount codes for free-tier users.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "blue"
        },
        {
            title: "Organic Food Delivery",
            category: "E-Commerce",
            result: "3x Customer LTV",
            description: "Implementing a tiered loyalty coupon system that turned one-time buyers into weekly subscribers.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "green"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Case Studies - Mafle Agency</title>
                <meta name="description" content="See how Mafle has helped brands achieve massive growth through strategic coupon campaigns." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            Success <span className="text-primary">Stories</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                            Real results from real campaigns. See what's possible with Mafle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {cases.map((study, index) => (
                            <CaseStudyCard key={index} {...study} />
                        ))}
                    </div>

                    <div className="mt-20 bg-primary/10 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to write your success story?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of brands that are scaling their revenue with Mafle's intelligent coupon distribution network.
                        </p>
                        <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            Start Your Campaign
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CaseStudiesPage;
