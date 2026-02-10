"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, Sparkles, TrendingUp } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Penthouse San Vigilio",
    location: "Bergamo Alta",
    price: "€ 890.000",
    sqm: "210",
    tags: ["☀️ Soleggiato", "🍷 Cantina"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Loft Industriale",
    location: "Centro",
    price: "€ 345.000",
    sqm: "125",
    tags: ["🚆 5min Stazione"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Villa Contemporanea",
    location: "Gorle",
    price: "€ 1.2M",
    sqm: "450",
    tags: ["🌳 Parco", "🏊 Piscina"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2"
  }
];

const PropertyBento = () => {
  return (
    <section id="immobili" className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0a2540]">Immobili Selezionati</h2>
            <p className="text-gray-500 mt-2 font-mono uppercase tracking-tighter">Curated excellence • Zero fees</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-medium text-blue-600 hover:gap-3 transition-all">
            Esplora Tutto <Maximize2 size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <motion.div
              key={prop.id}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm",
                prop.span
              )}
            >
              <div className="h-full flex flex-col">
                <div className="relative flex-grow overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {prop.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4">
                     <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest">
                       0% Provvigioni
                     </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-[#0a2540]">{prop.title}</h3>
                      <p className="text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin size={14} /> {prop.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-mono font-bold text-[#0a2540]">{prop.price}</p>
                      <p className="text-xs font-mono text-gray-400 mt-1">{prop.sqm} m²</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyBento;