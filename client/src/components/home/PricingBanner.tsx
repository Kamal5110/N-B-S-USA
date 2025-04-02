import { Link } from "wouter";

const PricingBanner = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] relative overflow-hidden" aria-labelledby="pricing-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute left-1/4 bottom-0 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute right-1/3 top-1/3 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                  Professional Accounting at $8.50/Hour
                </h2>
                <div className="flex items-center mb-6">
                  <div className="text-5xl md:text-6xl font-bold text-[var(--accent)]">$8.50</div>
                  <div className="ml-2 text-lg">
                    <span className="font-bold">/Hour</span>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8" aria-label="Pricing benefits">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">Save Up to 70% on Labor Costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">No Compliance Hassles, Payroll Taxes, or Health Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">Qualified & Experienced Accounting Professionals</span>
                  </li>
                </ul>
                
                <Link 
                  href="/book-meeting" 
                  className="inline-block bg-[var(--accent)] text-white px-8 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md text-center"
                  aria-label="Schedule a consultation to learn about our accounting services"
                >
                  Get Started Now
                </Link>
              </div>
              
              <div className="w-full md:w-auto hidden md:block">
                <div className="relative w-64 h-64 bg-[var(--primary)]/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <div className="absolute inset-0 animate-pulse-slow opacity-50 bg-[var(--primary)]/20 rounded-full"></div>
                  <div className="relative">
                    <div className="text-7xl font-bold text-[var(--primary)]">70%</div>
                    <div className="text-xl font-bold text-center text-[var(--primary)]">SAVINGS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Banner */}
          <div className="bg-[var(--accent)] py-3 px-6 text-center">
            <p className="text-white font-medium">
              Limited Time Offer - <Link href="/book-meeting" className="underline hover:text-white/80">Book a Free Consultation</Link> or <Link href="/services" className="underline hover:text-white/80">Learn More About Our Services</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;