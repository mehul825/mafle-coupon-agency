import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingPage = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$499',
            period: '/month',
            description: 'Perfect for small businesses starting their digital journey.',
            features: [
                'Access to 50k Shoppers',
                '2 Active Campaigns',
                'Basic Analytics',
                'Email Support',
                'Standard Distribution Network'
            ],
            highlight: false
        },
        {
            name: 'Growth',
            price: '$1,499',
            period: '/month',
            description: 'Ideal for growing brands looking to scale rapidly.',
            features: [
                'Access to 1M+ Shoppers',
                '10 Active Campaigns',
                'Advanced Analytics & Insights',
                'Priority 24/7 Support',
                'Premium Distribution Partners',
                'A/B Testing'
            ],
            highlight: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'Tailored solutions for large-scale global organizations.',
            features: [
                'Unlimited Shopper Reach',
                'Unlimited Campaigns',
                'Dedicated Account Manager',
                'Custom API Integration',
                'White-label Solutions',
                'Quarterly Strategy Reviews'
            ],
            highlight: false
        }
    ];

    return (
        <>
            <Helmet>
                <title>Pricing - Mafle Agency</title>
                <meta name="description" content="Transparent pricing plans for brands of all sizes. Choose the plan that fits your growth goals." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 min-h-screen pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            Simple, Transparent <span className="text-primary">Pricing</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                            No hidden fees. Cancel anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className={`relative rounded-3xl p-8 flex flex-col ${plan.highlight
                                        ? 'bg-gray-900 text-white shadow-2xl scale-105 border-2 border-primary'
                                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-xl'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                        POPULAR
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                                    {plan.description}
                                </p>

                                <div className="mb-8">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                    <span className={`ml-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <FaCheck className={`flex-shrink-0 w-5 h-5 mt-0.5 ${plan.highlight ? 'text-primary' : 'text-green-500'}`} />
                                            <span className={`ml-3 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                        ? 'bg-primary hover:bg-red-600 text-white shadow-lg hover:shadow-primary/50'
                                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                                    }`}>
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ or Trust Section could go here */}
                    <div className="mt-20 text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Need a custom plan? <a href="/contact" className="text-primary font-semibold hover:underline">Contact our sales team</a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PricingPage;
