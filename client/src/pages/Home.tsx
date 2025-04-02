import { Helmet } from 'react-helmet';
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/about/AboutSection";
import CTASection from "@/components/home/CTASection";
import SoftwareExpertiseSection from "@/components/home/SoftwareExpertiseSection";
import ProcessSection from "@/components/home/ProcessSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import PricingBanner from "@/components/home/PricingBanner";
import ContactForm from "@/components/contact/ContactForm";
import { testimonials } from "@/lib/data";

// Lazy loaded components for better performance
import { 
  LazyServicesSection, 
  LazyBlogsSection, 
  LazyClientsSection, 
  LazyTestimonialCarousel,
  LazyCertificationsSection 
} from "@/components/LazyLoad";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nishav Business Solutions - Offshore Accounting at $8.50/Hr</title>
        <meta name="description" content="Nishav Business Solutions provides offshore accounting, bookkeeping, tax prep & payroll outsourcing for US CPAs. Save up to 70% on costs today!" />
        <meta name="keywords" content="offshore accounting, $8.50 per hour, accounting outsourcing, CPA firm services, bookkeeping services, tax preparation, payroll services, virtual CFO, 70% cost savings, offshore CPA, affordable accounting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:updated_time" content="2025-04-01T12:00:00+00:00" />
        <link rel="canonical" href="https://nishavbusiness.com/" />
      </Helmet>

      <HeroSection />
      
      <main>
        <FeaturesSection />
        <AboutSection />
        <LazyServicesSection />
        <ProcessSection />
        <CoreValuesSection />
        <PricingBanner />
        <SoftwareExpertiseSection />
        <LazyCertificationsSection />
        
        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <LazyTestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
        
        <CTASection />
        <LazyClientsSection />
        <LazyBlogsSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
              <p className="text-lg text-[var(--darkgray)]">Reach out to our team for any questions or inquiries.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Get in Touch</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <i className="fas fa-map-marker-alt text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">US Office</h4>
                      <address className="text-[var(--darkgray)] not-italic">
                        123 Business Avenue, Suite 200<br />
                        New York, NY 10001
                      </address>
                      <h4 className="font-bold text-[var(--primary)] mt-2 mb-1">India Office</h4>
                      <address className="text-[var(--darkgray)] not-italic">
                        Office No. - 2, 2B Darmanagar, Nr. BOB Bank<br />
                        Sabarmati, Ahmedabad, Gujarat - 380005
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <i className="fas fa-phone-alt text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">Phone Numbers</h4>
                      <p className="text-[var(--darkgray)]">
                        <span className="font-semibold">US:</span> <a href="tel:+18001234567" className="hover:text-[var(--accent)] transition duration-300">+1 (800) 123-4567</a><br />
                        <span className="font-semibold">India:</span> <a href="tel:+919649410824" className="hover:text-[var(--accent)] transition duration-300">+(91) - 9649410824</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <i className="fas fa-envelope text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">Email Address</h4>
                      <p className="text-[var(--darkgray)]">
                        <a href="mailto:contact@nishavbusiness.com" className="hover:text-[var(--accent)] transition duration-300">contact@nishavbusiness.com</a><br />
                        <a href="mailto:support@nishavbusiness.com" className="hover:text-[var(--accent)] transition duration-300">support@nishavbusiness.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4" aria-hidden="true">
                      <i className="fas fa-clock text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] mb-1">Working Hours</h4>
                      <p className="text-[var(--darkgray)]">
                        Monday - Friday: 10:00 AM - 7:00 PM<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Map Section */}
      <section className="py-16 bg-gray-100" aria-label="Map location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Presence</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">With offices in the United States and India, we provide round-the-clock accounting services for your business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* US Office */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <i className="fas fa-map-marked-alt text-5xl text-primary" aria-hidden="true"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">US Office</h3>
                <address className="text-darkgray not-italic mt-2">
                  123 Business Avenue, Suite 200<br />
                  New York, NY 10001
                </address>
                <p className="mt-3">
                  <a href="tel:+18001234567" className="text-primary hover:text-accent transition duration-300">
                    +1 (800) 123-4567
                  </a>
                </p>
              </div>
            </div>
            
            {/* India Office */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <i className="fas fa-map-marked-alt text-5xl text-primary" aria-hidden="true"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">India Office</h3>
                <address className="text-darkgray not-italic mt-2">
                  Office No. - 2, 2B Darmanagar, Nr. BOB Bank<br />
                  Sabarmati, Ahmedabad, Gujarat - 380005
                </address>
                <p className="mt-3">
                  <a href="tel:+919649410824" className="text-primary hover:text-accent transition duration-300">
                    +(91) - 9649410824
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;