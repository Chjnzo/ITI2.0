"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, Bed, Bath } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Attico Vista Mura",
    zone: "Città Alta",
    price: "€ 680k",
    specs: { mq: 160, beds: 3, baths: 2 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    size: "md:col-span-2"
  },
  {
    id: 2,
    title: "Villa nel Parco",
    zone: "Torre Boldone",
    price: "€ 1.2M",
    specs: { mq: 350, beds: 5, baths: 4 },
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 3,
    title: "Loft Design",
    zone: "Centro Storico",
    price: "€ 425k",
    specs: { mq: 110, beds: 2, baths: 2 },
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    size: "md:col-span-1"
  },
  {
    id: 4,
    title: "Terratetto Moderno",
    zone: "Ranica",
    price: "€ 310k",
    specs: { mq: 145, beds: 3, baths: 2 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    size: "md:col-span-2"
  }
];

const PropertyGallery = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-4">Immobili in Evidenza</h2>
            <p className="text-xl text-gray-500">Una selezione curata delle migliori opportunità immobiliari a zero provvigioni.</p>
          </div>
          <button className="px-8 py-4 border-2 border-[#0f172a] text-[#0f172a] rounded-2xl font-bold hover:bg-[#0f172a] hover:text-white transition-all">
            Vedi tutto il catalogo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn("group relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden bg-gray-100", prop.size)}
            >
              <img 
                src={prop.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt={prop.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Zone Overlay */}
              <div className="absolute top-8 left-8">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                  {prop.zone}
                </span>
              </div>

              {/* Hover Details */}
              <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-1">{prop.title}</h3>
                    <p className="text-white/60 flex items-center gap-2"><MapPin size={16} /> Bergamo</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-serif font-black text-[#f97316]">{prop.price}</p>
                  </div>
                </div>

                <div className="flex gap-8 border-t border-white/10 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <div className="flex items-center gap-2 text-white/80">
                    <Maximize2 size={18} /> <span className="text-sm font-bold uppercase tracking-tighter">{prop.specs.mq} m²</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Bed size={18} /> <span className="text-sm font-bold uppercase tracking-tighter">{prop.specs.beds} Camere</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Bath size={18} /> <span className="text-sm font-bold uppercase tracking-tighter">{prop.specs.baths} Bagni</span>
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

export default PropertyGallery;