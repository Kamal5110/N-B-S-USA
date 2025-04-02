import { Link } from "wouter";

const CoreValuesSection = () => {
  // Core values data
  const coreValues = [
    {
      icon: "fa-handshake",
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings, demonstrating honesty, transparency, and accountability."
    },
    {
      icon: "fa-chart-line",
      title: "Excellence",
      description: "We strive for exceptional quality in every service we provide, continuously improving our skills and processes."
    },
    {
      icon: "fa-users",
      title: "Collaboration",
      description: "We work closely with clients to understand their unique needs and create tailored solutions through open communication."
    },
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "We embrace new technologies and methodologies to deliver more effective and efficient accounting solutions."
    }
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="core-values-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="core-values-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)]">
            These principles guide our operations and relationships with clients, ensuring we deliver exceptional value consistently. 
            Learn more about our <Link href="/about" className="text-[var(--accent)] hover:underline">company culture</Link> and <Link href="/services" className="text-[var(--accent)] hover:underline">service approach</Link>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fas ${value.icon} text-2xl text-[var(--primary)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">
                {value.title}
              </h3>
              <p className="text-[var(--darkgray)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition duration-300 inline-flex items-center"
          >
            Learn more about our company and team <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;