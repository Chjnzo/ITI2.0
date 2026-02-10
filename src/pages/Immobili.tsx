"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, BedDouble, Bath } from 'lucide-react';
import { cn } from '@/lib/utils';
import { properties } from '@/data/properties';
import { MadeWithDyad } from "@/components/made-with-dyad";

const categories = ["Tutti", "Appartamenti", "Ville", "Loft"];

const Immobili = () => {
  const [filter, setFilter] = useState("Tutti");

  const filteredProperties = filter === "Tutti" 
    ? properties 
    : properties.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-none">Scatola dei <br />Sogni.</h1>
              <p className="text-lg text-gray-500 font-medium">Esplora le nostre proprietà selezionate a zero provvigioni.</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4">
              <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                      filter === cat 
                        ? "bg-[#94b0ab] text-white" 
                        : "text-gray-400 hover:text-[#1a1a1a] hover:bg-gray-50"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((prop) => (
                <motion.div
                  layout
                  key={prop.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link to={`/property/${prop.slug}`} className="block">
                    <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={prop.images[0]} 
                          alt={prop.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                            {prop.category}
                          </span>
                        </div>
                        <div className="absolute bottom-6 right-6">
                          <span className="px-6 py-3 bg-[#94b0ab] text-white rounded-full text-lg font-bold shadow-lg">
                            {prop.price}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#94b0ab] transition-colors">{prop.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-6 font-medium">
                          <MapPin size={16} className="text-[#94b0ab]" />
                          {prop.location}, Bergamo
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#1a1a1a]">
                              <Maximize2 size={14} className="text-[#94b0ab]" />
                              <span className="text-sm font-bold">{prop.specs.mq}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">mq</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#1a1a1a]">
                              <BedDouble size={14} className="text-[#94b0ab]" />
                              <span className="text-sm font-bold">{prop.specs.rooms}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Locali</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-[#1a1a1a]">
                              <Bath size={14} className="text-[#94b0ab]" />
                              <span className="text-sm font-bold">{prop.specs.baths}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Bagni</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
      <BottomDock />
    </div>
  );
};

export default Immobili;