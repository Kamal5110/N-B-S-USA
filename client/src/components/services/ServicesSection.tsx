import { Link } from "wouter";
import { services } from "@/lib/data";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Our Comprehensive Services
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)]">
            Professional accounting solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-[var(--lightgray)] rounded-lg shadow-md p-8 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className={`fas ${service.icon} text-2xl text-[var(--primary)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--darkgray)] mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-circle text-[var(--accent)] text-xs mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/service/${service.id}`}
                className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md inline-block"
          >
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
