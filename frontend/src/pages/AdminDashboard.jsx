import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 pt-24">
            <Helmet>
                <title>Dashboard - Mafle Admin</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Total Coupons</h3>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">--</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Active Partners</h3>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">--</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Total Contacts</h3>
                    <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
                        {loading ? '...' : contacts.length}
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact Messages</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">Loading...</td>
                                </tr>
                            ) : contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No messages found.</td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact._id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(contact.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                            {contact.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {contact.email}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-md truncate">
                                            {contact.message}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
