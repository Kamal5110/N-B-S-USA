import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';

const Sitemap = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | Nishav Solutions</title>
        <meta name="description" content="Navigate our website with ease using our sitemap. Find all pages and resources on Nishav Solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Sitemap</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Main Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Our Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Our Clients
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Blog & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/book-meeting" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Book a Meeting
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Tax Planning & Preparation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Bookkeeping & Accounting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Payroll Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Virtual CFO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Other Pages */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Legal & Other Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-700 hover:text-primary transition duration-300 flex items-center">
                  <span className="mr-2">→</span> Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* XML Sitemap Note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">XML Sitemap</h3>
          <p>For search engines, an XML version of our sitemap is available at: <a href="/sitemap.xml" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">/sitemap.xml</a></p>
        </div>
      </div>
    </>
  );
};

export default Sitemap;