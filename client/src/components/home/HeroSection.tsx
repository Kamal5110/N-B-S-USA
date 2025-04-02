import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[var(--primary)] overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expert Offshore Accounting Services For CPA Firms
            </h1>
            <h2 className="text-3xl md:text-4xl text-white/90 mb-4 font-semibold">
              Starting at $8.50/Hr | Save Up To 70% Today
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              <Link href="/about" className="text-white hover:text-white underline transition-colors duration-300">Nishav Business Solutions</Link> helps <strong>CPA firms</strong> save up to 70% on labor costs with our professional <Link href="/services" className="text-white hover:text-white underline transition-colors duration-300">offshore accounting</Link> and <Link href="/services/bookkeeping" className="text-white hover:text-white underline transition-colors duration-300">bookkeeping services</Link>.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md text-center">
                Explore Services
              </Link>
              <Link href="/book-meeting" className="bg-white text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-white/90 transition duration-300 shadow-md text-center">
                Book a Free Consultation
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=70" 
                alt="Professional accountant working with financial documents for offshore accounting services" 
                className="rounded-lg shadow-xl"
                width="600" 
                height="400"
                loading="eager"
                decoding="async"
              />
              <figcaption className="sr-only">Professional accounting services for CPA firms</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
