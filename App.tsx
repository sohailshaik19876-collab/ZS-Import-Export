
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Products from './components/Products';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        
        {/* Statistics Section */}
        <section className="py-20 border-y border-gold-500/10 bg-black">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Annual Tonnage', value: '450k+' },
              { label: 'Active Routes', value: '1,200' },
              { label: 'Industry Partners', value: '850' },
              { label: 'Compliance Rating', value: '99.9%' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-16 bg-black border-t border-gold-500/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-serif font-bold gold-gradient-text tracking-tighter">ZS</div>
                <div className="text-[11px] tracking-[0.3em] text-gold-500 font-sans font-semibold uppercase">
                  Exports - Imports
                </div>
              </div>
              <p className="text-gray-500 text-xs tracking-widest text-center md:text-left">
                PREMIUM GLOBAL LOGISTICS & TRADE SOLUTIONS
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <a href="mailto:hello@zsimpex.com" className="text-gold-500 font-serif text-lg hover:text-white transition-colors">
                hello@zsimpex.com
              </a>
              <div className="text-gray-600 text-[10px] tracking-[0.4em] uppercase">
                Hyderabad | Telangana | India
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-700 text-[10px] tracking-widest uppercase">
              © 2025 ZS Exports - Imports Global. All rights reserved.
            </div>

            <div className="flex space-x-8">
              {['LinkedIn', 'Instagram', 'WhatsApp'].map(social => (
                <a key={social} href="#" className="text-[10px] tracking-widest uppercase text-gold-700 hover:text-gold-500 transition-colors font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatWidget />
    </div>
  );
};

export default App;
