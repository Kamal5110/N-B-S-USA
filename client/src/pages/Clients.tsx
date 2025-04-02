import { Helmet } from 'react-helmet';
import ClientsSection from "@/components/clients/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients | Nishav Business Solutions</title>
        <meta name="description" content="Meet the growing list of 15+ CPA firms and businesses that trust Nishav Business Solutions for their offshore accounting needs." />
        <meta name="keywords" content="accounting clients, offshore accounting clients, CPA firms, accounting case studies, client testimonials" />
        <link rel="canonical" href="https://nishavbusiness.com/clients" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20" aria-labelledby="clients-page-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="clients-page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Nishav Business Solutions Clients</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the businesses that trust Nishav Business Solutions for their accounting needs.
          </p>
        </div>
      </section>
      
      {/* Main Clients Section */}
      <ClientsSection />
      

      
      {/* Industries Served */}
      <section className="py-20 bg-[var(--lightgray)]" aria-labelledby="industries-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              Our expertise spans across multiple industries, providing specialized accounting solutions for various business sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Technology
              </h3>
              <p className="text-[var(--darkgray)]">
                Specialized accounting services for startups, SaaS companies, and tech enterprises with expertise in R&D tax credits.
              </p>
            </div>
            
            {/* Industry 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Manufacturing
              </h3>
              <p className="text-[var(--darkgray)]">
                Comprehensive accounting solutions tailored to the unique needs of manufacturing businesses of all sizes.
              </p>
            </div>
            
            {/* Industry 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-store text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Retail
              </h3>
              <p className="text-[var(--darkgray)]">
                Expert accounting services for retail businesses, including inventory management and sales tax compliance.
              </p>
            </div>
            
            {/* Industry 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-stethoscope text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Healthcare
              </h3>
              <p className="text-[var(--darkgray)]">
                Specialized accounting for medical practices, healthcare providers, and related businesses.
              </p>
            </div>
            
            {/* Industry 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hammer text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Construction
              </h3>
              <p className="text-[var(--darkgray)]">
                Tailored accounting solutions for construction companies, contractors, and related businesses.
              </p>
            </div>
            
            {/* Industry 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-utensils text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Hospitality
              </h3>
              <p className="text-[var(--darkgray)]">
                Comprehensive accounting services for restaurants, hotels, and other hospitality businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Clients;
