
import React from 'react';

interface NavbarProps {
  onPricingClick: () => void;
  onContactClick: () => void;
  onAboutClick?: () => void;
  onLogoClick?: () => void;
  onHowItWorksClick?: () => void;
  onUseCasesClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onPricingClick, 
  onContactClick, 
  onAboutClick, 
  onLogoClick,
  onHowItWorksClick,
  onUseCasesClick
}) => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-[60] w-full px-4 md:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto glass rounded-full px-4 md:px-8 py-3 flex justify-between items-center pointer-events-auto border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        {/* Logo */}
        <div 
          onClick={onLogoClick}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-blue-400 blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="w-5 h-2 bg-white rounded-full rotate-45 relative z-10"></div>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight hidden sm:inline-block">
            FlowFront <span className="text-[10px] text-gray-400 absolute ml-0.5 -mt-1">AI</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-300">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={onHowItWorksClick} className="hover:text-white transition-colors">How it Works</button>
            <button onClick={onUseCasesClick} className="hover:text-white transition-colors">Use Cases</button>
            <button onClick={onAboutClick} className="hover:text-white transition-colors">About Us</button>
            <button onClick={onPricingClick} className="hover:text-white transition-colors">Pricing</button>
          </div>
          
          {/* Contact Button */}
          <button 
            onClick={onContactClick}
            className="px-5 md:px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all text-white font-semibold shadow-inner"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
