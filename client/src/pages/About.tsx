import { Helmet } from 'react-helmet';
import AboutSection from "@/components/about/AboutSection";
import CTASection from "@/components/home/CTASection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nishav Business Solutions | Offshore Accounting Experts</title>
        <meta name="description" content="Learn about Nishav Business Solutions - a trusted offshore accounting service provider with 2+ years of experience and 15+ professionals serving 15+ CPA firms." />
        <meta name="keywords" content="accounting firm, CPA outsourcing, offshore accounting team, accounting professionals, US accounting services" />
        <link rel="canonical" href="https://nishavbusiness.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nishav Business Solutions",
              "url": "https://nishavbusiness.com",
              "logo": "https://nishavbusiness.com/logo.png",
              "description": "Offshore accounting services for CPA firms at $8.50/hour, saving up to 70% on labor costs.",
              "foundingDate": "2022",
              "founders": [
                {
                  "@type": "Person",
                  "name": "John Anderson"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "30 North Gould Street, Suite R",
                "addressLocality": "Sheridan",
                "addressRegion": "Wyoming",
                "postalCode": "82801",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 (917) 245-2515",
                "contactType": "customer service",
                "email": "contact@nishavbusiness.com"
              },
              "sameAs": [
                "https://www.facebook.com/nishavbusiness",
                "https://www.twitter.com/nishavbusiness",
                "https://www.linkedin.com/company/nishavbusiness",
                "https://www.instagram.com/nishavbusiness"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20" aria-labelledby="page-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">About Nishav Business Solutions</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Learn more about our company and our commitment to excellence in offshore accounting services.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <main>
        <AboutSection />
      
        {/* Mission & Vision */}
        <section className="py-20 bg-white" aria-labelledby="mission-heading vision-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                  <i className="fas fa-bullseye text-2xl text-[var(--primary)]"></i>
                </div>
                <h2 id="mission-heading" className="text-2xl font-bold text-[var(--primary)] mb-4">Our Mission</h2>
                <p className="text-[var(--darkgray)] mb-4">
                  To provide innovative, accurate, and timely accounting solutions that help our clients make informed financial decisions, minimize tax liabilities, and achieve sustainable growth.
                </p>
                <p className="text-[var(--darkgray)]">
                  We are committed to delivering personalized service that addresses the unique needs of each client, building long-term relationships based on trust, integrity, and results.
                </p>
              </div>
              
              <div className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                  <i className="fas fa-eye text-2xl text-[var(--primary)]"></i>
                </div>
                <h2 id="vision-heading" className="text-2xl font-bold text-[var(--primary)] mb-4">Our Vision</h2>
                <p className="text-[var(--darkgray)] mb-4">
                  To be the most trusted accounting partner for businesses of all sizes, recognized for our expertise, innovative solutions, and exceptional client service.
                </p>
                <p className="text-[var(--darkgray)]">
                  We aspire to continuously evolve and adapt to the changing business landscape, leveraging technology and industry best practices to provide our clients with a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-[var(--lightgray)]" aria-labelledby="team-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
                Meet Our Expert Team
              </h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
              <p className="text-lg text-[var(--darkgray)]">
                Our team of certified professionals is dedicated to providing the highest level of service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-1">Jitendra Soni</h3>
                  <p className="text-[var(--accent)] font-semibold mb-3">Founder & CEO</p>
                  <p className="text-[var(--darkgray)] mb-4">
                    With over 10 years of experience in accounting and finance, Jitendra leads our team with expertise and vision.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Jitendra Soni's LinkedIn Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Jitendra Soni's Twitter Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:jitendra@nishavbusiness.com" aria-label="Email Jitendra Soni" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </article>
              
              {/* Team Member 2 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-1">Anand Soni</h3>
                  <p className="text-[var(--accent)] font-semibold mb-3">Tax Director</p>
                  <p className="text-[var(--darkgray)] mb-4">
                    Anand specializes in tax planning and compliance, helping clients navigate complex tax regulations.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Anand Soni's LinkedIn Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Anand Soni's Twitter Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:anand@nishavbusiness.com" aria-label="Email Anand Soni" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </article>
              
              {/* Team Member 3 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-user-tie text-6xl text-[var(--primary)]/20" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-1">Vipul Khandelwal</h3>
                  <p className="text-[var(--accent)] font-semibold mb-3">Audit Manager</p>
                  <p className="text-[var(--darkgray)] mb-4">
                    Vipul brings precision and expertise to our audit services, ensuring compliance and identifying opportunities.
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Vipul Khandelwal's LinkedIn Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Vipul Khandelwal's Twitter Profile" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:vipul@nishavbusiness.com" aria-label="Email Vipul Khandelwal" className="text-[var(--primary)] hover:text-[var(--accent)]">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
};

export default About;