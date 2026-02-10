"use client";

import React from 'react';
import Header from '@/components/Header';
import PropertyBento from '@/components/PropertyBento';
import { Search } from 'lucide-react';
import BottomDock from '@/components/BottomDock';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Compra = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-8">Trova la tua nuova casa.</h1>
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#94b0ab] transition-colors" />
            <input 
              type="text" 
              placeholder="Cerca per zona o tipologia..." 
              className="w-full h-16 pl-16 pr-6 bg-white border border-gray-100 rounded-full shadow-sm outline-none focus:border-[#94b0ab]/30 transition-all"
            />
          </div>
        </div>
        
        <PropertyBento />
      </main>
      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
      <BottomDock />
    </div>
  );
};

export default Compra;