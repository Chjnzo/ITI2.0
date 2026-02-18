"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/Header';
import { 
  MapPin, ArrowLeft, ExternalLink, 
  Loader2, Maximize2, Layers, Bath, 
  ChevronDown, Home, ShieldCheck, Calendar,
  Users
} from 'lucide-react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import ContactForm from '@/components/ContactForm';
import OpenHouseBooking from '@/components/OpenHouseBooking';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any>(null);
  const [openHouse, setOpenHouse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Fetch Property by ID
        const { data: propData, error: propError } = await supabase
          .from('immobili')
          .select('*')
          .eq('id', id)
          .single();

        if (propError) throw propError;
        setProperty(propData);

        // 2. Fetch Active Open House
        if (propData) {
          const today = new Date().toISOString().split('T')[0];
          const { data: ohData } = await supabase
            .from('open_houses')
            .select('*')
            .eq('immobile_id', propData.id)
            .gte('data_evento', today)
            .order('data_evento', { ascending: true })
            .limit(1)
            .maybeSingle();
          
          setOpenHouse(ohData);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const width = galleryRef.current.offsetWidth;
      const newIdx = Math.round(scrollLeft / width) + 1;
      setCurrentImgIdx(newIdx);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-section-mobile') || document.getElementById('contact-sidebar');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
      <Loader2 className="w-12 h-12 text-[#94b0ab] animate-spin mb-4" />
      <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Caricamento Proprietà...</p>
    </div>
  );

  if (!property) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa]">
      <h2 className="text-2xl font-bold mb-4">Immobile non trovato</h2>
      <Link to="/immobili" className="text-[#94b0ab] font-bold">Torna al catalogo</Link>
    </div>
  );

  const images = [property.copertina_url, ...(property.immagini_urls || [])];
  const priceFormatted = `€ ${property.prezzo?.toLocaleString('it-IT')}`;
  const encodedAddress = encodeURIComponent(`${property.indirizzo || ''} ${property.zona || ''} Bergamo Italia`);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a] pb-32 md:pb-0">
      <Header />
      
      <div className="fixed top-20 left-4 z-40 md:hidden">
        <Link to="/immobili" className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40">
          <ArrowLeft size={20} />
        </Link>
      </div>

      <main className="pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            <div className="lg:col-span-8 space-y-10">
              
              {openHouse && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#94b0ab] text-white p-6 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-[#94b0ab]/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Calendar className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Evento in programma</p>
                      <h4 className="text-lg md:text-xl font-bold">
                        Open House: {format(new Date(openHouse.data_evento), 'd MMMM', { locale: it })} • {openHouse.ora_inizio.slice(0,5)}-{openHouse.ora_fine.slice(0,5)}
                      </h4>
                    </div>
                  </div>
                  <OpenHouseBooking 
                    openHouse={openHouse}
                    propertyTitle={property.titolo}
                    trigger={
                      <button className="h-12 px-6 bg-white text-[#94b0ab] rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                        Prenota Ora
                      </button>
                    }
                  />
                </motion.div>
              )}

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
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <MapPin size={18} className="text-[#94b0ab]" />
                  {property.zona}, {property.citta || 'Bergamo'}
                </div>
              </div>

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
                
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10">
                  {currentImgIdx} / {images.length}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Superficie', value: `${property.mq} m²`, icon: Maximize2 },
                  { label: 'Locali', value: property.locali, icon: Home },
                  { label: 'Bagni', value: property.bagni, icon: Bath },
                  { label: 'Piano', value: property.piano || 'Terra', icon: Layers },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex flex-col items-start">
                    <stat.icon size={18} className="text-[#94b0ab] mb-3" />
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-base font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Descrizione</h3>
                <div className="relative">
                  <motion.div 
                    animate={{ height: isDescExpanded ? 'auto' : 160 }}
                    className="overflow-hidden text-lg text-gray-500 leading-relaxed whitespace-pre-line"
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

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Posizione</h3>
                <div className="w-full h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-100 shadow-sm bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    className="border-0 grayscale-[0.2]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapUrl}
                  ></iframe>
                </div>
              </div>

              <div id="contact-section-mobile" className="lg:hidden p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold mb-6">Inviaci un messaggio</h3>
                 <ContactForm propertyTitle={property.titolo} />
              </div>

            </div>

            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div id="contact-sidebar" className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-xl shadow-black/5 space-y-6 overflow-hidden">
                  
                  <div className="flex items-end justify-between border-b border-gray-50 pb-6">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Prezzo Richiesto</p>
                      <p className="text-4xl font-bold tracking-tighter">{priceFormatted}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#94b0ab]/10 rounded-full border border-[#94b0ab]/20">
                        <ShieldCheck size={12} className="text-[#94b0ab]" />
                        <span className="text-[9px] font-bold uppercase tracking-tight text-[#94b0ab]">Zero Provvigioni</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {openHouse ? (
                      <div className="space-y-3">
                        <OpenHouseBooking 
                          openHouse={openHouse}
                          propertyTitle={property.titolo}
                          trigger={
                            <button className="w-full h-16 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#94b0ab]/20 hover:scale-[1.02] transition-transform">
                              Prenota Open House <Calendar size={18} />
                            </button>
                          }
                        />
                        <div className="flex items-center justify-center gap-2 text-gray-400">
                          <Users size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Posti limitati (Max {openHouse.posti_totali})</span>
                        </div>
                        <div className="relative py-4">
                          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                          <div className="relative flex justify-center"><span className="bg-white px-3 text-[10px] font-bold text-gray-300 uppercase tracking-widest">oppure</span></div>
                        </div>
                      </div>
                    ) : null}
                    
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1">Richiedi Informazioni</p>
                    <ContactForm propertyTitle={property.titolo} />
                  </div>

                  {property.link_immobiliare && (
                    <div className="pt-2">
                      <a 
                        href={property.link_immobiliare}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-14 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group"
                      >
                        Vedi su Immobiliare.it <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 p-4 pb-8 flex items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="pl-2">
          {property.link_immobiliare ? (
             <a 
               href={property.link_immobiliare}
               target="_blank"
               rel="noopener noreferrer"
               className="flex flex-col items-center justify-center w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 text-gray-400"
             >
               <ExternalLink size={20} />
               <span className="text-[8px] font-bold mt-0.5">PORTALE</span>
             </a>
          ) : (
            <>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Prezzo</p>
              <p className="text-2xl font-bold tracking-tighter">{priceFormatted}</p>
            </>
          )}
        </div>
        
        {openHouse ? (
          <OpenHouseBooking 
            openHouse={openHouse}
            propertyTitle={property.titolo}
            trigger={
              <button className="flex-1 h-14 bg-[#94b0ab] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-[#94b0ab]/10 flex items-center justify-center gap-2">
                Prenota Open House <Calendar size={18} />
              </button>
            }
          />
        ) : (
          <button 
            onClick={scrollToContact}
            className="flex-1 h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-black/10 flex items-center justify-center gap-2"
          >
            <Calendar size={18} /> Prenota Visita
          </button>
        )}
      </div>

      <footer className="py-20 mt-12 bg-white border-t border-gray-100 text-center">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default PropertyDetail;