"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, Map, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const cards = [
  {
    title: "Valutazione Professionale",
    desc: "Algoritmi proprietari e analisi di mercato locale per il prezzo perfetto.",
    icon: Calculator,
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-white",
    textColor: "text-[#0f172a]"
  },
  {
    title: "Senza Costi",
    desc: "Il venditore non paga un solo euro di commissione. Punto.",
    icon: ShieldCheck,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-[#f97316]",
    textColor: "text-white"
  },
  {
    title: "Presenza Capillare",
    desc: "Copertura totale di Bergamo e provincia.",
    icon: Map,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-[#0f172a]",
    textColor: "text-white"
  },
  {
    title: "Visual Marketing",
    desc: "Virtual staging e foto professionali inclusi nel servizio.",
    icon: ImageIcon,
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-white",
    textColor: "text-[#0f172a]"
  }
];

const ServicesBento = () => {
  return (
    <section className="py-16 px-4 md:px-6">
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
                "p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between group",
                card.bg,
                card.textColor
              )}
            >
              <div className="mb-8">
                <card.icon size={32} className={cn(card.bg === 'bg-white' ? 'text-[#f97316]' : 'text-white/80')} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-3">{card.title}</h3>
                <p className={cn("text-lg", card.bg === 'bg-white' ? 'text-gray-500' : 'text-white/80')}>
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