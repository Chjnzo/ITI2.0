"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoHero = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:px-6 relative overflow-hidden">
      {/* Aurora Glow Effect - More diffused and large */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#94b0ab]/10 blur-[160px] rounded-full -z-10 opacity-60" />
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/40 backdrop-blur-md rounded-[32px] md:rounded-[48px] p-8 md:p-24 shadow-sm border border-white/40 overflow-hidden relative"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#94b0ab]/10 via-transparent to-transparent -z-10" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#94b0ab]/5 blur-3xl rounded-full" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#94b0ab]/10 border border-[#94b0ab]/20 rounded-full text-[#94b0ab] text-[10px] font-bold uppercase tracking-widest mb-8">
              <Sparkles size={12} /> L'immobiliare a Bergamo
            </div>
            
            <h1 className="text-5xl md:text-8xl font-sans font-bold text-[#1a1a1a] mb-8 leading-[1] tracking-tighter">
              <span className="tracking-[-0.05em]">Vendi casa a</span> <br />
              <span className="relative inline-block mt-4 px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl text-[#94b0ab] italic underline decoration-[#94b0ab]/30 decoration-wavy underline-offset-8 shadow-sm">
                zero provvigioni.
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed tracking-tight">
              Dimentica le vecchie agenzie. Un servizio premium per chi vende, senza costi nascosti e con la massima trasparenza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/vendi" className="w-full sm:w-auto h-16 px-10 bg-[#1a1a1a] text-white rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#94b0ab] transition-all shadow-xl shadow-black/5 group">
                Vendi il tuo Immobile
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/immobili" className="w-full sm:w-auto h-16 px-10 bg-white border-2 border-gray-100 text-[#1a1a1a] rounded-3xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all">
                Sfoglia Catalogo
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
              <span className="text-sm font-bold tracking-widest uppercase">Affidabilità</span>
              <span className="text-sm font-bold tracking-widest uppercase">Trasparenza</span>
              <span className="text-sm font-bold tracking-widest uppercase">Innovazione</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoHero;