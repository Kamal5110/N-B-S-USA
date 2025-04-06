import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nishav Solutions</title>
        <meta name="description" content="Privacy Policy for Nishav Solutions - Learn about how we collect, use, and protect your personal data." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Nishav Solutions India Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about 
              your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. 
              It does not include data where the identity has been removed (anonymous data).
            </p>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped as follows:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, 
              altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business 
              need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;