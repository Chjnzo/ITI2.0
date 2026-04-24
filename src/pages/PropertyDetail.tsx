"use client";

import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, ExternalLink, 
  Loader2, Maximize2, Layers, Bath, 
  ChevronDown, Home, Calendar,
  Users, Check, ShieldCheck
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import OpenHouseBooking from '@/components/OpenHouseBooking';
import LazyImage from '@/components/LazyImage';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { useQuery } from '@tanstack/react-query';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [currentImgIdx, setCurrentImgIdx] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { data: combinedData, isLoading: loading } = useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      // 1. Fetch Property
      const { data: propData, error: propError } = await supabase
        .from('immobili').select('*').eq('id', id).single();
      if (propError) throw propError;

      // 2. Fetch all upcoming Open Houses
      const today = new Date().toISOString().split('T')[0];
      const { data: ohData } = await supabase
        .from('open_houses')
        .select('*')
        .eq('immobile_id', propData.id)
        .gte('data_evento', today)
        .order('data_evento', { ascending: true });

      return { property: propData, openHouses: ohData ?? [] };
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  const property = combinedData?.property;
  const upcomingOpenHouses = combinedData?.openHouses ?? [];
  const nextOpenHouse = upcomingOpenHouses[0] ?? null;

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
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  const comfortFeatures = property.caratteristiche && property.caratteristiche.length > 0 
    ? property.caratteristiche 
    : ['Aria Condizionata', 'Ascensore', 'Balcone', 'Box Auto', 'Cantina'];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a] pb-32 md:pb-0">
      <Helmet>
        <title>{property.titolo} a {property.zona || 'Bergamo'} | Il Tuo Immobiliare</title>
        <meta name="description" content={`In vendita: ${property.titolo} a ${property.zona || 'Bergamo'} - € ${property.prezzo?.toLocaleString('it-IT')}. ${property.locali} locali, ${property.mq} mq. Scopri di più!`} />
        <link rel="canonical" href={`https://www.iltuoimmobiliare.it/immobile/${property.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.iltuoimmobiliare.it/immobile/${property.id}`} />
        <meta property="og:title" content={`${property.titolo} a ${property.zona || 'Bergamo'} | Il Tuo Immobiliare`} />
        <meta property="og:description" content={`In vendita: ${property.titolo} a ${property.zona || 'Bergamo'} — € ${property.prezzo?.toLocaleString('it-IT')}. ${property.locali} locali, ${property.mq} mq.`} />
        <meta property="og:image" content={property.copertina_url || 'https://www.iltuoimmobiliare.it/og-image.jpg'} />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${property.titolo} a ${property.zona || 'Bergamo'} | Il Tuo Immobiliare`} />
        <meta name="twitter:description" content={`In vendita: ${property.titolo} a ${property.zona || 'Bergamo'} — € ${property.prezzo?.toLocaleString('it-IT')}. ${property.locali} locali, ${property.mq} mq.`} />
        <meta name="twitter:image" content={property.copertina_url || 'https://www.iltuoimmobiliare.it/og-image.jpg'} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": property.titolo,
          "description": property.descrizione || `${property.tipologia || 'Immobile'} in vendita a ${property.zona}, Bergamo`,
          "url": `https://www.iltuoimmobiliare.it/immobile/${property.id}`,
          "image": property.copertina_url || "",
          "offers": {
            "@type": "Offer",
            "price": property.prezzo,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": property.mq,
            "unitCode": "MTK"
          },
          "numberOfRooms": property.locali,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": property.zona,
            "addressRegion": "BG",
            "addressCountry": "IT"
          }
        })}</script>
      </Helmet>

      <Header />
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-8 space-y-12">
              
              {upcomingOpenHouses.length > 0 && (
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
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                        {upcomingOpenHouses.length > 1 ? `${upcomingOpenHouses.length} date disponibili` : 'Evento in programma'}
                      </p>
                      <h4 className="text-lg md:text-xl font-bold">
                        Open House: {format(new Date(nextOpenHouse!.data_evento), 'd MMMM', { locale: it })} • {nextOpenHouse!.ora_inizio.slice(0,5)}-{nextOpenHouse!.ora_fine.slice(0,5)}
                      </h4>
                    </div>
                  </div>
                  <OpenHouseBooking
                    openHouses={upcomingOpenHouses}
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
                  <span className="px-4 py-1.5 bg-white border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {property.locali}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">{property.titolo}</h1>
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <MapPin size={18} className="text-[#94b0ab]" />
                  {[property.zona, property.citta || 'Bergamo'].filter(Boolean).join(', ')}
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
                      <LazyImage src={img} alt={`${property.titolo} ${i + 1}`} className="object-cover" />
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
                <h3 className="text-2xl font-bold tracking-tight">Comfort e Dotazioni</h3>
                <div className="flex flex-wrap gap-2">
                  {comfortFeatures.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 shadow-sm">
                      <Check size={16} className="text-[#94b0ab]" /> {item}
                    </div>
                  ))}
                </div>
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
                <div className="bg-[#94b0ab]/5 border border-[#94b0ab]/20 rounded-[32px] p-6 md:p-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#94b0ab] shadow-sm shrink-0">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Dossier Casa Verificata</h3>
                      <p className="text-gray-500 text-sm">Dati tecnici controllati dai nostri agenti.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Classe Energetica</p>
                      <p className="text-base font-bold text-[#1a1a1a]">{property.classe_energetica || 'N/D'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Spese Condominiali</p>
                      <p className="text-base font-bold text-[#1a1a1a]">
                        {property.spese_condominiali ? `€ ${property.spese_condominiali}/mese` : 'N/D'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Stato Immobile</p>
                      <p className="text-base font-bold text-[#1a1a1a]">{property.stato_immobile || 'Ottimo/Ristrutturato'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Anno Costruzione</p>
                      <p className="text-base font-bold text-[#1a1a1a]">{property.anno_costruzione || 'N/D'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Posizione</h3>
                <div className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-100 bg-white shadow-sm isolate">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
                  />
                  <div className="relative p-10 md:p-16 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-[#94b0ab]/10 rounded-full flex items-center justify-center mb-6">
                      <MapPin size={28} className="text-[#94b0ab]" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                      {property.zona || property.citta || 'Bergamo'}
                    </h4>
                    <p className="text-gray-400 font-medium mb-8 max-w-sm">
                      Clicca qui per vedere la posizione esatta, se non disponibile contattaci per ricervela!
                    </p>
                    <a 
                      href={externalMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-[#94b0ab] hover:-translate-y-1 transition-all shadow-lg shadow-black/10"
                    >
                      Apri in Google Maps <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {property.link_immobiliare && (
                <div className="pt-4">
                  <a 
                    href={property.link_immobiliare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-16 border-2 border-gray-200 text-[#1a1a1a] bg-transparent hover:bg-gray-50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    Vedi su Immobiliare.it <ExternalLink size={20} />
                  </a>
                </div>
              )}

              <div id="contact-section-mobile" className="lg:hidden p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold mb-6">Inviaci un messaggio</h3>
                 <ContactForm propertyTitle={property.titolo} propertyId={property.id} />
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
                  </div>
                  <div className="space-y-4">
                    {upcomingOpenHouses.length > 0 ? (
                      <div className="space-y-3">
                        <OpenHouseBooking
                          openHouses={upcomingOpenHouses}
                          propertyTitle={property.titolo}
                          trigger={
                            <button className="w-full h-16 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#94b0ab]/20 hover:scale-[1.02] transition-transform">
                              Prenota Open House <Calendar size={18} />
                            </button>
                          }
                        />
                        <div className="flex items-center justify-center gap-2 text-gray-400">
                          <Users size={14} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">
                            {upcomingOpenHouses.length > 1
                              ? `${upcomingOpenHouses.length} date disponibili`
                              : `Posti limitati (Max ${nextOpenHouse!.posti_totali})`}
                          </span>
                        </div>
                        <div className="relative py-4">
                          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                          <div className="relative flex justify-center"><span className="bg-white px-3 text-[10px] font-bold text-gray-300 uppercase tracking-widest">oppure</span></div>
                        </div>
                      </div>
                    ) : null}
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest px-1">Richiedi Informazioni</p>
                    <ContactForm propertyTitle={property.titolo} propertyId={property.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 pb-8 flex items-center justify-between gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Prezzo</p>
          <div className="text-2xl font-bold text-[#1a1a1a] tracking-tight">{priceFormatted}</div>
        </div>
        {upcomingOpenHouses.length > 0 ? (
          <OpenHouseBooking
            openHouses={upcomingOpenHouses}
            propertyTitle={property.titolo}
            trigger={
              <button className="h-14 px-8 bg-[#94b0ab] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-[#94b0ab]/20 flex items-center justify-center gap-2">
                Prenota <Calendar size={18} />
              </button>
            }
          />
        ) : (
          <button 
            onClick={scrollToContact}
            className="h-14 px-8 bg-[#94b0ab] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-[#94b0ab]/20 flex items-center justify-center gap-2"
          >
            Contattaci <Calendar size={18} />
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;