
import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-onyx">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Connect with <span className="text-gold-500">Our Experts</span></h2>
              <p className="text-gray-400 max-w-md">
                Ready to optimize your global operations? Our team in Hyderabad is standing by to provide a personalized consultation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-full text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif mb-1">Call Us</h4>
                  <p className="text-gray-500 tracking-wide">+91 88858 96991</p>
                  <p className="text-gray-500 tracking-wide">+91 80081 96661</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-full text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif mb-1">Email</h4>
                  <p className="text-gray-500">hello@zsimpex.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-full text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif mb-1">Official Web</h4>
                  <p className="text-gray-500">zsimpex.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 glass-card rounded-full text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold font-serif mb-1">Corporate Office</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Opp Duaa Global School, Attapur,<br />
                    Hyderabad, TS 500052
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-xl border-gold-500/20 shadow-2xl shadow-black">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 uppercase tracking-widest">Send an Inquiry</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-black border border-gray-800 rounded-sm p-4 text-white focus:border-gold-500 outline-none transition-all placeholder-gray-700" placeholder="ENTER NAME" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Email Address</label>
                  <input type="email" className="w-full bg-black border border-gray-800 rounded-sm p-4 text-white focus:border-gold-500 outline-none transition-all placeholder-gray-700" placeholder="EMAIL@COMPANY.COM" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Products Required</label>
                <div className="relative group">
                  <select className="w-full bg-black border border-gold-500/40 group-hover:border-gold-500 rounded-sm p-4 text-white focus:border-gold-500 outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-black">SELECT A PRODUCT CATEGORY</option>
                    <option className="bg-black">FRESH VEGETABLES</option>
                    <option className="bg-black">PREMIUM RICE (BASMATI & NON-BASMATI)</option>
                    <option className="bg-black">EXOTIC MANGOES</option>
                    <option className="bg-black">ORGANIC HONEY</option>
                    <option className="bg-black">FINEST SPICES</option>
                    <option className="bg-black">MARBLES & GRANITES</option>
                    <option className="bg-black">GLOBAL FMCG GOODS</option>
                    <option className="bg-black">ARTISAN HANDICRAFTS</option>
                    <option className="bg-black">OTHER / BESPOKE SOURCING</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">Message</label>
                <textarea rows={4} className="w-full bg-black border border-gray-800 rounded-sm p-4 text-white focus:border-gold-500 outline-none transition-all placeholder-gray-700" placeholder="BRIEFLY DESCRIBE YOUR VOLUME AND FREQUENCY REQUIREMENTS..."></textarea>
              </div>
              
              <button className="w-full gold-bg text-black py-4 rounded-sm font-bold uppercase tracking-[0.4em] text-xs hover:brightness-110 transition-all shadow-lg shadow-gold-500/20 active:scale-95">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
