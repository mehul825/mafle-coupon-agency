import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-6 block">
                            Mafle
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Helping brands reach 500M+ active shoppers through targeted discounts and vouchers.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Coupon Distribution</Link></li>
                            <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Social Media Ads</Link></li>
                            <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Analytics</Link></li>
                            <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Brand Partnerships</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">About Us</Link></li>
                            <li><Link to="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-primary">Case Studies</Link></li>
                            <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary">Blog</Link></li>
                            <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Email: hello@mafle.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Mumbai, India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Mafle. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="text-gray-500 text-sm hover:text-primary">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 text-sm hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
