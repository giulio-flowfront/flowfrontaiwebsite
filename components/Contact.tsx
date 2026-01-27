import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The setup was incredibly easy. I just described my business, and the AI started taking calls the next afternoon.",
    author: "Dr. Giulio Caruso",
    business: "Riverside Physical Medicine",
    image: "https://github.com/giulio-flowfront/FlowFront-Images/blob/main/Big%20G%20lab%20coat.png?raw=true"
  },
  {
    quote: "FlowFront has reduced our front desk stress by 50%. It's like having an extra team member who never sleeps.",
    author: "Sarah Jenkins",
    business: "Coastal Dental Practice",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "The AI handles our intake calls perfectly. It's professional, efficient, and integrated seamlessly with our CRM.",
    author: "Marcus Thorne",
    business: "Thorne Law Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    quote: "Capture rates went up immediately. We're booking jobs while we're out in the field without picking up the phone.",
    author: "David Chen",
    business: "Prime Home Services",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndices, setCurrentIndices] = useState({ front: 0, back: 1 });
  
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: ''
  });

  // Testimonial Flip Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => {
        const nextFlipped = !prev;
        setTimeout(() => {
          setCurrentIndices(curr => {
            if (nextFlipped) {
              return { ...curr, front: (curr.back + 1) % testimonials.length };
            } else {
              return { ...curr, back: (curr.front + 1) % testimonials.length };
            }
          });
        }, 600);
        return nextFlipped;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
      value = formatPhoneNumber(value);
    }
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FormSubmit.co endpoint - FREE email service
      const response = await fetch("https://formsubmit.co/ajax/info@flowfrontai.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New FlowFront AI Lead: ${formData.business}`
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', business: '', phone: '', email: '', message: '' });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
      setIsSubmitting(false);
    }
  };

  const TestimonialFace = ({ testimonial, isBack = false }: { testimonial: typeof testimonials[0], isBack?: boolean }) => (
    <div className={`absolute inset-0 w-full h-full backface-hidden ${isBack ? 'rotate-y-180' : ''}`}>
      <div className="glass h-full p-8 rounded-[32px] border-l-4 border-blue-500 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl">
        <div className="shrink-0 relative">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-16 h-16 rounded-full border-2 border-blue-500/30 object-cover shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white border-2 border-[#030310]">
            <CheckCircle2 size={12} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
            <span className="text-[8px] font-bold text-gray-500 ml-2 uppercase tracking-tighter">Verified Client</span>
          </div>
          <p className="text-gray-200 italic mb-4 leading-relaxed text-sm md:text-base">
            "{testimonial.quote}"
          </p>
          <p className="text-blue-400 font-bold text-xs md:text-sm">— {testimonial.author}, {testimonial.business}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            See if FlowFront fits <br />
            <span className="gradient-text">your business.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
            We know every service business runs differently. That's why we don't just give you a login and wish you luck.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-purple-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-bold">Personalized Demo</h4>
                <p className="text-sm text-gray-500">We'll walk you through how the AI would handle your specific client scenarios.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold">Simple Setup Chat</h4>
                <p className="text-sm text-gray-500">No technical integration required. We just need to know how you want your phones answered.</p>
              </div>
            </div>
          </div>

          {/* 3D Flipping Testimonial Container */}
          <div className="relative w-full h-[220px] md:h-[180px] perspective-[1000px] mb-12">
            <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              <TestimonialFace testimonial={testimonials[currentIndices.front]} />
              <TestimonialFace testimonial={testimonials[currentIndices.back]} isBack />
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="relative">
          <div className={`glass p-10 rounded-[40px] border border-white/5 transition-all duration-500 ${isSubmitted ? 'opacity-20 blur-sm pointer-events-none' : 'opacity-100'}`}>
            <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Business Name</label>
                  <input 
                    required 
                    type="text" 
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Acme Clinic" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    required 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">How can we help?</label>
                <textarea 
                  required
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in booking appointments automatically..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 gradient-btn rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : <>Request a Demo <Send size={18} /></>}
              </button>
              <p className="text-center text-[10px] text-gray-500">No commitment required. We respect your privacy.</p>
            </form>
          </div>

          {/* Success Popup */}
          {isSubmitted && (
            <div className="absolute inset-0 flex items-center justify-center z-10 animate-in fade-in zoom-in duration-300">
              <div className="glass p-10 rounded-[40px] border border-blue-500/30 text-center max-w-sm shadow-[0_0_50px_rgba(79,128,255,0.2)]">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Thank you for your interest in FlowFront AI. Your details have been sent to our team, and we will reach out shortly to schedule your personalized demo.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}} />
    </section>
  );
};

export default Contact;
