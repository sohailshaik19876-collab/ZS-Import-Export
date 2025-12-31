
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative group max-w-lg mx-auto md:max-w-none w-full">
          {/* Gold L-Border */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-1/4 h-1/4 border-l-2 border-t-2 border-gold-500/80 z-0"></div>
          
          <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-gold-500/20 bg-[#070707] flex flex-col items-center justify-center group-hover:border-gold-500/50 transition-all duration-700 shadow-2xl">
            {/* The Official ZS Brand Emblem - Enhanced Mobile Size */}
            <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-1000 px-4">
              <div className="text-[10rem] sm:text-[12rem] md:text-[15rem] font-serif font-bold gold-gradient-text leading-none select-none tracking-tighter opacity-95 group-hover:scale-105 transition-transform duration-1000 drop-shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                ZS
              </div>
              <div className="h-0.5 w-32 md:w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent -mt-2 md:-mt-2 mb-4 md:mb-6"></div>
              <div className="text-gold-500 text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.7em] uppercase font-black opacity-60 group-hover:opacity-100 transition-opacity duration-700 text-center">
                GLOBAL TRADE PARTNER
              </div>
            </div>
            
            {/* Subtle Metallic/Luxury Textures */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-gold-500/10 pointer-events-none opacity-50"></div>
            
            {/* Interactive Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out"></div>
          </div>

          {/* Excellence Badge - Made significantly bigger on mobile */}
          <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 z-20 scale-90 sm:scale-95 md:scale-100 origin-bottom-right">
            <div className="border-2 border-gold-500 p-8 md:p-14 rounded-sm text-center bg-black shadow-[15px_15px_40px_rgba(0,0,0,1)] md:shadow-[30px_30px_60px_rgba(0,0,0,0.9)] min-w-[190px] md:min-w-[260px]">
              <div className="text-6xl md:text-8xl font-serif font-bold text-gold-500 leading-none mb-2 md:mb-4">5+</div>
              <div className="text-[10px] md:text-[12px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-white font-bold whitespace-nowrap">
                Years Excellence
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12 pl-0 md:pl-12 lg:pl-20 mt-12 md:mt-0">
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <h4 className="text-gold-500 font-sans tracking-[0.4em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs font-black">Our Heritage</h4>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              Mastering the Art of <br/>
              <span className="gold-gradient-text italic font-normal">Global Sourcing</span>
            </h2>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light max-w-xl mx-auto md:mx-0 text-center md:text-left">
            Founded on the principles of trust and absolute transparency, ZS Exports - Imports has evolved into a global benchmark for trade facilitation. We recognize that in international commerce, every shipment is a definitive promise of quality.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t border-gold-500/20">
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
              <h4 className="text-gold-500 font-bold font-serif text-xl md:text-2xl">The Vision</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                To serve as the definitive bridge for high-stakes logistics, where uncompromising integrity meets innovative supply chain architecture.
              </p>
            </div>
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
              <h4 className="text-gold-500 font-bold font-serif text-xl md:text-2xl">Global Reach</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-light">
                Strategic presence across 6 continents, leveraging deep-rooted local intelligence to navigate the world's complex market terrains.
              </p>
            </div>
          </div>
          
          <div className="pt-4 md:pt-8 flex justify-center md:justify-start">
            <button className="group flex items-center gap-4 md:gap-8 text-gold-500 font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs hover:text-white transition-all duration-500">
              <span className="border-b-2 border-gold-500 group-hover:border-white pb-2">Discover Our Story</span>
              <div className="w-10 md:w-16 h-px bg-gold-500 group-hover:w-24 group-hover:bg-white transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
