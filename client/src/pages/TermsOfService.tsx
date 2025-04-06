import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | Nishav Solutions</title>
        <meta name="description" content="Terms of Service for Nishav Solutions - Learn about the terms and conditions governing the use of our services." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to Nishav Solutions India Pvt. Ltd. These Terms of Service ("Terms") govern your use of our website and services. 
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, 
              you may not access our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
            <p>
              Nishav Solutions provides offshore accounting, bookkeeping, and tax preparation services to accounting firms and CPAs in the United States. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><a href="/service/1" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Tax Preparation & Planning</a> - Comprehensive tax services to minimize liability and ensure compliance with current tax laws.</li>
              <li><a href="/service/2" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Bookkeeping & Accounting</a> - Accurate financial record-keeping and reporting to support informed business decisions.</li>
              <li><a href="/service/3" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Audit & Assurance</a> - Independent verification of financial statements to enhance credibility and identify opportunities.</li>
              <li><a href="/service/4" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Data Entry Specialist</a> - Meticulous data entry services to ensure accurate financial records and database management.</li>
              <li><a href="/service/7" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Payroll Services</a> - Comprehensive payroll processing and management solutions for businesses of all sizes.</li>
              <li><a href="/service/5" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Virtual CFO Services</a> - Executive-level financial guidance without the full-time cost of an in-house CFO.</li>
              <li><a href="/service/6" className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors">Sr. Accountant Services</a> - Advanced accounting expertise for complex financial needs and high-level reporting.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
            <p>
              If you create an account with us, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account.
              You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p>
              The service and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and all Intellectual Property Rights related thereto, are the exclusive property of Nishav Solutions India Pvt. Ltd.
              These Terms of Service permit you to use the Service for your personal, non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Confidentiality and Data Protection</h2>
            <p>
              We are committed to maintaining the confidentiality of your data. We implement robust security measures to protect your information according to industry standards and legal requirements. 
              For more information about how we handle your data, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Nishav Solutions India Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-2">
              <p><strong>Nishav Solutions India Pvt. Ltd.</strong></p>
              <p>Office No. - 2, 2B Darmanagar, Nr. BOB Bank</p>
              <p>Sabarmati, Ahmedabad, Gujarat - 380005</p>
              <p>Email: contact@nishavbusiness.com</p>
              <p>Phone: +(91) - 9649410824</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;