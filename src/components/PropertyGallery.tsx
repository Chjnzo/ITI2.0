"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const properties = [
  {
    id: 1,
    title: "Attico Vista Mura",
    location: "Città Alta",
    price: "€ 680k",
    sqm: "160",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Villa Contemporanea",
    location: "Gorle",
    price: "€ 1.2M",
    sqm: "350",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Loft Design",
    location: "Centro",
    price: "€ 425k",
    sqm: "110",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop"
  }
];

const PropertyGallery = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a]">Proposte in evidenza</h2>
            <p className="text-[#1a1a1a]/50 mt-2 font-medium">Scelte con cura per te.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-[#94b0ab] group">
            Vedi tutti <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={prop.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={prop.title}
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/60 backdrop-blur-md border border-white/20 rounded-full text-[#1a1a1a] text-xs font-bold shadow-sm">
                    {prop.location}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="px-6 py-3 bg-[#94b0ab] text-white rounded-full text-lg font-bold shadow-lg">
                    {prop.price}
                  </span>
                </div>
              </div>

              <div className="px-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{prop.title}</h3>
                <div className="flex items-center gap-4 text-[#1a1a1a]/40 text-sm font-medium">
                  <span className="flex items-center gap-1.5"><Maximize2 size={16} /> {prop.sqm} m²</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Bergamo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default PropertyGallery;