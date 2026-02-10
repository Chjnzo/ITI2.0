"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Rivoluzioniamo il Mercato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a2540] leading-tight mb-6">
              SEI STANCO DI PAGARE PER VENDERE IL TUO IMMOBILE?
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Vendi il tuo immobile a <span className="text-blue-600 font-bold underline decoration-2 underline-offset-4">ZERO Provvigioni</span> con servizi di alta qualità. Professionisti al tuo fianco, costo zero per te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#0a2540] hover:bg-blue-900 text-white h-14 px-8 rounded-xl text-lg group">
                Richiedi Consulenza Gratuita
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-xl text-lg border-2 border-gray-200">
                Scopri di più
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Modern luxury house"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;