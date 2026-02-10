"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-44 pb-24 px-4 md:px-6 overflow-hidden bg-[#f8f9fa]">
      {/* Subtle Sage Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#94b0ab]/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 mb-8 text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase bg-[#94b0ab]/10 rounded-full">
            Il futuro dell'immobiliare è trasparente
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
            Vendi casa a <span className="text-[#94b0ab]">zero</span> provvigioni.
          </h1>
          <p className="text-lg md:text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            La nostra missione è semplificare la vendita immobiliare eliminando i costi superflui. Professionisti al tuo fianco, costo zero per te.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-14 px-10 bg-[#94b0ab] text-white rounded-full font-bold flex items-center gap-3 hover:bg-[#83a19b] transition-all shadow-lg shadow-[#94b0ab]/20 group">
              Richiedi Valutazione
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-14 px-10 border border-[#94b0ab] text-[#94b0ab] rounded-full font-bold hover:bg-[#94b0ab]/5 transition-all">
              Scopri come funziona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;