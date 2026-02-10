"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
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
  }
];

const PropertyBento = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">In Evidenza</h2>
            <p className="text-gray-400 mt-1 font-medium">Selezionati • 0% commissioni</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#94b0ab] hover:gap-3 transition-all">
            Vedi Tutti <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {properties.map((prop) => (
            <motion.div
              key={prop.id}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[40px] overflow-hidden mb-4 shadow-md">
                <img 
                  src={prop.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={prop.title}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                    Zero Fees
                  </span>
                </div>
              </div>
              
              <div className="px-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a]">{prop.title}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} className="text-[#94b0ab]" /> {prop.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#94b0ab]">{prop.price}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{prop.sqm} m²</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <button className="md:hidden w-full h-14 border-2 border-gray-100 text-gray-400 rounded-2xl font-bold mt-4">
            Vedi Tutti gli Immobili
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyBento;