
import React from 'react';
import { Gavel, Scale, FileCheck } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-[80vh] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            User Agreement
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-500 font-medium">Last Updated: January 21, 2026</p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Content Section */}
        <div className="glass p-8 md:p-12 rounded-[40px] border border-white/5 space-y-10 text-gray-300 leading-relaxed">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-purple-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Agreement to Terms</h2>
            </div>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of the website and services provided by FlowFront AI (“FlowFront AI,” “we,” “us,” or “our”). By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <p>
              FlowFront AI provides AI-powered call handling, appointment booking, and automation services. Services may be updated, modified, or discontinued at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal authority to enter into these Terms to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
            <p>
              You are responsible for ensuring the accuracy of information provided to FlowFront AI, maintaining compliance with applicable laws, and obtaining any required consent for call recording or data processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
            <p>
              You agree not to misuse the services, attempt unauthorized access, interfere with system operations, or use the services for unlawful or prohibited purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Fees and Payments</h2>
            <p>
              Pricing and payment terms are agreed upon separately. Failure to pay may result in suspension or termination of services.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileCheck className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <p>
              All content, software, and materials provided by FlowFront AI are owned by or licensed to us and may not be copied, modified, or distributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of non-public information exchanged in connection with the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p>
              Services are provided “as is” and “as available.” FlowFront AI makes no warranties regarding uninterrupted operation or error-free performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, FlowFront AI shall not be liable for indirect, incidental, or consequential damages arising from the use of the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless FlowFront AI from claims arising out of your use of the services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p>
              We may suspend or terminate access to the services at any time for violation of these Terms or for operational reasons.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-gray-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Governing Law</h2>
            </div>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p>
              FlowFront AI Email: <a href="mailto:info@flowfrontai.com" className="text-blue-400 hover:underline">info@flowfrontai.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
