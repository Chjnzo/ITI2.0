"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock } from 'lucide-react';

const ManifestoSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-white p-8 md:p-20 rounded-3xl md:rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#94b0ab]/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#94b0ab] uppercase mb-4 md:mb-6 block">
                I Nostri Numeri
              </span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8 text-[#1a1a1a]">
                La Scommessa <br className="hidden md:block" /> Vinta.
              </h2>
              <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                Diciotto mesi fa siamo nati con un'idea che in molti definivano impossibile. Oggi, con decine di case vendute e un tempo medio di vendita di soli 45 giorni, non siamo più un esperimento. Siamo la certezza a cui si affidano le famiglie bergamasche per proteggere e valorizzare il proprio patrimonio.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] p-6 md:p-10 rounded-3xl md:rounded-[40px] text-white flex flex-col justify-between group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#94b0ab] mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold tracking-tighter mb-1">45 Giorni</p>
                <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Media Vendita</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#94b0ab] p-6 md:p-10 rounded-3xl md:rounded-[40px] text-white flex flex-col justify-between group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-bold tracking-tighter mb-1">100%</p>
                <p className="text-[8px] md:text-[10px] font-bold text-white/60 uppercase tracking-widest">Case Vendute</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;