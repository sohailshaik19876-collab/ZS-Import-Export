
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Large Gold Circle with subtle honeycomb pattern */}
        <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] bg-gold-500/5 rounded-full border border-gold-500/10 blur-[1px] relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] scale-150"></div>
        </div>
        
        {/* Floating Light Rays */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h4 className="text-gold-500 font-sans tracking-[0.5em] uppercase text-xs mb-10 font-bold animate-pulse">
          Global Logistics Excellence
        </h4>
        
        <div className="flex flex-col items-center justify-center space-y-0 mb-10">
          <h1 className="text-6xl md:text-9xl font-serif font-bold leading-none tracking-tight">
            <span className="text-white">Bridging</span>
            <span className="block gold-gradient-text italic">Markets</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif italic text-white/60 lowercase py-4">
            with
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-[0.2em] uppercase text-gold-500">
            Absolute Precision
          </h3>
        </div>
        
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-14 leading-relaxed tracking-wide">
          Elevating global trade through uncompromising integrity and sophisticated logistical architecture. 
          <span className="text-gold-500/80 block mt-2">ZS Exports - Imports: Where world-class precision meets seamless execution.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <button 
            onClick={() => scrollToSection('contact')}
            className="gold-bg text-black px-12 py-5 rounded-sm font-bold flex items-center gap-3 group hover:scale-105 transition-all duration-300 uppercase tracking-[0.2em] text-xs shadow-xl shadow-gold-500/20"
          >
            START YOUR VENTURE
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="border-2 border-gold-500 text-gold-500 px-12 py-5 rounded-sm font-bold hover:bg-gold-500 hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-xs"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] tracking-[0.4em] text-gold-500 uppercase font-bold">Discover</span>
        <ChevronDown size={24} className="text-gold-500 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
