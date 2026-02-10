"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const cards = [
  {
    title: "0%",
    desc: "Commissioni per chi vende. Sempre.",
    icon: null,
    size: "md:col-span-2",
    highlight: true
  },
  {
    title: "Trasparenza",
    desc: "Nessun costo nascosto o sorpresa finale.",
    icon: ShieldCheck,
    size: "md:col-span-1",
    highlight: false
  },
  {
    title: "Esperti Locali",
    desc: "Siamo a Bergamo e provincia.",
    icon: MapPin,
    size: "md:col-span-1",
    highlight: false
  },
  {
    title: "Valutazione AI",
    desc: "Prezzi reali basati sui dati di mercato.",
    icon: Calculator,
    size: "md:col-span-2",
    highlight: false
  }
];

const ServicesBento = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-10 rounded-[40px] border border-[#94b0ab]/20 flex flex-col justify-between group relative overflow-hidden",
                "bg-white/40 backdrop-blur-xl"
              )}
            >
              {/* Subtle accent glow inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#94b0ab]/10 blur-2xl rounded-full" />
              
              <div className="mb-12">
                {card.icon ? (
                  <div className="w-14 h-14 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab]">
                    <card.icon size={28} />
                  </div>
                ) : (
                  <span className="text-7xl font-bold text-[#94b0ab] leading-none">0%</span>
                )}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{card.title}</h3>
                <p className="text-[#1a1a1a]/60 font-medium">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;