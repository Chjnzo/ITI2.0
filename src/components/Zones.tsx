"use client";

import React from 'react';
import { motion } from 'framer-motion';

const zones = [
  { name: 'Bergamo', image: 'https://images.unsplash.com/photo-1596482186717-38435f039f37?q=80&w=800&auto=format&fit=crop' },
  { name: 'Gorle', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Scanzo', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
  { name: 'Torre Boldone', image: 'https://images.unsplash.com/photo-1600607687940-4e5a994239b3?q=80&w=800&auto=format&fit=crop' },
  { name: 'Alzano', image: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Nembro', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop' },
];

const Zones = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Dove Operiamo</h2>
          <p className="text-gray-600 text-lg">I migliori quartieri di Bergamo e provincia.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[16/9]"
            >
              <img
                src={zone.image}
                alt={zone.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">{zone.name}</h3>
                <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300 mt-2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Zones;