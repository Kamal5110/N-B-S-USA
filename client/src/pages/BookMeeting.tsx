import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import BookingForm from "@/components/booking/BookingForm";
import GoogleMap from "@/components/common/GoogleMap";

const BookMeeting = () => {
  return (
    <>
      <Helmet>
        <title>Book a Meeting - Nishav Business Solutions</title>
        <meta name="description" content="Schedule a consultation with Nishav Business Solutions. We offer expert accounting & bookkeeping services for US CPA firms at affordable rates." />
        <meta name="keywords" content="booking accounting consultation, book CPA meeting, accounting consultation, schedule financial consultation" />
        <link rel="canonical" href="https://nishavbusiness.com/book-meeting" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20" aria-labelledby="booking-page-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 id="booking-page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Consultation with Nishav</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Schedule a meeting with our expert consultants to discuss your financial needs.
          </p>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="book-meeting" className="py-20 bg-[var(--lightgray)]" aria-labelledby="booking-form-heading">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="booking-form-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Book a Consultation</h2>
              <div className="w-20 h-1 bg-[var(--accent)] mb-6"></div>
              <p className="text-lg text-[var(--darkgray)] mb-8">
                Schedule a meeting with our expert consultants to discuss your financial needs and discover how we can help your business thrive.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-check text-[var(--accent)] text-sm"></i>
                  </div>
                  <span className="text-[var(--darkgray)]">Personalized financial assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-check text-[var(--accent)] text-sm"></i>
                  </div>
                  <span className="text-[var(--darkgray)]">Custom service recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-check text-[var(--accent)] text-sm"></i>
                  </div>
                  <span className="text-[var(--darkgray)]">Transparent pricing discussion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <i className="fas fa-check text-[var(--accent)] text-sm"></i>
                  </div>
                  <span className="text-[var(--darkgray)]">30-minute no-obligation consultation</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-phone text-[var(--primary)] mr-2"></i>
                  <span className="font-semibold">+1 (917) 245-2515</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-[var(--primary)] mr-2"></i>
                  <span className="font-semibold">contact@nishavbusiness.com</span>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="py-16 bg-white" aria-labelledby="locations-heading">
        <div className="container mx-auto px-4">
          <h2 id="locations-heading" className="text-3xl font-bold text-[var(--primary)] text-center mb-12">
            Visit Our Offices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="h-64 relative rounded-lg mb-6">
                <GoogleMap 
                  address="30 North Gould Street, Suite R, Sheridan, Wyoming 82801, USA" 
                  height="100%"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">US Office</h3>
              <address className="text-[var(--darkgray)] not-italic mb-4">
                30 North Gould Street, Suite R<br />
                Sheridan, Wyoming 82801, (USA)
              </address>
              <p className="text-[var(--darkgray)]">
                <a href="tel:+19172452515" className="hover:text-[var(--accent)] transition duration-300">
                  <i className="fas fa-phone-alt mr-2"></i>+1 (917) 245-2515
                </a>
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="h-64 relative rounded-lg mb-6">
                <GoogleMap 
                  address="Office No. - 2, 2B Darmanagar, Nr. BOB Bank, Sabarmati, Ahmedabad, Gujarat 380005, India" 
                  height="100%"
                  className="rounded-lg"
                />
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
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--lightgray)]" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Why Choose Nishav Business Solutions?
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)]">
              Discover the benefits of partnering with our experienced team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Expert Team
              </h3>
              <p className="text-[var(--darkgray)]">
                Our team consists of certified professionals with extensive experience across various industries.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-usd text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Tailored Solutions
              </h3>
              <p className="text-[var(--darkgray)]">
                We provide customized accounting solutions designed to address your specific business needs.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-[var(--primary)]"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                Client-Focused Support
              </h3>
              <p className="text-[var(--darkgray)]">
                We're committed to providing exceptional service and support to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-white" aria-labelledby="testimonial-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="testimonial-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          </div>
          
          <div className="bg-[var(--lightgray)] p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="text-[var(--accent)] mb-6 text-center">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-xl text-[var(--darkgray)] italic mb-8 text-center">
              "The consultation I had with Nishav Business Solutions was incredibly valuable. Their team took the time to understand my business needs and provided strategic recommendations that have already made a positive impact. I highly recommend their services!"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-user text-[var(--primary)]"></i>
              </div>
              <div>
                <h4 className="font-bold text-[var(--primary)]">Robert Thompson</h4>
                <p className="text-sm text-[var(--darkgray)]">CEO, Thompson Innovations</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/clients" 
              className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
            >
              View More Testimonials <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[var(--primary)]" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your consultation today and take the first step toward optimizing your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-md font-bold hover:bg-white/90 transition duration-300 shadow-md"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+19172452515"
                className="bg-[var(--accent)] text-white px-8 py-3 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookMeeting;