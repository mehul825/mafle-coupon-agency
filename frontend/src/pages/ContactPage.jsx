import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await axios.post('http://localhost:5000/api/contacts', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
            <Helmet>
                <title>Contact Us - Mafle</title>
                <meta name="description" content="Get in touch with us effectively." />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <FaEnvelope className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-300">hello@mafle.com</p>
                                    <p className="text-gray-600 dark:text-gray-300">support@mafle.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FaPhone className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                    <p className="text-gray-600 dark:text-gray-300">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <FaMapMarkerAlt className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        123 Business Park, Tech Hub,<br />
                                        Andheri East, Mumbai - 400069
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-red-600 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center font-medium">Message sent successfully! We'll get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-center font-medium">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
