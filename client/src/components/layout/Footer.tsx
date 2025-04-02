import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="mb-6">
              {/* Logo */}
              <div className="mb-4 bg-white p-3 rounded-lg inline-block">
                <img 
                  src="/images/Nishav_Business_Solutions logo.png" 
                  alt="Nishav Business Solutions Logo" 
                  className="h-12 w-auto" 
                  width="180" 
                  height="48"
                />
              </div>
              <p className="text-white/80">
                Professional offshore accounting and bookkeeping services to help CPA firms reduce costs and increase efficiency.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[var(--accent)] transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-[var(--accent)] transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Our Services</Link></li>
              <li><Link href="/clients" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Our Clients</Link></li>
              <li><Link href="/blogs" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Blog & News</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Contact Us</Link></li>
              <li><Link href="/book-meeting" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Book a Meeting</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Tax Planning & Preparation</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Bookkeeping & Accounting</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Audit & Assurance</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Business Advisory</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Payroll Services</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-[var(--accent)] transition duration-300">Virtual CFO Services</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <div>
                  <strong>US Office:</strong><br />
                  123 Business Avenue, Suite 200<br />
                  New York, NY 10001<br /><br />
                  <strong>India Office:</strong><br />
                  Office No. - 2, 2B Darmanagar, Nr. BOB Bank<br />
                  Sabarmati, Ahmedabad, Gujarat - 380005
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <div>
                  <div>+1 (800) 123-4567</div>
                  <div>+(91) - 9649410824</div>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <div>
                  <a href="mailto:contact@nishavbusiness.com" className="hover:text-[var(--accent)] transition duration-300">contact@nishavbusiness.com</a><br />
                  <a href="mailto:support@nishavbusiness.com" className="hover:text-[var(--accent)] transition duration-300">support@nishavbusiness.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <div>
                  Monday - Friday: 10:00 AM - 7:00 PM<br />
                  Saturday & Sunday: Closed
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nishav Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Terms of Service</Link>
              <Link href="/sitemap" className="text-white/70 hover:text-[var(--accent)] text-sm transition duration-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
