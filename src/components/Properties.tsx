"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Move } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockProperties = [
  {
    title: "Trilocale Moderno",
    location: "Ranica",
    price: "€ 245.000",
    beds: 3,
    baths: 2,
    sqm: 110,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Villa con Giardino",
    location: "Gorle",
    price: "€ 580.000",
    beds: 4,
    baths: 3,
    sqm: 240,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Attico Vista Città",
    location: "Bergamo",
    price: "€ 420.000",
    beds: 2,
    baths: 2,
    sqm: 95,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  }
];

const Properties = () => {
  return (
    <section id="immobili" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Ultimi Immobili</h2>
            <p className="text-gray-600">Scopri le nostre ultime proposte a zero provvigioni.</p>
          </div>
          <a href="#" className="text-blue-600 font-bold hover:underline">Vedi tutti gli immobili</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white font-bold py-1 px-3">
                  ZERO PROVVIGIONI
                </Badge>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0a2540] font-bold py-1.5 px-4 rounded-lg text-lg">
                    {prop.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">{prop.title}</h3>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin size={16} className="mr-1 text-blue-600" />
                  <span className="text-sm">{prop.location}</span>
                </div>
                <div className="flex justify-between py-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bed size={18} className="text-blue-600" />
                    <span className="text-sm font-medium">{prop.beds} Camere</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Bath size={18} className="text-blue-600" />
                    <span className="text-sm font-medium">{prop.baths} Bagni</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Move size={18} className="text-blue-600" />
                    <span className="text-sm font-medium">{prop.sqm} m²</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;