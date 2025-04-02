import { useEffect } from "react";
import { useRoute, Link } from "wouter";
import { services } from "@/lib/data";
import CTASection from "@/components/home/CTASection";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const [, params] = useRoute('/service/:id');
  const serviceId = params?.id ? parseInt(params.id) : 0;
  
  const service = services.find(service => service.id === serviceId);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Default image if none provided
  const defaultImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  
  if (!service) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">Service Not Found</h1>
          <p className="text-lg text-[var(--darkgray)] mb-8">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            href="/services"
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-md font-bold hover:bg-[var(--primary)]/90 transition duration-300 shadow-md inline-block"
          >
            Return to Services
          </Link>
        </div>
      </section>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{service.title} | Nishav Business Solutions</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.title}, accounting services, offshore accounting, cpa services, ${service.features.join(', ').toLowerCase()}`} />
        <link rel="canonical" href={`https://nishavbusiness.com/service/${service.id}`} />
      </Helmet>
      
      {/* Service Header */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-[var(--primary)]/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className={`fas ${service.icon} text-3xl text-white`}></i>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {service.description}
          </p>
          <Link 
            href="/contact"
            className="bg-[var(--accent)] text-white px-8 py-4 rounded-md font-bold hover:bg-[var(--accent)]/90 transition duration-300 shadow-md inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Overview</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mb-8"></div>
              
              <div className="prose prose-lg max-w-none">
                <p>{service.detailedDescription || service.description}</p>
                <p className="mt-4">At Nishav Business Solutions, we provide comprehensive {service.title.toLowerCase()} services tailored to meet the specific needs of your business. Our experienced team ensures accuracy, compliance, and efficiency in all aspects of this service.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={service.image || defaultImage} 
                alt={service.title}
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Key Features</h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)] max-w-2xl mx-auto">
              Our {service.title.toLowerCase()} service includes everything you need for comprehensive financial management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md p-8 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[var(--accent)] mb-4">
                  <i className="fas fa-check-circle text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                  {feature}
                </h3>
                <p className="text-[var(--darkgray)]">
                  Our expert team ensures that this aspect of your financial management is handled with precision and care.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Benefits</h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
              <p className="text-lg text-[var(--darkgray)] max-w-2xl mx-auto">
                Discover how our {service.title.toLowerCase()} service can transform your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[var(--accent)] mr-4 mt-1">
                    <i className="fas fa-star text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[var(--darkgray)]">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 bg-[var(--lightgray)]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Our Process</h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
              <p className="text-lg text-[var(--darkgray)] max-w-2xl mx-auto">
                Our systematic approach ensures efficient and effective delivery of {service.title.toLowerCase()} services.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex mb-8 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-6 relative">
                    <div className="w-12 h-12 bg-[var(--accent)] text-white rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
                      {index + 1}
                    </div>
                    {service.process && index < service.process.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-6 w-0.5 bg-[var(--accent)]/30"></div>
                    )}
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 flex-1">
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--darkgray)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
              <p className="text-lg text-[var(--darkgray)] max-w-2xl mx-auto">
                Find answers to common questions about our {service.title.toLowerCase()} services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {service.faq.map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 last:mb-0 bg-[var(--lightgray)] rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                      {item.question}
                    </h3>
                    <p className="text-[var(--darkgray)]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Related Services */}
      <section className="py-16 bg-[var(--lightgray)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Related Services</h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--darkgray)] max-w-2xl mx-auto">
              Explore other financial services that complement {service.title.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services
              .filter(relatedService => relatedService.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <motion.div 
                  key={relatedService.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`fas ${relatedService.icon} text-2xl text-[var(--primary)]`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                      {relatedService.title}
                    </h3>
                    <p className="text-[var(--darkgray)] mb-6">
                      {relatedService.description}
                    </p>
                    <Link 
                      href={`/service/${relatedService.id}`}
                      className="text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
                    >
                      Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CTASection />
    </>
  );
};

export default ServiceDetail;