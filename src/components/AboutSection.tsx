"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-6 block">La Nostra Storia</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#1a1a1a]">Ridefiniamo il mercato di Bergamo.</h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
              Il Tuo Immobiliare nasce con una visione chiara: rendere la vendita di una casa un processo onesto, trasparente e privo di commissioni inutili per chi vende. Siamo un team di professionisti radicati nel territorio bergamasco.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-4xl font-bold text-[#94b0ab] mb-2">10+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Anni di Esperienza</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#94b0ab] mb-2">500+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clienti Soddisfatti</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;