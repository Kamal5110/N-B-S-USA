import { motion } from 'framer-motion';
import OptimizedImage from '@/components/common/OptimizedImage';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      imageSrc: '/images/iso 9001.png',
      fallbackSrc: '/images/placeholder.svg',
    },
    {
      name: 'ISO 27001:2013',
      description: 'Information Security Management',
      imageSrc: '/images/iso 27001.png',
      fallbackSrc: '/images/placeholder.svg',
    }
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="certifications-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="certifications-heading" 
            className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4"
          >
            Our Certifications
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)] max-w-3xl mx-auto">
            We maintain high standards of quality and security through internationally recognized certifications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-40 h-40 mb-6 relative flex items-center justify-center">
                <img
                  src={cert.imageSrc}
                  alt={cert.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log(`Error loading certification image: ${cert.imageSrc}`);
                    e.currentTarget.src = cert.fallbackSrc;
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{cert.name}</h3>
              <p className="text-[var(--darkgray)] text-center">{cert.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[var(--darkgray)] max-w-3xl mx-auto">
            Our ISO certifications demonstrate our commitment to maintaining the highest standards in service delivery and data protection, providing our clients with the confidence that their financial information is in safe hands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;