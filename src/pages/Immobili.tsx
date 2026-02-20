"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, X, CheckCircle2 } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('immobili')
          .select('*')
          .order('created_at', { ascending: false });

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
            stato: db.stato,
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

  // Filter Logic
  const filteredAll = properties.filter(p => {
    const locali = p.category.toLowerCase();
    let matchesCategory = true;
    if (filter !== "Tutti") {
      if (filter === "Villa") {
        matchesCategory = locali.includes("villa") || locali.includes("indipendente");
      } else {
        matchesCategory = locali.includes(filter.toLowerCase());
      }
    }

    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      p.title.toLowerCase().includes(query) || 
      p.location.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Split Logic
  const availableProperties = filteredAll.filter(p => p.stato !== 'Venduto');
  const soldProperties = filteredAll.filter(p => p.stato === 'Venduto');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-32 md:pt-44 pb-32">
        <div className="container mx-auto px-4">
          
          {/* Hero & Controls */}
          <div className="flex flex-col mb-8 md:mb-16 gap-6 md:gap-10">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-3 block">Portfolio</span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-3 leading-none">Scatola dei <br />Sogni.</h1>
              <p className="text-base md:text-lg text-gray-500 font-medium">Esplora le nostre proprietà selezionate a zero provvigioni.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 md:gap-6 w-full">
              <div className="relative w-full lg:max-w-sm">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Cerca zona o via..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 bg-white border border-gray-100 rounded-2xl pl-14 pr-12 text-sm font-medium focus:outline-none focus:border-[#94b0ab] focus:ring-4 focus:ring-[#94b0ab]/5 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm w-full">
                  {filterOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter(opt.value)}
                      className={cn(
                        "flex-1 min-w-[100px] md:min-w-0 md:flex-none px-4 py-2.5 rounded-xl text-sm font-bold transition-all text-center",
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
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-12 h-12 text-[#94b0ab] animate-spin" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Caricamento...</p>
            </div>
          ) : (
            <div className="space-y-32">
              
              {/* SECTION: AVAILABLE */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">Proprietà Disponibili</h2>
                </div>
                
                {availableProperties.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
                    <p className="text-gray-400 font-medium">Nessun immobile disponibile in questa categoria.</p>
                  </div>
                ) : (
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {availableProperties.map((prop) => (
                        <motion.div
                          layout
                          key={prop.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                        >
                          <PropertyCard property={prop} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </section>

              {/* SECTION: SOLD */}
              {soldProperties.length > 0 && (
                <section className="pt-20 border-t border-gray-100">
                  <div className="max-w-xl mb-12">
                    <div className="flex items-center gap-4 mb-3">
                       <CheckCircle2 size={18} className="text-gray-300" />
                       <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">I Nostri Successi</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Venduti a zero provvigioni.</h3>
                    <p className="text-gray-500">Queste proprietà hanno già trovato il loro nuovo proprietario attraverso il nostro metodo innovativo.</p>
                  </div>

                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {soldProperties.map((prop) => (
                        <motion.div
                          layout
                          key={prop.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 0.7, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                        >
                          <PropertyCard property={prop} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              )}

            </div>
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