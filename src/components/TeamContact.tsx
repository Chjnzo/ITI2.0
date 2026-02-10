"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const TeamContact = () => {
  return (
    <section id="contatti" className="py-24 px-4 md:px-6 bg-[#FAFAF9]">
      <div className="container mx-auto">
        <div className="bg-white rounded-[48px] overflow-hidden shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-8">Mettici la faccia.</h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Non siamo solo un'agenzia, siamo professionisti che vivono il territorio. Vieni a trovarci a Ranica per una consulenza senza impegno.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#f97316]/10 rounded-2xl flex items-center justify-center text-[#f97316]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Telefono</p>
                    <p className="text-xl font-bold text-[#0f172a]">+39 035 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#f97316]/10 rounded-2xl flex items-center justify-center text-[#f97316]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Sede</p>
                    <p className="text-xl font-bold text-[#0f172a]">Via G. Adelasio 18, Ranica (BG)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a] p-12 md:p-20 flex flex-col justify-center">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nome</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#f97316] outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#f97316] outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Messaggio</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#f97316] outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full py-6 bg-[#f97316] text-white rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-[#ea580c] transition-all shadow-xl shadow-[#f97316]/20">
                  Invia Messaggio
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