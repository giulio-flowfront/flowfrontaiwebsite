
import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-[80vh] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Legal Documentation
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-500 font-medium">Last Updated: January 21, 2026</p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Content Section */}
        <div className="glass p-8 md:p-12 rounded-[40px] border border-white/5 space-y-10 text-gray-300 leading-relaxed">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
            </div>
            <p>
              FlowFront AI (“FlowFront AI,” “we,” “us,” or “our”) respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <strong className="text-blue-400">Personal Information:</strong> Name, email address, phone number, business name, and any information you submit through forms or direct communication.
              </div>
              <div>
                <strong className="text-blue-400">Usage and Technical Information:</strong> IP address, browser type, device information, pages visited, and referring URLs.
              </div>
              <div>
                <strong className="text-blue-400">Call and Communication Data:</strong> Call recordings, transcripts, call metadata, and appointment-related information processed solely to provide our services.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p>
              We use collected information to provide and maintain services, respond to inquiries, configure AI receptionist systems, improve functionality, communicate updates, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p>
              We do not sell personal information. Data may be shared with trusted service providers, to comply with legal obligations, or to protect rights and security.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-purple-400" size={24} />
              <h2 className="text-2xl font-bold text-white">Data Security</h2>
            </div>
            <p>
              We use reasonable administrative and technical safeguards to protect your data. No system can be guaranteed to be fully secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p>
              We retain data only as long as necessary to fulfill service purposes and legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <p>
              We may update this policy periodically. Continued use of our services constitutes acceptance of the revised policy.
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

export default PrivacyPolicy;
