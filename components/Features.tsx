
import React from 'react';
import { Clock, Mic2, Calendar, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color, delay }: any) => (
  <div 
    className="glass p-8 rounded-3xl hover:border-white/20 transition-all group reveal" 
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center glass group-hover:scale-110 transition-transform ${color}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Grow Your Practice, <span className="gradient-text">Reduce Overhead</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Replace missed calls with booked appointments. FlowFront gives you a full-time receptionist at a fraction of the cost.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={Clock}
          title="Capture Every Lead"
          description="FlowFront answers calls instantly, 24/7. No more voicemail tag or lost opportunities when you're busy."
          color="text-cyan-400"
          delay={0}
        />
        <FeatureCard 
          icon={Mic2}
          title="Professional & Friendly"
          description="Your AI receptionist sounds human, polite, and professional, ensuring your brand image remains pristine."
          color="text-purple-400"
          delay={100}
        />
        <FeatureCard 
          icon={Calendar}
          title="Book Appointments"
          description="Directly integrates with your existing calendar to check availability and book clients while you sleep."
          color="text-pink-400"
          delay={200}
        />
        <FeatureCard 
          icon={ShieldCheck}
          title="Secure & Reliable"
          description="Enterprise-grade security and 99.9% uptime. Your patient and client data is always protected."
          color="text-blue-400"
          delay={300}
        />
      </div>
    </section>
  );
};

export default Features;
