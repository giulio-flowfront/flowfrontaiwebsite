
import React from 'react';
import { Moon, PhoneForwarded, CalendarCheck, UserMinus, ClipboardList, ArrowRight } from 'lucide-react';

interface UseCaseTheme {
  iconBg: string;
  iconColor: string;
  borderColor: string;
  titleColor: string;
  blobColors: string;
  shadowColor: string;
}

// Define props interface for UseCaseCard
interface UseCaseCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
  theme: UseCaseTheme;
}

// Use React.FC to properly handle the 'key' prop in lists
const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, description, delay, theme }) => {
  return (
    <div 
      className={`glass p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden group transition-all duration-500 ${theme.borderColor} ${theme.shadowColor} reveal active`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Dynamic Background Blob */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${theme.blobColors} blur-[60px] -z-10 group-hover:opacity-100 opacity-40 transition-opacity duration-700`}></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.iconBg} flex items-center justify-center ${theme.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
          <Icon size={32} />
        </div>
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-white ${theme.titleColor} transition-colors duration-300`}>
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: Moon,
      title: "After-Hours Call Coverage",
      description: "When your business is closed, FlowFront AI answers calls, provides key information, and books appointments automatically—so opportunities aren’t lost outside business hours.",
      theme: {
        iconBg: "from-indigo-500/20 to-purple-600/20",
        iconColor: "text-indigo-400",
        borderColor: "hover:border-indigo-500/30",
        titleColor: "group-hover:text-indigo-400",
        blobColors: "from-indigo-600/10 to-purple-600/10",
        shadowColor: "hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
      }
    },
    {
      icon: PhoneForwarded,
      title: "Missed Call Recovery",
      description: "If your staff is busy or unavailable, FlowFront captures missed calls, handles the conversation, and ensures potential customers are never sent to voicemail.",
      theme: {
        iconBg: "from-emerald-500/20 to-teal-600/20",
        iconColor: "text-emerald-400",
        borderColor: "hover:border-emerald-500/30",
        titleColor: "group-hover:text-emerald-400",
        blobColors: "from-emerald-600/10 to-teal-600/10",
        shadowColor: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
      }
    },
    {
      icon: CalendarCheck,
      title: "Automated Appointment Management",
      description: "FlowFront books, reschedules, and cancels appointments in real time by syncing with your calendar or scheduling software—without manual follow-ups.",
      theme: {
        iconBg: "from-amber-500/20 to-orange-600/20",
        iconColor: "text-amber-400",
        borderColor: "hover:border-amber-500/30",
        titleColor: "group-hover:text-amber-400",
        blobColors: "from-amber-600/10 to-orange-600/10",
        shadowColor: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
      }
    },
    {
      icon: UserMinus,
      title: "Front Desk Workload Reduction",
      description: "Routine questions and repetitive calls are handled by the AI receptionist, allowing your staff to focus on higher-value tasks instead of constant phone interruptions.",
      theme: {
        iconBg: "from-rose-500/20 to-pink-600/20",
        iconColor: "text-rose-400",
        borderColor: "hover:border-rose-500/30",
        titleColor: "group-hover:text-rose-400",
        blobColors: "from-rose-600/10 to-pink-600/10",
        shadowColor: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)]"
      }
    },
    {
      icon: ClipboardList,
      title: "Call Summaries & Oversight",
      description: "Every interaction is logged and summarized, giving your team visibility into what happened on each call without listening to full recordings.",
      theme: {
        iconBg: "from-cyan-500/20 to-sky-600/20",
        iconColor: "text-cyan-400",
        borderColor: "hover:border-cyan-500/30",
        titleColor: "group-hover:text-cyan-400",
        blobColors: "from-cyan-600/10 to-sky-600/10",
        shadowColor: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
      }
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Real-World Applications
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            How FlowFront <br />
            Transforms <span className="gradient-text">Operations</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our AI receptionist is designed to handle the most critical communication bottlenecks in service-based businesses.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-10"></div>
        </div>

        {/* Use Case Cards */}
        <div className="space-y-8">
          {cases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              delay={index * 100}
              theme={useCase.theme}
            />
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-24 p-1 rounded-[40px] bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="bg-[#0b0c1e] rounded-[38px] p-10 md:p-16 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,128,255,0.05)_0%,transparent_70%)]"></div>
             <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Have a unique scenario?</h3>
             <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
               We've built custom workflows for medical clinics, law firms, and home services. Tell us how your business works, and we'll show you how the AI fits.
             </p>
             <button 
               className="gradient-btn px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 relative z-10"
               onClick={() => window.dispatchEvent(new CustomEvent('scroll-to-contact'))}
             >
               Discuss Your Use Case <ArrowRight size={22} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
