"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

const stories = [
  {
    type: "Vendita Rapida",
    title: "Trilocale a Ranica",
    result: "Venduto in 28 giorni al 100% del prezzo richiesto.",
    color: "bg-white"
  },
  {
    type: "Valore Massimo",
    title: "Villa Indipendente",
    result: "Trattativa gestita con 3 acquirenti simultanei. Zero provvigioni per il venditore.",
    color: "bg-white"
  }
];

const TestimonialsBento = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Social Proof</span>
          <h2 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] tracking-tighter mb-4 md:mb-6">I fatti parlano.</h2>
          <p className="text-base md:text-xl text-gray-500 font-medium">
            Non lo diciamo noi, lo dicono i risultati ottenuti per i nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-[#1a1a1a] p-8 md:p-10 rounded-3xl md:rounded-[48px] text-white flex flex-col justify-between group"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#94b0ab] text-[#94b0ab]" />
                ))}
              </div>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">4.9/5</h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Rating Google</p>
            </div>
            <div className="mt-8 md:mt-12">
              <p className="text-base md:text-lg font-medium text-gray-300 leading-relaxed italic">
                "Professionalità rara e metodo davvero innovativo. Hanno venduto il mio appartamento senza costi di agenzia per me."
              </p>
              <p className="mt-4 text-[#94b0ab] font-bold text-xs">— Laura B., Bergamo</p>
            </div>
          </motion.div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {stories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl md:rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                    <span className="text-[9px] md:text-[10px] font-bold text-[#94b0ab] uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 bg-[#94b0ab]/10 rounded-full">
                      {story.type}
                    </span>
                    <ArrowUpRight size={18} className="text-gray-200 group-hover:text-[#94b0ab] transition-colors" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 md:mb-4 tracking-tight">{story.title}</h4>
                  <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                    {story.result}
                  </p>
                </div>
                <div className="mt-8 md:mt-12 flex items-center gap-2 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                   Case Study <div className="w-8 md:w-12 h-[1px] bg-[#1a1a1a]" />
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#94b0ab] p-8 md:p-10 rounded-3xl md:rounded-[48px] text-white flex items-center gap-6 md:gap-8"
            >
              <div className="hidden md:flex w-20 h-20 bg-white/20 rounded-full items-center justify-center shrink-0">
                <Quote size={32} className="fill-white" />
              </div>
              <p className="text-lg md:text-2xl font-bold tracking-tight leading-snug">
                "Più di 500 clienti hanno già scelto di vendere casa a Bergamo senza pagare provvigioni."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBento;