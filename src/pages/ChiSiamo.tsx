"use client";

import React from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { MadeWithDyad } from "@/components/made-with-dyad";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-20 rounded-[40px] border border-gray-100 shadow-sm">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-6 block">La Nostra Storia</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Ridefiniamo il mercato immobiliare di Bergamo.</h1>
            <div className="space-y-8 text-xl text-gray-500 leading-relaxed">
              <p>
                Il Tuo Immobiliare nasce con una visione chiara: rendere la vendita di una casa un processo onesto, trasparente e privo di commissioni inutili per chi vende.
              </p>
              <p>
                Siamo un team di professionisti radicati nel territorio bergamasco, unendo l'esperienza locale alle più moderne tecnologie digitali per offrire un servizio d'eccellenza.
              </p>
            </div>
            
            <div className="mt-20 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#94b0ab] mb-2">10+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Anni di Esperienza</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#94b0ab] mb-2">500+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Clienti Soddisfatti</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
      <BottomDock />
    </div>
  );
};

export default ChiSiamo;