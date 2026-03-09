"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const BentoHero = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/?scroll=contatti');
    }
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:pt-44 md:pb-24 md:px-6 overflow-hidden bg-[#f8f9fa]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#94b0ab]/10 blur-[160px] rounded-full -z-10 opacity-60" />
      
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-100 rounded-full text-[#94b0ab] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12 shadow-sm">
            <Sparkles size={12} /> L'Agenzia di Riferimento a Bergamo
          </div>
          
          <h1 className="text-5xl md:text-9xl font-bold text-[#1a1a1a] mb-8 md:mb-10 leading-[0.95] tracking-tighter max-w-5xl mx-auto">
            Vendi casa a <br />
            <span className="text-[#94b0ab] italic">zero provvigioni.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 font-medium mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Un servizio premium per chi vende, basato sui dati e senza costi nascosti. La tranquillità di un'agenzia tradizionale, ma con zero provvigioni a tuo carico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto h-16 px-12 bg-[#1a1a1a] text-white rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#94b0ab] transition-all shadow-2xl shadow-black/5 group"
            >
              Richiedi Valutazione
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/immobili" className="w-full sm:w-auto h-16 px-12 bg-white border-2 border-gray-100 text-[#1a1a1a] rounded-3xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all">
              Sfoglia Catalogo
            </Link>
          </div>

          <div className="mt-20 md:mt-24 flex flex-wrap justify-center gap-8 md:gap-20 opacity-20 grayscale">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Autorità</span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Trasparenza</span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Risultati Reali</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoHero;