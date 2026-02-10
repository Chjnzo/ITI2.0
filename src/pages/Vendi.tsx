"use client";

import React from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import TeamContact from '@/components/TeamContact';
import BottomDock from '@/components/BottomDock';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Vendi = () => {
  const steps = [
    { icon: <TrendingUp />, title: "Valutazione", desc: "Analisi di mercato professionale e gratuita." },
    { icon: <ShieldCheck />, title: "Zero Costi", desc: "Non paghi nessuna provvigione sulla vendita." },
    { icon: <CheckCircle2 />, title: "Chiusura", desc: "Gestione completa di burocrazia e rogito." }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4 text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            Vendi a <span className="text-[#94b0ab]">Zero</span> Provvigioni.
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Il nostro modello è semplice: i venditori non pagano commissioni. Massimizzi il guadagno, noi pensiamo a tutto il resto.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#94b0ab]/10 text-[#94b0ab] rounded-2xl flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>

        <TeamContact />
      </main>
      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
      <BottomDock />
    </div>
  );
};

export default Vendi;