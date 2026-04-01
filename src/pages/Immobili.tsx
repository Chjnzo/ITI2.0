"use client";

import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Search, X, CheckCircle2, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import { useQuery } from '@tanstack/react-query';

const tipoOptions = [
  { label: "Monolocale", value: "mono" },
  { label: "Bilocale", value: "bilo" },
  { label: "Trilocale", value: "trilo" },
  { label: "Quadrilocale", value: "quadri" },
  { label: "Pentalocale", value: "penta" },
  { label: "Villa", value: "villa" },
  { label: "Terreno", value: "terreno" },
  { label: "Nuova Costruzione", value: "nuova costruzione" },
  { label: "Attico", value: "attico" },
  { label: "Loft", value: "loft" },
];

const prezzoOptions = [
  { label: "Fino a €150k", min: 0, max: 150000 },
  { label: "€150k – €300k", min: 150000, max: 300000 },
  { label: "€300k – €500k", min: 300000, max: 500000 },
  { label: "Oltre €500k", min: 500000, max: Infinity },
];

const Immobili = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<"tipo" | "prezzo" | null>(null);

  const tipoRef = useRef<HTMLDivElement>(null);
  const prezzoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        tipoRef.current && !tipoRef.current.contains(e.target as Node) &&
        prezzoRef.current && !prezzoRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleType = (value: string) => {
    setSelectedTypes(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const togglePrice = (label: string) => {
    setSelectedPrices(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedPrices([]);
    setSearchQuery("");
  };

  const activeCount = selectedTypes.length + selectedPrices.length + (searchQuery ? 1 : 0);

  const { data: properties = [], isLoading: loading, error } = useQuery({
    queryKey: ['immobili'],
    queryFn: async () => {
      const { data, error: supabaseError } = await supabase
        .from('immobili')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) throw supabaseError;

      return (data || []).map((db: any) => ({
        id: db.id,
        slug: db.slug,
        title: db.titolo,
        price: `€ ${db.prezzo?.toLocaleString('it-IT')}`,
        rawPrice: db.prezzo ?? 0,
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
          phone: db.agente_tel || "+39 375 822 7321",
          email: db.agente_email || "info@iltuoimmobiliare.it"
        }
      }));
    },
    staleTime: 1000 * 60 * 5,
  });

  // Filter Logic
  const filteredAll = properties.filter((p: any) => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.some(t => {
      const cat = p.category.toLowerCase();
      if (t === "villa") return cat.includes("villa") || cat.includes("indipendente");
      return cat.includes(t);
    });

    const matchesPrice = selectedPrices.length === 0 || selectedPrices.some(label => {
      const range = prezzoOptions.find(o => o.label === label);
      return range && p.rawPrice >= range.min && p.rawPrice < range.max;
    });

    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);

    return matchesType && matchesPrice && matchesSearch;
  });

  // Split Logic
  const availableProperties = filteredAll.filter((p: any) => p.stato !== 'Venduto');
  const soldProperties = filteredAll.filter((p: any) => p.stato === 'Venduto');

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Helmet>
        <title>Immobili in Vendita a Bergamo | Il Tuo Immobiliare</title>
        <meta name="description" content="Esplora gli immobili in vendita a Bergamo e provincia. Zero provvigioni per chi vende. Trilocali, bilocali, ville indipendenti selezionati." />
        <link rel="canonical" href="https://www.iltuoimmobiliare.it/immobili" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iltuoimmobiliare.it/immobili" />
        <meta property="og:title" content="Immobili in Vendita a Bergamo | Il Tuo Immobiliare" />
        <meta property="og:description" content="Esplora gli immobili in vendita a Bergamo e provincia. Zero provvigioni per chi vende." />
        <meta property="og:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immobili in Vendita a Bergamo | Il Tuo Immobiliare" />
        <meta name="twitter:description" content="Esplora gli immobili in vendita a Bergamo e provincia. Zero provvigioni per chi vende." />
        <meta name="twitter:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.iltuoimmobiliare.it/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Immobili in Vendita",
              "item": "https://www.iltuoimmobiliare.it/immobili"
            }
          ]
        })}</script>
      </Helmet>

      <Header />

      <main className="pt-32 md:pt-44 pb-32">
        <div className="container mx-auto px-4">

          {/* Hero & Controls */}
          <div className="flex flex-col mb-8 md:mb-16 gap-8 md:gap-10">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-3 block">Portfolio</span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-3 leading-none">La tua prossima <br />Casa.</h1>
              <p className="text-base md:text-lg text-gray-500 font-medium">Esplora le nostre proprietà selezionate.</p>
            </div>

            {/* Filter bar */}
            <div className="flex items-center gap-3 w-full">

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={17} />
                <input
                  type="text"
                  placeholder="Cerca zona o via..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 bg-white border border-gray-100 rounded-2xl pl-14 pr-12 text-sm font-medium focus:outline-none focus:border-[#94b0ab] focus:ring-4 focus:ring-[#94b0ab]/5 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Dropdown: Tipologia */}
              <div className="relative shrink-0" ref={tipoRef}>
                <button
                  onClick={() => setOpenDropdown(prev => prev === "tipo" ? null : "tipo")}
                  className={cn(
                    "h-14 px-6 rounded-2xl border text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm whitespace-nowrap",
                    selectedTypes.length > 0 || openDropdown === "tipo"
                      ? "bg-[#94b0ab] text-white border-[#94b0ab]"
                      : "bg-white text-[#1a1a1a] border-gray-100 hover:border-gray-300"
                  )}
                >
                  Tipologia
                  {selectedTypes.length > 0 && (
                    <span className="w-5 h-5 bg-white/25 rounded-full text-[11px] flex items-center justify-center font-black">
                      {selectedTypes.length}
                    </span>
                  )}
                  {selectedTypes.length > 0 ? (
                    <span
                      onClick={(e) => { e.stopPropagation(); setSelectedTypes([]); }}
                      className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                    >
                      <X size={13} />
                    </span>
                  ) : (
                    <ChevronDown
                      size={15}
                      className={cn("transition-transform duration-200", openDropdown === "tipo" && "rotate-180")}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {openDropdown === "tipo" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-[calc(100%+10px)] left-0 z-50 bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-black/8 p-5 w-80"
                    >
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Tipologia</p>
                      <div className="flex flex-wrap gap-2">
                        {tipoOptions.map((opt) => {
                          const active = selectedTypes.includes(opt.value);
                          return (
                            <button
                              key={opt.value}
                              onClick={() => toggleType(opt.value)}
                              className={cn(
                                "px-4 py-2 rounded-full text-xs font-bold border transition-all duration-150",
                                active
                                  ? "bg-[#94b0ab] text-white border-[#94b0ab]"
                                  : "bg-gray-50 text-gray-500 border-gray-100 hover:border-[#94b0ab] hover:text-[#94b0ab] hover:bg-[#94b0ab]/5"
                              )}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {selectedTypes.length > 0 && (
                        <button
                          onClick={() => setSelectedTypes([])}
                          className="mt-4 text-[11px] font-bold text-gray-400 hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
                        >
                          <X size={11} /> Deseleziona tutto
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dropdown: Prezzo */}
              <div className="relative shrink-0" ref={prezzoRef}>
                <button
                  onClick={() => setOpenDropdown(prev => prev === "prezzo" ? null : "prezzo")}
                  className={cn(
                    "h-14 px-6 rounded-2xl border text-sm font-bold flex items-center gap-2.5 transition-all shadow-sm whitespace-nowrap",
                    selectedPrices.length > 0 || openDropdown === "prezzo"
                      ? "bg-[#94b0ab] text-white border-[#94b0ab]"
                      : "bg-white text-[#1a1a1a] border-gray-100 hover:border-gray-300"
                  )}
                >
                  Prezzo
                  {selectedPrices.length > 0 && (
                    <span className="w-5 h-5 bg-white/25 rounded-full text-[11px] flex items-center justify-center font-black">
                      {selectedPrices.length}
                    </span>
                  )}
                  {selectedPrices.length > 0 ? (
                    <span
                      onClick={(e) => { e.stopPropagation(); setSelectedPrices([]); }}
                      className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                    >
                      <X size={13} />
                    </span>
                  ) : (
                    <ChevronDown
                      size={15}
                      className={cn("transition-transform duration-200", openDropdown === "prezzo" && "rotate-180")}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {openDropdown === "prezzo" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-[calc(100%+10px)] right-0 z-50 bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-black/8 p-5 w-72"
                    >
                      <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Fascia di Prezzo</p>
                      <div className="flex flex-wrap gap-2">
                        {prezzoOptions.map((opt) => {
                          const active = selectedPrices.includes(opt.label);
                          return (
                            <button
                              key={opt.label}
                              onClick={() => togglePrice(opt.label)}
                              className={cn(
                                "px-4 py-2 rounded-full text-xs font-bold border transition-all duration-150",
                                active
                                  ? "bg-[#94b0ab] text-white border-[#94b0ab]"
                                  : "bg-gray-50 text-gray-500 border-gray-100 hover:border-[#94b0ab] hover:text-[#94b0ab] hover:bg-[#94b0ab]/5"
                              )}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {selectedPrices.length > 0 && (
                        <button
                          onClick={() => setSelectedPrices([])}
                          className="mt-4 text-[11px] font-bold text-gray-400 hover:text-[#1a1a1a] transition-colors flex items-center gap-1"
                        >
                          <X size={11} /> Deseleziona tutto
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-12 h-12 text-[#94b0ab] animate-spin" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Caricamento...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-white rounded-[40px] border border-red-100">
              <p className="text-red-500 font-medium">Si è verificato un errore nel caricamento degli immobili.</p>
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
                      {availableProperties.map((prop: any) => (
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
                      {soldProperties.map((prop: any) => (
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

      <Footer />
    </div>
  );
};

export default Immobili;
