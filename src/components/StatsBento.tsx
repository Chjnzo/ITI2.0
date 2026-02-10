"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  { label: "Vendita Media", value: "45", sub: "Giorni", color: "text-[#94b0ab]" },
  { label: "Commissioni", value: "0%", sub: "Venditori", color: "text-[#1a1a1a]" },
  { label: "Rating", value: "4.9", sub: "Google", color: "text-[#94b0ab]" },
  { label: "Partner", value: "100+", sub: "Locali", color: "text-[#1a1a1a]" }
];

const StatsBento = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm text-center"
            >
              <p className={cn("text-5xl font-bold mb-1 tracking-tighter", stat.color)}>{stat.value}</p>
              <p className="text-sm font-bold text-[#1a1a1a] uppercase tracking-widest">{stat.label}</p>
              <p className="text-xs text-gray-400 font-medium mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBento;