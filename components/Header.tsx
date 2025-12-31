
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-gold-500/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={(e) => scrollToSection(e, 'root')}>
          <div className="text-3xl font-serif font-bold gold-gradient-text tracking-tighter">ZS</div>
          <div className="hidden sm:block h-8 w-px bg-gold-500/30"></div>
          <div className="hidden sm:block text-[10px] tracking-widest text-gold-500 font-sans font-semibold uppercase">
            Exports<br/>Imports
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="gold-bg text-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Inquire Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-onyx border-t border-gold-500/20 py-8 px-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                className="text-xl font-serif text-gold-500"
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="gold-bg text-black px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
