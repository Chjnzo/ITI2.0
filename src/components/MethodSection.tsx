"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Camera, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: "1. Analisi su misura",
    text: "Valutazione oggettiva dell'immobile basata sui dati di mercato reali e check documentale completo."
  },
  {
    icon: Camera,
    title: "2. Valorizzazione",
    text: "Creazione di un dossier premium, servizio fotografico professionale e marketing immersivo per attrarre i migliori acquirenti."
  },
  {
    icon: CheckCircle,
    title: "3. Vendita e Rogito",
    text: "Gestione completa delle trattative e della burocrazia. Zero pensieri e zero provvigioni per te, fino al rogito."
  }
];

const MethodSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Il nostro approccio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] tracking-tighter mb-6">Il nostro metodo.</h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Trasparenza in ogni fase della vendita. Abbiamo ottimizzato ogni passaggio per garantirti il massimo risultato senza stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#f8f9fa] p-10 rounded-[40px] border border-gray-100 group hover:bg-white hover:shadow-2xl hover:shadow-[#94b0ab]/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#94b0ab] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;