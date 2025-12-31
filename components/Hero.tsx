
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 md:pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-[120vw] h-[120vw] md:w-[90vw] md:h-[90vw] max-w-[900px] max-h-[900px] bg-gold-500/5 rounded-full border border-gold-500/10 blur-[1px] relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] scale-150"></div>
        </div>
        
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold-500/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gold-500/5 blur-[60px] md:blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h4 className="text-gold-500 font-sans tracking-[0.3em] md:tracking-[0.5em] uppercase text-[11px] md:text-xs mb-8 md:mb-10 font-black animate-pulse">
          Global Logistics Excellence
        </h4>
        
        <div className="flex flex-col items-center justify-center space-y-0 mb-8 md:mb-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold leading-none tracking-tight">
            <span className="text-white">Bridging</span>
            <span className="block gold-gradient-text italic">Markets</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-serif italic text-white/60 lowercase py-4 md:py-4">
            with
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-gold-500">
            Absolute Precision
          </h3>
        </div>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl font-light mb-12 md:mb-14 leading-relaxed tracking-wide px-4">
          Elevating global trade through uncompromising integrity and sophisticated logistical architecture. 
          <span className="text-gold-500/80 block mt-2 text-sm md:text-lg font-medium">ZS Exports - Imports: Where world-class precision meets seamless execution.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto gold-bg text-black px-10 md:px-12 py-5 md:py-5 rounded-sm font-bold flex items-center justify-center gap-3 group hover:scale-105 transition-all duration-300 uppercase tracking-[0.2em] text-[11px] md:text-xs shadow-xl shadow-gold-500/20"
          >
            START YOUR VENTURE
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="w-full sm:w-auto border-2 border-gold-500 text-gold-500 px-10 md:px-12 py-5 md:py-5 rounded-sm font-bold hover:bg-gold-500 hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-[11px] md:text-xs"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small heights */}
      <div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity hidden sm:flex"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-gold-500 uppercase font-bold">Discover</span>
        <ChevronDown size={20} className="text-gold-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
