"use client";

import React from 'react';
import { motion } from 'framer-motion';
import BottomDock from '@/components/BottomDock';
import BentoHero from '@/components/BentoHero';
import PropertyBento from '@/components/PropertyBento';
import VisionLab from '@/components/VisionLab';
import StatsBento from '@/components/StatsBento';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F3F4F6] pb-32">
      {/* Header Minimal */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-xl border-b border-gray-100 h-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-[#0a2540]">
            IL TUO <span className="text-blue-600">IMMOBILIARE</span>
          </div>
          <button className="px-6 py-2.5 bg-[#0a2540] text-white rounded-full text-sm font-bold hover:bg-blue-900 transition-all">
            Dashboard
          </button>
        </div>
      </header>

      <main>
        <BentoHero />
        <StatsBento />
        <PropertyBento />
        <VisionLab />
        
        {/* Contact/CTA Bento Module */}
        <section className="py-12 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="bg-white rounded-[40px] p-12 md:p-20 border border-gray-100 text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-[#0a2540] mb-8">
                Pronto a vendere la tua <br /> casa a <span className="italic text-blue-600">zero provvigioni?</span>
              </h2>
              <button className="h-20 px-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xl font-bold transition-all shadow-xl shadow-blue-500/20">
                Inizia ora la Valutazione
              </button>
              <p className="mt-8 text-gray-400 font-mono text-xs uppercase tracking-[0.2em]">Sede: Via Giovanni Adelasio 18, Ranica (BG)</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm">
        <p>© 2025 Il Tuo Immobiliare. Crafted for Bergamo.</p>
        <MadeWithDyad />
      </footer>

      <BottomDock />
    </div>
  );
};

export default Index;