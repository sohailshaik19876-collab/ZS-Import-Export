
import React from 'react';
import { Leaf, ShoppingBag, Palette, Wheat, Box, Layers, Utensils } from 'lucide-react';

const ProductCard: React.FC<{ name: string, category: string, image: string, icon: React.ReactNode }> = ({ name, category, image, icon }) => (
  <div className="group relative overflow-hidden rounded-lg gold-border aspect-[4/5] bg-[#0A0A0A]">
    {/* Product Image */}
    <img 
      src={image} 
      alt={name} 
      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
      loading="eager"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800";
      }}
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-60"></div>
    
    <div className="absolute inset-0 p-8 flex flex-col justify-start items-start z-10">
      <div className="text-gold-500 mb-6 transform transition-transform duration-500 group-hover:-translate-y-1">
        {React.cloneElement(icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
      </div>
      
      <p className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        {category}
      </p>
      
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
        {name}
      </h3>
      
      <div className="h-1 w-12 bg-gold-500 transition-all duration-500 group-hover:w-24"></div>
    </div>

    <div className="absolute inset-0 ring-1 ring-gold-500/20 inset-ring opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
  </div>
);

const Products: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const products = [
    {
      name: "Fresh Vegetables",
      category: "Agro-Commodities",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf />
    },
    {
      name: "Premium Rice",
      category: "Agro-Commodities",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
      icon: <Wheat />
    },
    {
      name: "Exotic Mangoes",
      category: "Agro-Commodities",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
      icon: <Box />
    },
    {
      name: "Finest Spices",
      category: "Agro-Commodities",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
      icon: <Utensils />
    },
    {
      name: "Global FMCG",
      category: "Consumer Goods",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
      icon: <ShoppingBag />
    },
    {
      name: "Marbles & Granites",
      category: "Mineral Exports",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      icon: <Layers />
    },
    {
      name: "Artisan Handicrafts",
      category: "Specialty Goods",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
      icon: <Palette />
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h4 className="text-gold-500 font-sans tracking-[0.4em] uppercase text-xs mb-4">Export Excellence</h4>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none">
              Curated <span className="gold-gradient-text italic">Portfolio</span>
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gold-500/20 mx-12 mb-4"></div>
          <p className="text-gray-500 max-w-sm text-sm uppercase tracking-[0.2em] leading-relaxed text-left md:text-right">
            Sourcing the world's finest commodities with uncompromising standards and absolute logistics precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
          
          <div className="flex flex-col items-center justify-center p-10 gold-border rounded-lg bg-onyx group hover:bg-gold-500/5 transition-all duration-500 relative overflow-hidden aspect-[4/5]">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Box size={100} className="text-gold-500" />
             </div>
             <div className="text-gold-500 text-sm tracking-[0.4em] uppercase font-bold text-center mb-6 z-10">Bespoke Sourcing</div>
             <h3 className="text-2xl font-serif font-bold text-white text-center mb-6 z-10">Custom Solutions</h3>
             <p className="text-gray-500 text-xs text-center mb-8 leading-relaxed z-10 max-w-[200px]">
                Require specialized commodities not listed? Our global procurement network is at your service.
             </p>
             <button 
                onClick={scrollToContact}
                className="gold-bg text-black px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all z-10 shadow-lg shadow-gold-500/20"
              >
                Consult Our Experts
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
