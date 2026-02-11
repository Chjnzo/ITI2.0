"use client";

import React from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion, Variants } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Cpu, Map as MapIcon, Coffee, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChiSiamo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a] selection:bg-[#94b0ab] selection:text-white">
      <Header />
      
      <main className="pt-44 pb-32">
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 mb-32 overflow-hidden">
          {/* Glass Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#94b0ab]/10 blur-[120px] rounded-full -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              L'evoluzione immobiliare a <span className="text-[#94b0ab]">Bergamo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Abbiamo tolto le commissioni a chi vende. <br className="hidden md:block" />
              Abbiamo tenuto solo la qualità.
            </p>
          </motion.div>
        </section>

        {/* Philosophy Bento Grid */}
        <section className="container mx-auto px-4 mb-40">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1: Large USP */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-white p-10 md:p-16 rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#94b0ab]/5 blur-3xl rounded-full group-hover:bg-[#94b0ab]/10 transition-colors duration-500" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                  <span className="text-[#94b0ab]">Zero</span> Provvigioni.
                </h3>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                  Il principio è semplice: chi possiede il bene non deve pagare per venderlo. È una questione di etica e trasparenza radicale.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-2 text-[#94b0ab] font-bold uppercase tracking-widest text-xs">
                Il nostro core business <ArrowUpRight size={16} />
              </div>
            </motion.div>

            {/* Card 2: Tech */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#1a1a1a] p-10 rounded-[48px] text-white flex flex-col justify-between"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#94b0ab]">
                <Cpu size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Data Driven</h3>
                <p className="text-gray-400 leading-relaxed">
                  Marketing digitale avanzato e valutazioni basate sui dati, non sulle opinioni.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Area */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-3 bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-12 overflow-hidden"
            >
              <div className="flex-1">
                <div className="w-14 h-14 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab] mb-6">
                  <MapIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Esperti del territorio</h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  Conosciamo ogni angolo di Bergamo e provincia. Da Ranica a Città Alta, siamo i tuoi vicini di casa.
                </p>
              </div>
              <div className="flex-1 w-full h-48 bg-[#f8f9fa] rounded-[32px] relative overflow-hidden border border-gray-100">
                {/* Abstract Map Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#94b0ab 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#94b0ab] rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#94b0ab]/30 rounded-full animate-ping" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">I Volti della Rivoluzione.</h2>
            <p className="text-gray-400 font-medium">Trasparenza significa metterci la faccia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Matteo Roggeri", role: "Founder", quote: "La trasparenza paga più delle provvigioni." },
              { name: "Gabriele", role: "Co-Founder", quote: "Abbiamo riscritto le regole per proteggere il tuo patrimonio." }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative p-1 bg-gradient-to-b from-white/40 to-white/10 rounded-[40px] border border-white/20 backdrop-blur-xl shadow-xl shadow-black/5"
              >
                <div className="bg-white/40 rounded-[38px] p-10 h-full">
                  <div className="w-32 h-32 bg-gray-200 rounded-[32px] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1560250097-0b93528c311a' : '1472099645785-5658abf4ff4e'}?q=80&w=400&auto=format&fit=crop`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-3xl font-bold mb-1">{member.name}</h4>
                  <p className="text-[#94b0ab] font-bold text-sm uppercase tracking-widest mb-6">{member.role}</p>
                  <p className="text-gray-500 italic text-lg leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#94b0ab]/5 blur-2xl rounded-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location & CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-white rounded-[48px] overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Map Placeholder */}
              <div className="h-[400px] lg:h-auto bg-[#f8f9fa] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#94b0ab 1px, transparent 1px), linear-gradient(90deg, #94b0ab 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-[#94b0ab] mx-auto mb-4">
                      <MapIcon size={32} />
                    </div>
                    <p className="font-bold text-[#1a1a1a]">Ranica, Bergamo</p>
                  </div>
                </div>
              </div>
              
              {/* Right: Contact */}
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-6 block">Vieni a trovarci</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">La nostra porta è sempre aperta.</h2>
                <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                  Via Giovanni Adelasio 18,<br />
                  24020 Ranica (BG)
                </p>
                <button className="w-fit h-16 px-10 border-2 border-[#94b0ab] text-[#94b0ab] rounded-3xl font-bold flex items-center gap-3 hover:bg-[#94b0ab] hover:text-white transition-all group">
                  Vieni a prendere un caffè <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-[#1a1a1a]/20 text-xs font-bold uppercase tracking-[0.5em] mb-4">Il Tuo Immobiliare</p>
          <MadeWithDyad />
        </div>
      </footer>
      
      <BottomDock />
    </div>
  );
};

export default ChiSiamo;