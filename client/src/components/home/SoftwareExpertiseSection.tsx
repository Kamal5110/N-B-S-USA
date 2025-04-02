import { accountingSoftware } from "@/lib/data";

const SoftwareExpertiseSection = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="software-expertise-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 id="software-expertise-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Accounting Software Expertise
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--darkgray)] mb-8">
            Our team is proficient in all major accounting platforms, ensuring seamless integration and efficient workflow management for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {accountingSoftware.map((software, index) => (
            <div
              key={index}
              className="bg-[var(--lightgray)] p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-[var(--primary)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${software.icon} text-2xl text-[var(--primary)]`}></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                {software.name}
              </h3>
              <p className="text-sm text-[var(--darkgray)]">
                {software.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareExpertiseSection;