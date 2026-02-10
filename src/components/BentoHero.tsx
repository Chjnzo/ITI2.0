"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

const tags = ["Zero Provvigioni", "Viste Panoramiche", "Bergamo Alta", "Smart Working Ready", "Giardino Privato"];

const BentoHero = () => {
  return (
    <section className="pt-28 pb-12 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-gray-100 overflow-hidden relative"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#94b0ab]/10 blur-[120px] rounded-full -mr-20 -mt-20" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-sans font-bold text-[#1a1a1a] mb-8 leading-[1.1] tracking-tighter">
              Trova la tua casa ideale, <br />
              <span className="text-[#94b0ab] italic">senza compromessi.</span>
            </h1>
            
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="text-gray-400 group-focus-within:text-[#94b0ab] transition-colors" size={24} />
              </div>
              <input 
                type="text" 
                placeholder="Appartamento luminoso a Bergamo con terrazzo..."
                className="w-full h-20 pl-16 pr-6 bg-gray-50 border-2 border-transparent focus:border-[#94b0ab]/20 focus:bg-white rounded-[24px] text-lg transition-all outline-none shadow-inner"
              />
              <button className="absolute right-3 top-3 bottom-3 px-6 bg-[#1a1a1a] text-white rounded-[18px] font-medium hover:bg-[#94b0ab] transition-all flex items-center gap-2">
                <Sparkles size={18} />
                <span className="hidden sm:inline">AI Search</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-[#94b0ab] hover:text-[#94b0ab] cursor-pointer transition-all shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoHero;