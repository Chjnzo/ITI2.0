"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const stats = [
  { label: "Commissioni Venditore", value: "0%", sub: "Sempre, per ogni immobile", icon: Star, color: "text-blue-600" },
  { label: "Tempo Medio Vendita", value: "45", sub: "Giorni dalla messa online", icon: Clock, color: "text-orange-500" },
  { label: "Recensioni Positive", value: "4.9", sub: "Valutazione media Google", icon: TrendingUp, color: "text-green-500" },
  { label: "Copertura", value: "100%", sub: "Provincia di Bergamo", icon: Users, color: "text-[#0a2540]" }
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
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className={cn("p-3 rounded-2xl bg-gray-50 mb-6", stat.color)}>
                <stat.icon size={24} />
              </div>
              <p className="text-4xl md:text-5xl font-mono font-bold text-[#0a2540] mb-2">{stat.value}</p>
              <h4 className="font-serif text-lg text-[#0a2540] mb-2">{stat.label}</h4>
              <p className="text-sm text-gray-400 font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBento;