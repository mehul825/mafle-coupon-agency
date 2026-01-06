import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard'; // You might want to wrap this in a ProtectedRoute component

// Placeholder pages for now
const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
    <h1 className="text-4xl font-bold">{title} Page Coming Soon</h1>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<Placeholder title="About" />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/case-studies" element={<Placeholder title="Case Studies" />} />
                <Route path="/pricing" element={<Placeholder title="Pricing" />} />
                <Route path="/blog" element={<Placeholder title="Blog" />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
