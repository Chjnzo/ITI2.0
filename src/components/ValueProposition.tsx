"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Star, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#94b0ab]" />,
    title: "Zero Provvigioni",
    text: "Siamo professionisti nel settore... chi possiede un immobile non deve sostenere costi per venderlo!"
  },
  {
    icon: <FileText className="w-8 h-8 text-[#94b0ab]" />,
    title: "Report Gratuito",
    text: "Un'analisi chiara e dettagliata per scoprire il vero valore di mercato del tuo immobile."
  },
  {
    icon: <Star className="w-8 h-8 text-[#94b0ab]" />,
    title: "Servizio Premium",
    text: "Gestiamo ogni fase della vendita con la massima cura e professionalità."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#94b0ab]" />,
    title: "Massimo Valore",
    text: "Ottimizziamo la presentazione del tuo immobile per attirare gli acquirenti giusti."
  }
];

const ValueProposition = () => {
  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">Perché sceglierci?</h2>
          <p className="text-gray-600 text-lg">
            La nostra missione è semplificare la vendita immobiliare eliminando i costi superflui per chi vende.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#f8f9fa] hover:bg-white hover:shadow-xl hover:shadow-[#94b0ab]/5 transition-all duration-300 border border-transparent hover:border-[#94b0ab]/20 group"
            >
              <div className="mb-6 p-3 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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