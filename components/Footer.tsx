
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#02020a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Logo - Left on desktop, center on mobile */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
            <div className="w-3.5 h-1.5 bg-white rounded-full rotate-45"></div>
          </div>
          <span className="text-lg font-bold tracking-tight">FlowFront <span className="text-[8px] text-gray-400 absolute ml-0.5 -mt-0.5 uppercase">AI</span></span>
        </div>

        {/* Links - Perfectly centered on desktop and mobile */}
        <div className="flex justify-center gap-8 text-xs font-medium text-gray-500 order-last md:order-none">
          <button onClick={onPrivacyClick} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={onTermsClick} className="hover:text-white transition-colors">Terms of Service</button>
        </div>

        {/* Contact Info - Right on desktop, center on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center md:justify-end text-xs font-medium text-gray-400">
          <a href="mailto:info@flowfrontai.com" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Mail size={14} />
            </div>
            info@flowfrontai.com
          </a>
          <a href="tel:+18136943155" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Phone size={14} />
            </div>
            +1 (813) 694-3155
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-[10px] text-gray-600">
        © 2026 FlowFront AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
