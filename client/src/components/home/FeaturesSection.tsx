import { features } from "@/lib/data";
import { Link } from "wouter";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl font-bold text-[var(--primary)] mb-4">Why Choose Nishav Business Solutions</h2>
          <p className="text-lg text-[var(--darkgray)] max-w-3xl mx-auto">We provide top-tier <Link href="/services" className="text-[var(--accent)] hover:underline transition-colors duration-300">offshore accounting services</Link> with unique advantages that set us apart from the competition. <Link href="/about" className="text-[var(--accent)] hover:underline transition-colors duration-300">Learn more about our approach</Link>.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="bg-[var(--lightgray)] p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <i className={`fas ${feature.icon} text-2xl text-[var(--primary)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{feature.title}</h3>
              <p className="text-[var(--darkgray)] mb-4">{feature.description}</p>
              {index === 0 && (
                <Link href="/about" className="text-[var(--accent)] font-medium hover:underline">Learn more about us →</Link>
              )}
              {index === 1 && (
                <Link href="/services" className="text-[var(--accent)] font-medium hover:underline">View our services →</Link>
              )}
              {index === 2 && (
                <Link href="/clients" className="text-[var(--accent)] font-medium hover:underline">See client success stories →</Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
