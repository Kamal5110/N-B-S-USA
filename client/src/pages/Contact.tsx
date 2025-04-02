import { Helmet } from 'react-helmet';
import ContactForm from "@/components/contact/ContactForm";
import CTASection from "@/components/home/CTASection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Nishav Business Solutions - Expert Offshore Accounting</title>
        <meta name="description" content="Nishav Business Solutions offers expert accounting & bookkeeping outsourcing for US CPA firms, helping businesses cut costs by up to 70%." />
        <meta name="keywords" content="contact accounting firm, offshore accounting services, accounting consultation, CPA services contact, tax preparation contact" />
        <link rel="canonical" href="https://nishavbusiness.com/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Nishav Business Solutions",
              "description": "Contact Nishav Business Solutions for professional accounting services at just $8.50/hour.",
              "mainEntity": {
                "@type": "Organization",
                "name": "Nishav Business Solutions",
                "telephone": ["+1 (800) 123-4567", "+(91) - 9649410824"],
                "email": ["contact@nishavbusiness.com", "support@nishavbusiness.com"],
                "address": [
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Business Avenue, Suite 200",
                    "addressLocality": "New York",
                    "addressRegion": "NY",
                    "postalCode": "10001",
                    "addressCountry": "US"
                  },
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "Office No. - 2, 2B Darmanagar, Nr. BOB Bank",
                    "addressLocality": "Sabarmati, Ahmedabad",
                    "addressRegion": "Gujarat",
                    "postalCode": "380005",
                    "addressCountry": "IN"
                  }
                ],
                "openingHours": "Mo,Tu,We,Th,Fr 10:00-19:00"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20" aria-labelledby="contact-page-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="contact-page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Nishav Business Solutions</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Reach out to our team for any questions, inquiries, or to schedule a consultation.
          </p>
        </div>
      </section>
      
      <main>
        {/* Contact Section */}
        <section className="py-20 bg-white" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <h2 id="contact-heading" className="sr-only">Contact Information and Form</h2>
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
                      <h4 className="font-bold text-[var(--primary)] mb-1">Our Locations</h4>
                      <address className="text-[var(--darkgray)] not-italic mb-2">
                        <strong>US Office:</strong><br />
                        123 Business Avenue, Suite 200<br />
                        New York, NY 10001
                      </address>
                      <address className="text-[var(--darkgray)] not-italic">
                        <strong>India Office:</strong><br />
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
                      <h4 className="font-bold text-[var(--primary)] mb-1">Phone Number</h4>
                      <p className="text-[var(--darkgray)]">
                        <a href="tel:+18001234567" className="hover:text-[var(--accent)] transition duration-300">+1 (800) 123-4567</a><br />
                        <a href="tel:+919649410824" className="hover:text-[var(--accent)] transition duration-300">+(91) - 9649410824</a>
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
                        <time itemProp="openingHours" dateTime="Mo,Tu,We,Th,Fr 10:00-19:00">
                          Monday - Friday: 10:00 AM - 7:00 PM
                        </time><br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.twitter.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/nishavbusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--accent)] transition duration-300">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-6">Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-white" aria-labelledby="locations-heading">
          <div className="container mx-auto px-4">
            <h2 id="locations-heading" className="text-3xl font-bold text-[var(--primary)] text-center mb-12">Our Locations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="h-64 bg-gray-300 relative rounded-lg mb-6">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/10">
                    <i className="fas fa-map-marked-alt text-5xl text-[var(--primary)]" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">US Office</h3>
                <address className="text-[var(--darkgray)] not-italic mb-4">
                  123 Business Avenue, Suite 200<br />
                  New York, NY 10001
                </address>
                <p className="text-[var(--darkgray)]">
                  <a href="tel:+18001234567" className="hover:text-[var(--accent)] transition duration-300">
                    <i className="fas fa-phone-alt mr-2"></i>+1 (800) 123-4567
                  </a>
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="h-64 bg-gray-300 relative rounded-lg mb-6">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/10">
                    <i className="fas fa-map-marked-alt text-5xl text-[var(--primary)]" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">India Office</h3>
                <address className="text-[var(--darkgray)] not-italic mb-4">
                  Office No. - 2, 2B Darmanagar, Nr. BOB Bank<br />
                  Sabarmati, Ahmedabad, Gujarat - 380005
                </address>
                <p className="text-[var(--darkgray)]">
                  <a href="tel:+919649410824" className="hover:text-[var(--accent)] transition duration-300">
                    <i className="fas fa-phone-alt mr-2"></i>+(91) - 9649410824
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 id="faq-heading" className="text-3xl font-bold text-[var(--primary)] mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    What services does Nishav Business Solutions offer?
                  </h3>
                  <p className="text-[var(--darkgray)]">
                    We offer a comprehensive range of accounting and financial services, including tax preparation and planning, bookkeeping, audit and assurance, business advisory, payroll services, and business formation.
                  </p>
                </div>
                
                <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    How can I schedule a consultation?
                  </h3>
                  <p className="text-[var(--darkgray)]">
                    You can schedule a consultation by calling our office, filling out the contact form on this page, or using our online booking system on the "Book a Meeting" page.
                  </p>
                </div>
                
                <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    Do you work with businesses of all sizes?
                  </h3>
                  <p className="text-[var(--darkgray)]">
                    Yes, we provide services to businesses of all sizes, from startups and small businesses to large corporations. Our solutions are tailored to meet the specific needs of each client.
                  </p>
                </div>
                
                <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    What industries do you specialize in?
                  </h3>
                  <p className="text-[var(--darkgray)]">
                    We have expertise across multiple industries, including technology, manufacturing, retail, healthcare, construction, and hospitality, among others.
                  </p>
                </div>
                
                <div className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    How do your services help businesses save money?
                  </h3>
                  <p className="text-[var(--darkgray)]">
                    Our services help businesses save money through strategic tax planning, optimized financial processes, identifying cost-saving opportunities, and ensuring compliance to avoid penalties and fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
};

export default Contact;