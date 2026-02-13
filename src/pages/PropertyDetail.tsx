"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import Header from '@/components/Header';
import { 
  MapPin, ArrowLeft, Phone, MessageSquare, Mail, 
  Check, Loader2, Maximize2, Layers, Bath, 
  ChevronDown, Home, Calendar, ShieldCheck, Info
} from 'lucide-react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import ContactForm from '@/components/ContactForm';
import { cn } from '@/lib/utils';

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('immobili')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setProperty(data);
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [slug]);

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const width = galleryRef.current.offsetWidth;
      const newIdx = Math.round(scrollLeft / width) + 1;
      setCurrentImgIdx(newIdx);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
      <Loader2 className="w-12 h-12 text-[#94b0ab] animate-spin mb-4" />
      <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Caricamento Esperienza...</p>
    </div>
  );

  if (!property) return null;

  const images = [property.copertina_url, ...(property.immagini_urls || [])];
  const priceFormatted = `€ ${property.prezzo.toLocaleString('it-IT')}`;

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a] pb-32 md:pb-0">
      <Header />
      
      {/* Mobile Back Button Overlay */}
      <div className="fixed top-20 left-4 z-40 md:hidden">
        <Link to="/immobili" className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          
          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content (65%) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 bg-[#94b0ab]/10 text-[#94b0ab] border border-[#94b0ab]/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Zero Provvigioni
                  </span>
                  <span className="px-4 py-1.5 bg-white border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {property.locali}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">{property.titolo}</h1>
                <button 
                  onClick={() => document.getElementById('mappa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#94b0ab] transition-colors font-medium group"
                >
                  <MapPin size={18} className="text-[#94b0ab]" />
                  {property.zona}, {property.citta || 'Bergamo'}
                  <span className="text-[10px] underline ml-2 opacity-0 group-hover:opacity-100 transition-opacity">Vedi mappa</span>
                </button>
              </div>

              {/* Gallery Architecture */}
              <div className="relative group">
                <div 
                  ref={galleryRef}
                  onScroll={handleScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-[32px] md:rounded-[48px] bg-gray-100 aspect-[4/5] md:aspect-video"
                >
                  {images.map((img, i) => (
                    <div key={i} className="flex-none w-full h-full snap-center">
                      <img src={img} className="w-full h-full object-cover" alt={`${property.titolo} ${i + 1}`} />
                    </div>
                  ))}
                </div>
                
                {/* Pagination Pill */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10">
                  {currentImgIdx} / {images.length}
                </div>
              </div>

              {/* Quick Stats KPI (Mobile Scrollable / Desktop Grid) */}
              <div className="overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex md:grid md:grid-cols-4 gap-4 w-max md:w-full">
                  {[
                    { label: 'Superficie', value: `${property.mq} m²`, icon: Maximize2 },
                    { label: 'Locali', value: property.locali, icon: Home },
                    { label: 'Bagni', value: property.bagni, icon: Bath },
                    { label: 'Piano', value: property.piano || 'Terra', icon: Layers },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm min-w-[140px] flex-1">
                      <stat.icon size={20} className="text-[#94b0ab] mb-4" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-lg font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Architecture */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">L'Immobile</h3>
                <div className="relative">
                  <motion.div 
                    animate={{ height: isDescExpanded ? 'auto' : 160 }}
                    className="overflow-hidden text-lg text-gray-500 leading-relaxed"
                  >
                    {property.descrizione}
                  </motion.div>
                  {!isDescExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f8f9fa] to-transparent" />
                  )}
                </div>
                <button 
                  onClick={() => setIsDescExpanded(!isDescExpanded)}
                  className="text-[#94b0ab] font-bold flex items-center gap-2 group"
                >
                  {isDescExpanded ? 'Leggi meno' : 'Leggi tutto'} 
                  <ChevronDown className={cn("transition-transform", isDescExpanded && "rotate-180")} size={18} />
                </button>
              </div>

              {/* Technical Details Accordion */}
              <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm">
                {[
                  { title: "Dati Tecnici", icon: Info, content: `Classe Energetica: ${property.classe_energetica || 'A'}\nStato: ${property.stato}\nAnno: ${property.anno_costruzione || 'Recente'}` },
                  { title: "Caratteristiche Extra", icon: ShieldCheck, content: property.caratteristiche?.join(' • ') || 'Giardino • Balcone • Cantina' }
                ].map((section, i) => (
                  <div key={i} className="border-b last:border-0 border-gray-50">
                    <button className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <section.icon size={20} className="text-[#94b0ab]" />
                        <span className="font-bold">{section.title}</span>
                      </div>
                      <ChevronDown size={18} className="text-gray-300" />
                    </button>
                    {/* Simplified for demo - usually a nested motion.div */}
                  </div>
                ))}
              </div>

              {/* Privacy Map Section */}
              <section id="mappa" className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Posizione</h3>
                <div className="h-[400px] bg-gray-200 rounded-[48px] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#1a1a1a]/40 backdrop-blur-[2px] z-10 flex items-center justify-center p-8 text-center">
                    <div className="max-w-xs">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                        <ShieldCheck size={32} className="text-white" />
                      </div>
                      <p className="text-white font-bold text-lg mb-2">Riservatezza Garantita</p>
                      <p className="text-white/70 text-sm">Per proteggere la privacy dei venditori, la posizione esatta verrà fornita durante la prenotazione della visita.</p>
                    </div>
                  </div>
                  {/* Abstract Map Texture */}
                  <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop')]" />
                </div>
              </section>

              {/* Mobile Agent Profile (Appears here on mobile, hidden on desktop sidebar) */}
              <div className="lg:hidden bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#94b0ab] rounded-[24px] flex items-center justify-center text-white text-3xl font-bold">
                    {property.agente_nome?.[0] || 'T'}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{property.agente_nome || 'Team ITI'}</h4>
                    <p className="text-[#94b0ab] font-bold text-xs uppercase tracking-widest">Consulente Esperto</p>
                  </div>
                </div>
                <ContactForm propertyTitle={property.titolo} />
              </div>

            </div>

            {/* Desktop Sticky Sidebar (35%) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Main Conversion Card */}
                <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-xl shadow-black/5 space-y-10">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Prezzo Richiesto</p>
                    <p className="text-5xl font-bold tracking-tighter">{priceFormatted}</p>
                    <p className="text-[#94b0ab] font-bold text-[10px] uppercase mt-2">Zero provvigioni per l'acquirente</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-50">
                      <div className="w-14 h-14 bg-[#94b0ab] rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {property.agente_nome?.[0] || 'T'}
                      </div>
                      <div>
                        <p className="font-bold">{property.agente_nome || 'Team ITI'}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Responsabile Vendita</p>
                      </div>
                    </div>
                    
                    <ContactForm propertyTitle={property.titolo} />
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="p-8 bg-[#94b0ab]/5 rounded-[40px] border border-[#94b0ab]/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#94b0ab] shadow-sm">
                    <ShieldCheck size={24} />
                  </div>
                  <p className="text-sm font-bold text-[#94b0ab] leading-snug">
                    Tutta la documentazione è stata verificata dai nostri esperti.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 pb-8 flex items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="pl-2">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Prezzo</p>
          <p className="text-2xl font-bold tracking-tighter">{priceFormatted}</p>
        </div>
        <div className="flex-1 flex gap-2">
          <button className="w-14 h-14 bg-white border border-gray-200 text-[#94b0ab] rounded-2xl flex items-center justify-center shadow-sm">
            <Phone size={24} />
          </button>
          <button className="flex-1 h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-black/10">
            Prenota Visita
          </button>
        </div>
      </div>

      <footer className="py-20 mt-12 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default PropertyDetail;