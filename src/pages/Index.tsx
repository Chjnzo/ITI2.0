"use client";

import React from 'react';
import Header from '@/components/Header';
import BentoHero from '@/components/BentoHero';
import StatsBento from '@/components/StatsBento';
import PropertyBento from '@/components/PropertyBento';
import TeamContact from '@/components/TeamContact';
import BottomDock from '@/components/BottomDock';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-[#94b0ab] selection:text-white font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pb-32">
        <BentoHero />
        <StatsBento />
        <PropertyBento />
        <TeamContact />
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-[#1a1a1a]/20 text-xs font-bold uppercase tracking-[0.5em] mb-4">Il Tuo Immobiliare</p>
          <div className="mt-8">
            <MadeWithDyad />
          </div>
        </div>
      </footer>

      <BottomDock />
    </div>
  );
};

export default Index;