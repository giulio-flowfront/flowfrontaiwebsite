
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Setup from './components/Setup';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import UseCases from './components/UseCases';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'use-cases' | 'privacy' | 'terms'>('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Reset scroll when view changes
    window.scrollTo(0, 0);

    // Listener for custom events from other pages (like UseCases CTA)
    const handleScrollToContact = () => scrollToSection('contact');
    window.addEventListener('scroll-to-contact', handleScrollToContact);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll-to-contact', handleScrollToContact);
    };
  }, [view]);

  const scrollToSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      // Delay slightly to allow the DOM to render the home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUseCasesClick = () => {
    setView('use-cases');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrivacyClick = () => {
    setView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTermsClick = () => {
    setView('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030310] overflow-x-hidden selection:bg-blue-500/30">
      {/* Dynamic Cinematic Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="bg-orb animate-orb w-[700px] h-[700px] bg-blue-600/20 top-[-10%] left-[-10%]"></div>
        <div className="bg-orb animate-orb-alt w-[600px] h-[600px] bg-purple-600/15 top-[15%] right-[-5%]" style={{ animationDelay: '-7s' }}></div>
        <div className="bg-orb animate-orb w-[800px] h-[800px] bg-indigo-900/30 bottom-[-15%] left-[5%]" style={{ animationDelay: '-12s' }}></div>
        <div className="bg-orb animate-orb-alt w-[500px] h-[500px] bg-blue-400/10 top-[40%] left-[30%]" style={{ animationDelay: '-18s' }}></div>
        <div className="bg-orb animate-orb w-[450px] h-[450px] bg-purple-900/20 bottom-[10%] right-[10%]" style={{ animationDelay: '-3s' }}></div>
      </div>

      <Navbar 
        onLogoClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onPricingClick={() => scrollToSection('pricing-tiers')} 
        onContactClick={() => scrollToSection('contact')}
        onHowItWorksClick={() => scrollToSection('how-it-works')}
        onUseCasesClick={handleUseCasesClick}
      />
      
      <main className="transition-opacity duration-300 pt-16 md:pt-20">
        {view === 'home' && (
          <>
            <div className="reveal">
              <Hero onBookDemoClick={() => scrollToSection('contact')} />
            </div>
            <div className="reveal">
              <Features />
            </div>
            <div id="how-it-works" className="reveal">
              <Setup />
            </div>
            <div id="pricing" className="reveal">
              <Pricing onTalkToTeamClick={() => scrollToSection('contact')} />
            </div>
            <div id="contact" className="reveal">
              <Contact />
            </div>
          </>
        )}
        {view === 'about' && (
          <div className="pt-8">
            <AboutUs />
          </div>
        )}
        {view === 'use-cases' && (
          <div className="pt-8">
            <UseCases />
          </div>
        )}
        {view === 'privacy' && (
          <div className="pt-8">
            <PrivacyPolicy />
          </div>
        )}
        {view === 'terms' && (
          <div className="pt-8">
            <TermsOfService />
          </div>
        )}
      </main>

      <Footer 
        onPrivacyClick={handlePrivacyClick}
        onTermsClick={handleTermsClick}
      />
    </div>
  );
};

export default App;
