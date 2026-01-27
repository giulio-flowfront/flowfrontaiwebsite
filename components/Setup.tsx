
import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, Activity, CheckCircle2, ChevronRight, FileText, Headphones } from 'lucide-react';

const Setup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Connect Your Phone System",
      description: "FlowFront integrates with your existing phone number or provides a dedicated line to handle missed, after-hours, or all incoming calls seamlessly.",
    },
    {
      id: 2,
      title: "AI Receptionist Setup",
      description: "Our team configures your AI receptionist using your business information, services, hours, and call-handling rules to ensure professional and accurate responses.",
    },
    {
      id: 3,
      title: "Calendar & Scheduling Integration",
      description: "We connect FlowFront to your calendar or booking software so appointments can be booked, rescheduled, or canceled automatically based on real availability.",
    },
    {
      id: 4,
      title: "Ongoing Call Handling & Monitoring",
      description: "FlowFront answers calls 24/7, manages appointments, and provides call recordings and summaries so your team stays informed without handling every call.",
    }
  ];

  const renderVisual = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full animate-pulse"></div>
              <div className="glass w-24 h-40 rounded-3xl border-2 border-white/20 flex flex-col p-3 relative z-10">
                <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-blue-500/40 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2/3 bg-blue-500/20 rounded-full"></div>
                </div>
                <div className="mt-auto flex justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    <Phone size={10} fill="white" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
                    <CheckCircle2 size={10} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-widest">Connection Live</p>
              <p className="text-gray-400 text-xs">Integrating with your phone system</p>
            </div>
            <div className="flex items-center gap-1 h-8">
               {[...Array(16)].map((_, i) => (
                 <div 
                   key={i} 
                   className="w-1 bg-blue-400 rounded-full animate-audio-wave" 
                   style={{ 
                     animationDelay: `${i * 0.08}s`,
                     animationDuration: `${0.8 + Math.random() * 0.5}s`
                   }}
                 ></div>
               ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 w-full max-w-[320px] animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="bg-[#1e2330] p-4 rounded-2xl rounded-tl-none border border-white/10 relative shadow-xl">
              <span className="text-[10px] font-bold text-blue-400 mb-1 block uppercase tracking-tighter">Business Intelligence</span>
              <p className="text-xs leading-relaxed text-blue-100 font-mono">
                "Hi, thank you for calling Riverside Chiropractic. This is Beth speaking, how can I help you today?"
              </p>
              <div className="absolute -right-2 -top-2 w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"><MessageSquare size={14} /></div>
            </div>

            <div className="glass p-4 rounded-2xl border border-white/5 ml-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Configuration Applied</p>
                <p className="text-xs text-gray-200">Services, Hours & FAQ Rules</p>
              </div>
            </div>

            <div className="flex items-center gap-1 pt-4 h-12 justify-center">
               {[...Array(24)].map((_, i) => (
                 <div 
                   key={i} 
                   className="w-1 bg-purple-500/60 rounded-full animate-audio-wave" 
                   style={{ 
                     animationDelay: `${i * 0.05}s`,
                     animationDuration: `${0.7 + Math.random() * 0.7}s`
                   }}
                 ></div>
               ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-[300px] mx-auto animate-in fade-in zoom-in duration-500">
            <div className="glass p-5 rounded-[32px] border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Calendar size={48} />
              </div>
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-xs font-bold tracking-tight">Syncing Real-Time Availability</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-[10px] font-medium">New Appt: 10:00 AM (Tue)</span>
                  </div>
                  <span className="text-[8px] font-bold text-blue-400">CONFIRMED</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 opacity-50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <span className="text-[10px] font-medium">Follow-up: 4:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                  <Calendar size={12} className="text-blue-400" />
                </div>
                <p className="text-[10px] text-gray-400">Google Calendar Connected</p>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between px-2 mb-2">
              <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Monitoring</h5>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] text-blue-400">Live 24/7</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="glass p-3 rounded-2xl border-white/10 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Headphones size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white">Call Recording #843</p>
                    <p className="text-[8px] text-gray-500">Today • Client: William S.</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                   {[...Array(8)].map((_, i) => (
                     <div key={i} className="w-0.5 h-3 bg-blue-400/40 rounded-full group-hover:bg-blue-400 transition-colors"></div>
                   ))}
                </div>
              </div>

              <div className="glass p-3 rounded-2xl border-white/10 flex items-start gap-3 bg-gradient-to-r from-purple-500/5 to-transparent">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Activity size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-tighter">AI Summary</p>
                  <p className="text-[10px] text-gray-300 leading-snug">"New patient William Smith booked for Tuesday at 10 AM. Intake phone number captured: (732) 544-5678."</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-4 border-t border-white/5">
               <div className="text-center">
                 <p className="text-lg font-bold">100%</p>
                 <p className="text-[7px] text-gray-500 uppercase font-black">Uptime</p>
               </div>
               <div className="text-center border-l border-white/10 pl-6">
                 <p className="text-lg font-bold">Inst.</p>
                 <p className="text-[7px] text-gray-500 uppercase font-black">Response</p>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Visual Panel */}
        <div className="glass rounded-[48px] p-10 min-h-[460px] flex items-center justify-center relative overflow-hidden custom-shadow border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 -z-10"></div>
          
          <div className="relative w-full flex items-center justify-center">
            {renderVisual()}
          </div>

          {/* Decorative Corner Orbs */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none"></div>
        </div>

        {/* Text and Steps */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            How FlowFront <br />
            <span className="gradient-text">AI Works</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Our implementation process is designed to be seamless. We handle the technical heavy lifting so you can start benefiting from an AI receptionist in as little as 24 hours.
          </p>

          <div className="space-y-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex gap-6 items-start text-left p-5 rounded-[32px] transition-all duration-300 border ${
                  activeStep === step.id 
                    ? 'bg-blue-500/10 border-blue-500/30 shadow-xl shadow-blue-500/5 translate-x-2' 
                    : 'bg-transparent border-transparent hover:bg-white/5'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'glass border border-white/10 text-gray-500'
                }`}>
                  {step.id}
                </div>
                <div className="pt-1">
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${
                    activeStep === step.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-sm leading-relaxed transition-colors ${
                    activeStep === step.id ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes audio-wave {
          0%, 100% { height: 15%; }
          50% { height: 100%; }
        }
        .animate-audio-wave {
          animation: audio-wave 1.2s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Setup;
