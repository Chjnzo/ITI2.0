"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

const tags = ["Zero Provvigioni", "Bergamo Alta", "Giardino Privato"];

const BentoHero = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-16 shadow-sm border border-gray-100 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#94b0ab]/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-sans font-bold text-[#1a1a1a] mb-6 md:mb-8 leading-[1.1] tracking-tighter">
              La tua casa, <br />
              <span className="text-[#94b0ab] italic">senza compromessi.</span>
            </h1>
            
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Appartamento a Bergamo..."
                className="w-full h-14 md:h-20 pl-14 pr-6 bg-gray-50 border-2 border-transparent focus:border-[#94b0ab]/20 focus:bg-white rounded-2xl md:rounded-[24px] text-base md:text-lg transition-all outline-none"
              />
              <button className="hidden sm:flex absolute right-3 top-3 bottom-3 px-6 bg-[#1a1a1a] text-white rounded-[18px] font-medium items-center gap-2">
                <Sparkles size={18} /> AI Search
              </button>
            </div>

            <button className="sm:hidden w-full mt-4 h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold flex items-center justify-center gap-2">
              <Sparkles size={18} /> AI Search
            </button>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoHero;