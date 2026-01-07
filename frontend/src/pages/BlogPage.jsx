import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const BlogPost = ({ title, excerpt, date, author, image, category }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
        <div className="h-56 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary transition-colors cursor-pointer">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {excerpt}
            </p>
            <div className="mt-auto flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0 mr-3 overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${author}&background=random`} alt={author} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{author}</span>
            </div>
        </div>
    </motion.div>
);

const BlogPage = () => {
    const posts = [
        {
            title: "The Future of Digital Coupons in 2025",
            excerpt: "As technology evolves, so do saving habits. Explore how AI and hyper-personalization are reshaping the coupon landscape for the next decade.",
            date: "Jan 5, 2025",
            author: "Sarah Jenkins",
            category: "Trends",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Gamification: The Secret to User Engagement",
            excerpt: "Why simple discount codes are no longer enough. Learn how gamifying the savings experience can triple your customer retention rates.",
            date: "Dec 28, 2024",
            author: "Mike Ross",
            category: "Strategy",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Maximizing Holiday Sales with Flash Sales",
            excerpt: "A comprehensive guide to timing your coupon drops during peak shopping seasons to ensure maximum conversion without devaluing your brand.",
            date: "Dec 15, 2024",
            author: "Elena Fisher",
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Tracking ROI: Metrics That Actually Matter",
            excerpt: "Stop looking at vanity metrics. Here are the 5 KPIs you should be tracking to measure the true success of your affiliate campaigns.",
            date: "Dec 10, 2024",
            author: "David Kim",
            category: "Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Psychology Behind Discounting",
            excerpt: "Understanding how the human brain perceives value can help you craft offers that are irresistible. We dive deep into behavioral economics.",
            date: "Nov 22, 2024",
            author: "Dr. Emily Chen",
            category: "Psychology",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Mobile-First Couponing",
            excerpt: "With 80% of coupons redeemed on mobile devices, ensuring your distribution platform is mobile-optimized is no longer optional.",
            date: "Nov 15, 2024",
            author: "James Wilson",
            category: "Tech",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog - Mafle Agency</title>
                <meta name="description" content="Insights, trends, and strategies from the world of digital advertising and coupon marketing." />
            </Helmet>

            <div className="bg-white dark:bg-gray-900 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                            Latest <span className="text-primary">Insights</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
                            Expert advice on how to scale your brand with smart discounts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            Load More Articles
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BlogPage;
