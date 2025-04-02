import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="py-16 bg-[var(--primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Financial Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Schedule a consultation with our expert team to discuss your unique business needs. Learn more about our <Link href="/services" className="text-[var(--accent)] hover:underline">accounting services</Link> or see how we've helped <Link href="/clients" className="text-[var(--accent)] hover:underline">other CPA firms</Link>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/book-meeting" 
              className="bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md"
            >
              Book a Meeting
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-white/90 transition duration-300 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
