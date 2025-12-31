
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          {/* Gold L-Border - Matching the luxury design language provided in visual references */}
          <div className="absolute -top-6 -left-6 w-1/3 h-1/3 border-l-2 border-t-2 border-gold-500/80 z-0"></div>
          
          <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-gold-500/20 bg-[#070707] flex flex-col items-center justify-center group-hover:border-gold-500/50 transition-all duration-700 shadow-2xl">
            {/* The Official ZS Brand Emblem */}
            <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-1000">
              <div className="text-[12rem] md:text-[15rem] font-serif font-bold gold-gradient-text leading-none select-none tracking-tighter opacity-90 group-hover:scale-105 transition-transform duration-1000">
                ZS
              </div>
              <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent -mt-2 mb-6"></div>
              <div className="text-gold-500 text-[11px] tracking-[0.7em] uppercase font-black opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                GLOBAL TRADE PARTNER
              </div>
            </div>
            
            {/* Subtle Metallic/Luxury Textures */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-gold-500/10 pointer-events-none opacity-50"></div>
            
            {/* Interactive Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out"></div>
          </div>

          {/* Excellence Badge - Professional badge matching the user's provided design exactly */}
          <div className="absolute -bottom-10 -right-6 md:-right-10 z-20">
            <div className="border-2 border-gold-500 p-10 md:p-14 rounded-sm text-center bg-black shadow-[30px_30px_60px_rgba(0,0,0,0.9)] min-w-[260px]">
              <div className="text-7xl md:text-8xl font-serif font-bold text-gold-500 leading-none mb-4">15+</div>
              <div className="text-[12px] tracking-[0.6em] uppercase text-white font-bold whitespace-nowrap">
                Years Excellence
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 pl-0 md:pl-20">
          <div className="space-y-4">
            <h4 className="text-gold-500 font-sans tracking-[0.5em] uppercase text-xs font-black">Our Heritage</h4>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Mastering the Art of <br/>
              <span className="gold-gradient-text italic font-normal">Global Sourcing</span>
            </h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-lg font-light max-w-xl">
            Founded on the principles of trust and absolute transparency, ZS Exports - Imports has evolved into a global benchmark for trade facilitation. We recognize that in international commerce, every shipment is a definitive promise of quality and precision.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-gold-500/20">
            <div className="space-y-4">
              <h4 className="text-gold-500 font-bold font-serif text-2xl">The Vision</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                To serve as the definitive bridge for high-stakes logistics, where uncompromising integrity meets innovative supply chain architecture.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-gold-500 font-bold font-serif text-2xl">Global Reach</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                Strategic presence across 6 continents, leveraging deep-rooted local intelligence to navigate the world's most complex market terrains.
              </p>
            </div>
          </div>
          
          <div className="pt-8">
            <button className="group flex items-center gap-8 text-gold-500 font-bold tracking-[0.5em] uppercase text-xs hover:text-white transition-all duration-500">
              <span className="border-b-2 border-gold-500 group-hover:border-white pb-2">Discover Our Story</span>
              <div className="w-16 h-px bg-gold-500 group-hover:w-24 group-hover:bg-white transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
