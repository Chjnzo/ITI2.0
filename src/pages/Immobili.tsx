"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import { MadeWithDyad } from "@/components/made-with-dyad";
import PropertyCard from '@/components/PropertyCard';

const filterOptions = [
  { label: "Tutti", value: "Tutti" },
  { label: "Bilocali", value: "Bilocale" },
  { label: "Trilocali", value: "Trilocale" },
  { label: "Quadrilocali", value: "Quadrilocale" },
  { label: "Ville/Indipendenti", value: "Villa" }
];

const Immobili = () => {
  const [filter, setFilter] = useState("Tutti");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('immobili')
          .select('*');

        if (supabaseError) throw supabaseError;

        if (data) {
          const mappedData: Property[] = data.map((db: any) => ({
            id: db.id,
            slug: db.slug,
            title: db.titolo,
            price: `€ ${db.prezzo.toLocaleString('it-IT')}`,
            location: db.zona,
            category: db.locali || "Appartamento",
            description: db.descrizione,
            piano: db.piano,
            garage: db.garage,
            specs: {
              mq: db.mq,
              rooms: db.locali,
              baths: db.bagni
            },
            features: db.caratteristiche || [],
            images: [db.copertina_url, ...(db.immagini_urls || [])],
            agent: {
              name: db.agente_nome || "Team Il Tuo Immobiliare",
              phone: db.agente_tel || "+39 035 123 4567",
              email: db.agente_email || "info@iltuoimmobiliare.it"
            }
          }));
          setProperties(mappedData);
        }
      } catch (err: any) {
        setError(err.message || "Errore durante il caricamento degli immobili");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = filter === "Tutti" 
    ? properties 
    : properties.filter(p => {
        const locali = p.category.toLowerCase();
        if (filter === "Villa") return locali.includes("villa") || locali.includes("indipendente");
        return locali.includes(filter.toLowerCase());
      });

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-none">Scatola dei <br />Sogni.</h1>
              <p className="text-lg text-gray-500 font-medium">Esplora le nostre proprietà selezionate a zero provvigioni.</p>
            </div>
            
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2">
              <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm w-max">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter(opt.value)}
                    className={cn(
                      "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                      filter === opt.value 
                        ? "bg-[#94b0ab] text-white shadow-lg shadow-[#94b0ab]/20" 
                        : "text-gray-400 hover:text-[#1a1a1a] hover:bg-gray-50"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-12 h-12 text-[#94b0ab] animate-spin" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Caricamento immobili...</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProperties.map((prop) => (
                  <motion.div
                    layout
                    key={prop.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PropertyCard property={prop} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
      <BottomDock />
    </div>
  );
};

export default Immobili;