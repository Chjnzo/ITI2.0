"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const TeamContact = () => {
  return (
    <section id="contatti" className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Contatti</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-8 tracking-tighter">Siamo qui per te.</h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-md">
                Che tu stia cercando la casa dei tuoi sogni o voglia vendere la tua proprietà a zero provvigioni, il nostro team è pronto ad aiutarti.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Telefono</p>
                    <p className="text-lg font-bold text-[#1a1a1a]">+39 035 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sede</p>
                    <p className="text-lg font-bold text-[#1a1a1a]">Via G. Adelasio 18, Ranica (BG)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] p-8 md:p-16 border-l border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Nome</label>
                    <input type="text" placeholder="Mario Rossi" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a1a] focus:border-[#94b0ab] outline-none transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Email</label>
                    <input type="email" placeholder="mario@esempio.it" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a1a] focus:border-[#94b0ab] outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Messaggio</label>
                  <textarea rows={4} placeholder="Come possiamo aiutarti?" className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a1a] focus:border-[#94b0ab] outline-none transition-all shadow-sm resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#83a19b] transition-all shadow-lg shadow-[#94b0ab]/20">
                  Invia Messaggio <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;