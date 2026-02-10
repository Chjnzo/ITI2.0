"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 md:px-6 bg-[#FAFAF9]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-[0.2em] text-[#f97316] uppercase border border-[#f97316]/20 rounded-full">
              L'immobiliare evoluto a Bergamo
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif font-black text-[#0f172a] leading-[0.85] tracking-tighter mb-8">
              Vendi Casa a <br />
              <span className="text-[#f97316] italic relative">
                ZERO
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  className="absolute bottom-4 left-0 h-4 bg-[#f97316]/10 -z-10"
                />
              </span> <br />
              Provvigioni.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl font-light leading-relaxed">
              Rivoluzioniamo il mercato con un approccio trasparente, tecnologico e totalmente gratuito per chi vende.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                alt="Modern Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <button className="w-full py-6 bg-white text-[#0f172a] rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#f97316] hover:text-white transition-all duration-300 group">
                  Valuta il tuo immobile
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;