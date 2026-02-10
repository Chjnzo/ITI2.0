"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const properties = [
  {
    id: 1,
    title: "Penthouse San Vigilio",
    location: "Bergamo Alta",
    price: "€ 890k",
    sqm: "210",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Loft Industriale",
    location: "Centro",
    price: "€ 345k",
    sqm: "125",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Villa Contemporanea",
    location: "Gorle",
    price: "€ 1.2M",
    sqm: "450",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1"
  }
];

const PropertyBento = () => {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">Immobili Selezionati</h2>
            <p className="text-gray-400 mt-2 font-medium">Curated excellence • Zero fees</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#94b0ab] hover:gap-3 transition-all">
            Esplora Tutto <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {properties.map((prop) => (
            <motion.div
              key={prop.id}
              whileHover={{ y: -8 }}
              className={cn(
                "group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500",
                prop.span
              )}
            >
              <img 
                src={prop.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={prop.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                  0% Commissioni
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{prop.title}</h3>
                    <p className="text-white/60 text-sm flex items-center gap-1">
                      <MapPin size={14} /> {prop.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#94b0ab]">{prop.price}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{prop.sqm} m²</p>
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