"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoHero = () => {
  return (
    <section className="relative pt-44 pb-24 px-4 md:px-6 overflow-hidden bg-[#f8f9fa]">
      {/* Aurora Glow Effect - Large and diffused background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#94b0ab]/10 blur-[160px] rounded-full -z-10 opacity-60" />
      
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#94b0ab]/10 border border-[#94b0ab]/20 rounded-full text-[#94b0ab] text-[10px] font-bold uppercase tracking-widest mb-10">
            <Sparkles size={12} /> L'immobiliare a Bergamo
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-[#1a1a1a] mb-10 leading-[1.1] tracking-tighter max-w-5xl mx-auto">
            <span className="tracking-[-0.05em]">Vendi casa a</span> <br />
            <span className="relative inline-block mt-4 px-8 py-3 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] text-[#94b0ab] italic underline decoration-[#94b0ab]/30 decoration-wavy underline-offset-8 shadow-xl shadow-black/5">
              zero provvigioni.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Dimentica le vecchie agenzie. Un servizio premium per chi vende, senza costi nascosti e con la massima trasparenza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/vendi" className="w-full sm:w-auto h-16 px-12 bg-[#1a1a1a] text-white rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#94b0ab] transition-all shadow-2xl shadow-black/10 group">
              Vendi il tuo Immobile
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/immobili" className="w-full sm:w-auto h-16 px-12 bg-white border-2 border-gray-100 text-[#1a1a1a] rounded-3xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all">
              Sfoglia Catalogo
            </Link>
          </div>

          <div className="mt-24 flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale">
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Affidabilità</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Trasparenza</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Innovazione</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoHero;