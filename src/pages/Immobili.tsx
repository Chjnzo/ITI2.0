"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import { MadeWithDyad } from "@/components/made-with-dyad";
import PropertyCard from '@/components/PropertyCard';
import { Skeleton } from '@/components/ui/skeleton';

const PAGE_SIZE = 9;

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
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperties = useCallback(async (page: number, isInitial: boolean = false) => {
    try {
      if (isInitial) setLoading(true);
      else setLoadingMore(true);

      const from = page * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let query = supabase
        .from('immobili')
        .select('*', { count: 'exact' });

      // Filtraggio lato server per categoria
      if (filter !== "Tutti") {
        if (filter === "Villa") {
          query = query.or('locali.ilike.%villa%,locali.ilike.%indipendente%');
        } else {
          query = query.ilike('locali', `%${filter}%`);
        }
      }

      // Ricerca testuale lato server
      if (searchQuery) {
        query = query.or(`titolo.ilike.%${searchQuery}%,zona.ilike.%${searchQuery}%`);
      }

      const { data, count, error: supabaseError } = await query
        .range(from, to)
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
          link_immobiliare: db.link_immobiliare, // Campo critico assicurato
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

        setProperties(prev => isInitial ? mappedData : [...prev, ...mappedData]);
        setHasMore(count ? (isInitial ? mappedData.length : properties.length + mappedData.length) < count : false);
      }
    } catch (err: any) {
      setError(err.message || "Errore durante il caricamento degli immobili");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [filter, searchQuery, properties.length]);

  // Reset e fetch quando cambiano i filtri
  useEffect(() => {
    setCurrentPage(0);
    fetchProperties(0, true);
  }, [filter, searchQuery]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchProperties(nextPage, false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-32 md:pt-44 pb-32">
        <div className="container mx-auto px-4">
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
                  className="w-full h-14 bg-white border border-gray-100 rounded-2xl pl-14 pr-12 text-sm font-medium focus:outline-none focus:border-[#94b0ab] transition-all shadow-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1a1a1a]">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="w-full lg:w-auto overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-sm w-fit min-w-full lg:min-w-0">
                  {filterOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter(opt.value)}
                      className={cn(
                        "px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                        filter === opt.value 
                          ? "bg-[#94b0ab] text-white shadow-lg shadow-[#94b0ab]/20" 
                          : "text-gray-400 hover:text-[#1a1a1a]"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {loading && properties.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/3] rounded-[40px]" />
                  <Skeleton className="h-8 w-3/4 rounded-xl" />
                  <Skeleton className="h-4 w-1/2 rounded-xl" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {properties.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-[40px] border border-dashed border-gray-200">
                  <Search size={48} className="text-gray-200 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-2">Nessun risultato</h3>
                  <p className="text-gray-400">Riprova con un'altra zona o cambia categoria.</p>
                </div>
              ) : (
                <>
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {properties.map((prop) => (
                        <motion.div
                          layout
                          key={prop.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <PropertyCard property={prop} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Loading More Skeletons */}
                  {loadingMore && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="space-y-4">
                          <Skeleton className="aspect-[4/3] rounded-[40px]" />
                          <Skeleton className="h-8 w-3/4 rounded-xl" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Load More Button */}
                  {hasMore && !loadingMore && (
                    <div className="flex justify-center pt-12">
                      <button 
                        onClick={loadMore}
                        className="h-16 px-12 bg-white border-2 border-gray-100 text-[#1a1a1a] rounded-3xl font-bold flex items-center gap-3 hover:border-[#94b0ab] hover:text-[#94b0ab] transition-all shadow-sm"
                      >
                        Carica Altri Immobili <ChevronDown size={20} />
                      </button>
                    </div>
                  )}
                </>
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