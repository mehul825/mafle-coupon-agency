import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Initialize state from localStorage or system preference
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // Apply theme on mount and change
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 relative">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/assets/mafle-logo.png" alt="Mafle Logo" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Center: Desktop Menu - Absolutely Centered */}
                    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium text-[15px]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                        </button>
                        <Link
                            to="/login"
                            className="bg-primary hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 text-sm"
                        >
                            Partner Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Right aligned on mobile */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                            {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary active:text-primary hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-800 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 bg-primary hover:bg-red-600 active:bg-red-700 active:scale-95 text-white px-5 py-3 rounded-xl font-medium transition-transform duration-200"
                            >
                                Partner Login
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
