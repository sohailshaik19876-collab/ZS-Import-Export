
import React from 'react';
import { Ship, Plane, Shield, BarChart3, Globe2, Truck } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="glass-card p-8 rounded-lg hover:border-gold-500/50 transition-all duration-500 group">
    <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Sea Freight & Logistics",
      description: "Comprehensive maritime solutions connecting major ports worldwide with state-of-the-art container tracking and reliable scheduling.",
      icon: <Ship size={40} />
    },
    {
      title: "Air Expedited Cargo",
      description: "Priority air transport for time-sensitive high-value goods, ensuring your global supply chain never misses a beat.",
      icon: <Plane size={40} />
    },
    {
      title: "Customs & Compliance",
      description: "Expert navigation of international trade laws and custom regulations to ensure seamless border crossings without delay.",
      icon: <Shield size={40} />
    },
    {
      title: "Supply Chain Sourcing",
      description: "Direct connections with premium manufacturers globally to procure the highest quality materials and products for your business.",
      icon: <Globe2 size={40} />
    },
    {
      title: "Road Distribution",
      description: "Last-mile delivery and continental trucking networks that bridge the gap between ports and your warehouse floor.",
      icon: <Truck size={40} />
    },
    {
      title: "Trade Advisory",
      description: "Deep market insights and strategic consulting to help you identify new opportunities in the global trade landscape.",
      icon: <BarChart3 size={40} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-onyx">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-4">Elite Solutions</h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Tailored logistics and trade operations designed for modern industries. 
            We handle the complexity so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
