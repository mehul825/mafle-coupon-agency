import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBullhorn, FaTicketAlt, FaChartLine, FaHandshake } from 'react-icons/fa';

const services = [
    {
        icon: <FaTicketAlt className="w-12 h-12 text-primary" />,
        title: 'Coupon Distribution',
        description: 'Distribute your coupons to our massive network of 500M+ active shoppers across various platforms.',
        features: ['Targeted Audience', 'Real-time Tracking', 'High Conversion Rates']
    },
    {
        icon: <FaBullhorn className="w-12 h-12 text-blue-500" />,
        title: 'Social Media Ads',
        description: 'Strategic social media campaigns to boost your brand visibility and drive engagement.',
        features: ['Facebook & Instagram', 'Influencer Marketing', 'Creative Design']
    },
    {
        icon: <FaChartLine className="w-12 h-12 text-green-500" />,
        title: 'Analytics & Reporting',
        description: 'Deep insights into your campaign performance to help you make data-driven decisions.',
        features: ['Campaign Metrics', 'User Demographics', 'ROI Analysis']
    },
    {
        icon: <FaHandshake className="w-12 h-12 text-purple-500" />,
        title: 'Brand Partnerships',
        description: 'Collaborate with top brands to create synergistic marketing campaigns.',
        features: ['Co-branding', 'Cross-promotions', 'Exclusive Deals']
    }
];

const ServicesPage = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Helmet>
                <title>Services - Mafle</title>
                <meta name="description" content="Explore our range of advertising and coupon distribution services." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We offer comprehensive solutions to help your business grow through effective advertising and coupon strategies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                        >
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-500 dark:text-gray-400">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
