"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '@/data/properties';
import Header from '@/components/Header';
import { MapPin, Maximize2, BedDouble, Bath, ArrowLeft, Phone, MessageCircle, Mail, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MadeWithDyad } from "@/components/made-with-dyad";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-6">
        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 text-center max-w-md">
          <h2 className="text-3xl font-bold mb-4">Ops! Immobile non trovato</h2>
          <p className="text-gray-500 mb-8">La proprietà che stai cercando potrebbe essere stata venduta o rimossa.</p>
          <Link to="/immobili" className="inline-flex h-14 px-8 bg-[#94b0ab] text-white rounded-2xl font-bold items-center justify-center hover:bg-[#83a19b] transition-all">
            Torna al catalogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-32 pb-32 md:pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/immobili" className="inline-flex items-center gap-2 text-gray-400 font-bold mb-8 hover:text-[#94b0ab] transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Torna alla ricerca
          </Link>

          {/* Bento Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="md:col-span-3 aspect-[16/10] md:aspect-[16/8] rounded-[32px] overflow-hidden bg-gray-200">
              <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:grid grid-cols-1 gap-4">
              <div className="aspect-square rounded-[24px] overflow-hidden bg-gray-200">
                <img src={property.images[1]} alt={property.title} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[24px] overflow-hidden bg-gray-200">
                <img src={property.images[2]} alt={property.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">{property.title}</h1>
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <MapPin size={20} className="text-[#94b0ab]" />
                  {property.location}, Bergamo
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-6 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                <div className="space-y-1">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Superficie</p>
                  <p className="text-xl font-bold">{property.specs.mq} mq</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Locali</p>
                  <p className="text-xl font-bold">{property.specs.rooms}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Bagni</p>
                  <p className="text-xl font-bold">{property.specs.baths}</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Descrizione</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Caratteristiche</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100">
                      <div className="w-6 h-6 bg-[#94b0ab]/10 rounded-full flex items-center justify-center text-[#94b0ab]">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-bold text-[#1a1a1a]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (Desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[40px] border border-white/40 shadow-xl shadow-black/5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Prezzo</p>
                  <p className="text-5xl font-bold text-[#1a1a1a] mb-8">{property.price}</p>
                  
                  <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-[#94b0ab] rounded-xl flex items-center justify-center text-white font-bold">
                      {property.agent.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{property.agent.name}</p>
                      <p className="text-[10px] font-bold text-[#94b0ab] uppercase">Consulente Dedicato</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-[#94b0ab] transition-all flex items-center justify-center gap-2">
                      <Mail size={18} /> Richiedi Informazioni
                    </button>
                    <button className="w-full h-14 border-2 border-[#94b0ab] text-[#94b0ab] rounded-2xl font-bold hover:bg-[#94b0ab]/5 transition-all flex items-center justify-center gap-2">
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                  </div>
                </div>
                
                <div className="p-6 bg-[#94b0ab]/10 rounded-[32px] border border-[#94b0ab]/20">
                  <p className="text-sm font-bold text-[#94b0ab] leading-snug">
                    Zero provvigioni per i venditori. Il prezzo che vedi è quello che paghi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prezzo</p>
          <p className="text-xl font-bold">{property.price}</p>
        </div>
        <div className="flex gap-2">
          <button className="w-12 h-12 bg-gray-100 text-[#1a1a1a] rounded-xl flex items-center justify-center">
            <Phone size={20} />
          </button>
          <button className="h-12 px-6 bg-[#94b0ab] text-white rounded-xl font-bold flex items-center gap-2">
            Contatta
          </button>
        </div>
      </div>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default PropertyDetail;