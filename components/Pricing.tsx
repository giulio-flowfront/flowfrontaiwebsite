
import React from 'react';
import { Phone, Database, Settings, Check, User, TrendingUp, Building2 } from 'lucide-react';

interface PricingProps {
  onTalkToTeamClick?: () => void;
}

const CriteriaCard = ({ icon: Icon, title, description }: any) => (
  <div className="glass p-6 rounded-2xl">
    <Icon className="text-cyan-400 mb-4" size={24} />
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
  </div>
);

const Pricing: React.FC<PricingProps> = ({ onTalkToTeamClick }) => {
  return (
    <section className="py-24 px-6 bg-[#030311]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tailored to Your <br />
          <span className="gradient-text">Business Scale</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          FlowFront AI is built to scale with you. We design custom call-handling workflows that fit your specific operational needs.
        </p>
      </div>

      {/* Criteria Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
        <CriteriaCard 
          icon={Phone} 
          title="Call Volume" 
          description="Pricing scales with your monthly call minutes. You only pay for the time the AI is actually working."
        />
        <CriteriaCard 
          icon={Database} 
          title="Integration Depth" 
          description="Simple calendar syncing is standard, while deep EMR/CRM read-write access may require custom engineering."
        />
        <CriteriaCard 
          icon={Settings} 
          title="Workflow Complexity" 
          description="From simple message taking to complex multi-step triage and emergency escalation protocols."
        />
      </div>

      {/* Business Type Grid */}
      <div id="pricing-tiers" className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 scroll-mt-32">
        
        {/* Solo & Small Teams */}
        <div className="glass p-8 rounded-[40px] border border-white/5 relative group hover:border-blue-500/30 transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <User size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Solo & Small Teams</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            For businesses that need calls answered and appointments booked without hiring staff.
          </p>
          <hr className="border-white/5 mb-8" />
          <ul className="space-y-4 mb-10">
            {['24/7 Call Answering', 'Standard Appointment Booking', 'FAQ Responses', 'Calendar Integration', 'SMS Summaries'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <Check size={16} className="text-blue-500" /> {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={onTalkToTeamClick}
            className="w-full py-4 rounded-full border border-white/10 glass font-bold hover:bg-white/10 transition-all"
          >
            Get Custom Pricing
          </button>
        </div>

        {/* Growing Service Businesses */}
        <div className="glass p-8 rounded-[40px] border-2 border-blue-500 relative bg-blue-500/5 shadow-[0_0_40px_rgba(79,128,255,0.1)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest">
            Best Value
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Growing Businesses</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            For teams handling high call volume, missed calls, and complex scheduling requirements.
          </p>
          <hr className="border-white/10 mb-8" />
          <ul className="space-y-4 mb-10">
            {['High Volume Handling', 'Missed Call Recovery', 'Complex Scheduling Logic', 'Full CRM Integration', 'Advanced Lead Triage', 'Dedicated Implementation'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <Check size={16} className="text-blue-500" /> {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={onTalkToTeamClick}
            className="w-full py-4 rounded-full bg-white text-black font-bold hover:opacity-90 transition-all"
          >
            Get Custom Pricing
          </button>
        </div>

        {/* Advanced & Multi-Location */}
        <div className="glass p-8 rounded-[40px] border border-white/5 relative group hover:border-purple-500/30 transition-all duration-500">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Building2 size={24} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Enterprise & Multi-Location</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            For businesses that require intelligent call routing, deep integrations, and custom logic.
          </p>
          <hr className="border-white/5 mb-8" />
          <ul className="space-y-4 mb-10">
            {['Multi-Location Routing', 'Custom EMR/API Integration', 'Advanced Triage Flows', 'HIPAA/Secure Compliance', 'Custom Voice Identity', 'White-Glove Support'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <Check size={16} className="text-purple-500" /> {item}
              </li>
            ))}
          </ul>
          <button 
            onClick={onTalkToTeamClick}
            className="w-full py-4 rounded-full border border-white/10 glass font-bold hover:bg-white/10 transition-all"
          >
            Get Custom Pricing
          </button>
        </div>
      </div>

      <p className="text-center mt-12 text-gray-500 text-sm">
        Not sure where you fit?{' '}
        <button 
          onClick={onTalkToTeamClick}
          className="text-blue-400 hover:underline font-medium"
        >
          Talk to our team
        </button>{' '}
        for a free consultation.
      </p>
    </section>
  );
};

export default Pricing;
