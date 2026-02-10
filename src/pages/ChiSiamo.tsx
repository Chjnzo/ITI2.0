"use client";

import React from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';

const team = [
  { name: "Marco Ferrari", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
  { name: "Elena Gualdi", role: "Senior Consultant", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
  { name: "Luca Bianchi", role: "Marketing Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" }
];

const values = [
  { icon: Target, title: "Mission", desc: "Eliminare le barriere tra venditore e acquirente, rendendo il mercato più fluido e onesto." },
  { icon: Heart, title: "Passione", desc: "Amiamo il nostro territorio e lavoriamo ogni giorno per valorizzare il patrimonio immobiliare bergamasco." },
  { icon: ShieldCheck, title: "Trasparenza", desc: "Nessun costo nascosto. Il nostro modello a zero provvigioni per chi vende è la nostra promessa." }
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      <main className="pt-44 pb-32">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-6 block"
            >
              La Nostra Storia
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]"
            >
              Ridefiniamo il mercato di <span className="text-[#94b0ab]">Bergamo.</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
              Il Tuo Immobiliare nasce con una visione chiara: rendere la vendita di una casa un processo onesto, trasparente e privo di commissioni inutili per chi vende.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab] mb-8">
                  <val.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Il nostro Team.</h2>
            <p className="text-gray-400 font-medium">Professionisti al tuo servizio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-6 bg-gray-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-2xl font-bold">{member.name}</h4>
                <p className="text-[#94b0ab] font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
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