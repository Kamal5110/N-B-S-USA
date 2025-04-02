import { Link } from "wouter";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[var(--lightgray)]" aria-labelledby="company-overview-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="company-overview-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Company Overview
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Nishav Business Solutions team" 
              className="rounded-lg shadow-xl w-full"
              width="600" 
              height="400"
            />
          </div>
          
          <div>
            <p className="text-[var(--darkgray)] mb-6 text-lg">
              Nishav has over 2+ years of experience providing scalable and efficient Accounting, Bookkeeping, Audit, Client Advisory Services (CAS), and Tax preparation services EXCLUSIVELY to CPA/accounting firms worldwide. We do not compete with accountants.
            </p>
            
            <p className="text-[var(--darkgray)] mb-6 text-lg">
              With a team of 15+ experienced and qualified accounting professionals, we enable 15+ firms streamline their financial operations, ensure compliance, and drive profitable growth. Our experienced and qualified accounting professionals backed by years of expertise in using advanced software and technologies commonly used by accountants gives us the in-depth knowledge of accounting principles, tax regulations, and industry best practices required to earn the trust and loyalty of CPA/accounting firm clients worldwide.
            </p>
            
            <p className="text-[var(--darkgray)] mb-8 text-lg font-semibold">
              Nishav is your one-stop shop for reliably growing your firm to thrive in a dynamic and competitive landscape. Explore our <Link href="/services" className="text-[var(--primary)] hover:text-[var(--accent)] transition duration-300">comprehensive services</Link> or check out our <Link href="/clients" className="text-[var(--primary)] hover:text-[var(--accent)] transition duration-300">client success stories</Link>.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-[var(--accent)]"></i>
                </div>
                <span className="font-semibold">2+ Years Experience</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-[var(--accent)]"></i>
                </div>
                <span className="font-semibold">15+ Professionals</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-[var(--accent)]"></i>
                </div>
                <span className="font-semibold">15+ Client Firms</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-check text-[var(--accent)]"></i>
                </div>
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-block mt-8 bg-[var(--primary)] text-white px-8 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
