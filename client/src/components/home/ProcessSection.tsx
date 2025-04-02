const ProcessSection = () => {
  return (
    <section className="py-20 bg-[var(--lightgray)]" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            How We Work
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary)] mb-4">
            Our Four-Step Process
          </h3>
          <p className="text-lg text-[var(--darkgray)]">
            A streamlined approach to integrating outsourced accounting services with your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4 mt-4">
              Initial Consultation
            </h3>
            <p className="text-[var(--darkgray)]">
              We begin with a detailed assessment of your accounting needs, understanding your business model, and identifying key challenges to create a customized solution.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4 mt-4">
              Strategic Planning
            </h3>
            <p className="text-[var(--darkgray)]">
              Our team designs a tailored service plan that outlines workflow processes, timelines, deliverables, and integration points with your existing systems.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4 mt-4">
              Team Assignment
            </h3>
            <p className="text-[var(--darkgray)]">
              We assign dedicated offshore professionals with expertise in your specific industry and requirements, ensuring seamless collaboration and communication.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
              04
            </div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4 mt-4">
              Implementation & Ongoing Support
            </h3>
            <p className="text-[var(--darkgray)]">
              After onboarding and system setup, we provide continuous monitoring, regular reporting, and quality assurance to maintain exceptional service standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;