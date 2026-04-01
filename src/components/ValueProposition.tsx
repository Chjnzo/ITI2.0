"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#94b0ab]" />,
    title: "Zero Provvigioni",
    text: "Nessun costo per chi vende. Una garanzia contrattuale e una questione di trasparenza radicale, non uno slogan."
  },
  {
    icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-[#94b0ab]" />,
    title: "Analisi oggettive",
    text: "Niente opinioni. Analisi di mercato matematica e dossier verificato per posizionare l'immobile al suo reale valore."
  },
  {
    icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-[#94b0ab]" />,
    title: "Gestione Istituzionale",
    text: "Un team strutturato che gestisce ogni pratica burocratica, tutelandoti dal primo appuntamento fino al rogito."
  },
  {
    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#94b0ab]" />,
    title: "Vendita Rapida",
    text: "Un'infrastruttura di marketing avanzata che ci permette di chiudere le vendite ben al di sotto della media."
  }
];

const ValueProposition = () => {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">Da Promessa a Certezza.</h2>
          <p className="text-gray-600 text-base md:text-lg">
            La fiducia si costruisce con la trasparenza. Ecco come tuteliamo il tuo patrimonio in ogni fase della vendita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-3xl md:rounded-2xl bg-[#f8f9fa] hover:bg-white hover:shadow-xl hover:shadow-[#94b0ab]/5 transition-all duration-300 border border-transparent hover:border-[#94b0ab]/20 group"
            >
              <div className="mb-4 md:mb-6 p-3 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;