"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import Header from '@/components/Header';
import { 
  MapPin, ArrowLeft, Phone, MessageSquare, 
  Loader2, Maximize2, Layers, Bath, 
  ChevronDown, Home, Calendar, ShieldCheck
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
  
  // Encode address for Google Maps
  const encodedAddress = encodeURIComponent(`${property.indirizzo || ''} ${property.zona || ''} Bergamo Italia`);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Media & Info (65%) */}
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
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <MapPin size={18} className="text-[#94b0ab]" />
                  {property.zona}, {property.citta || 'Bergamo'}
                </div>
              </div>

              {/* Gallery */}
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

              {/* Quick Stats Grid 2x2 */}
              <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { label: 'Superficie', value: `${property.mq} m²`, icon: Maximize2 },
                    { label: 'Locali', value: property.locali, icon: Home },
                    { label: 'Bagni', value: property.bagni, icon: Bath },
                    { label: 'Piano', value: property.piano || 'Terra', icon: Layers },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 md:p-6 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-start">
                      <stat.icon size={18} className="text-[#94b0ab] mb-3 md:mb-4" />
                      <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-base md:text-lg font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
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

              {/* Live Google Map */}
              <section id="mappa" className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Posizione</h3>
                <div className="w-full h-[400px] md:h-[500px] rounded-[48px] overflow-hidden border border-gray-100 shadow-sm bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapUrl}
                  ></iframe>
                </div>
              </section>

              {/* Bottom Contact Form Section (for desktop visibility & mobile Conversion) */}
              <section id="contatti-diretti" className="p-8 md:p-12 bg-white rounded-[48px] border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold tracking-tight mb-8 text-center md:text-left">Richiedi Informazioni</h3>
                <ContactForm propertyTitle={property.titolo} />
              </section>

            </div>

            {/* Desktop Sticky Sidebar (35%) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-white p-8 rounded-[48px] border border-gray-100 shadow-xl shadow-black/5 space-y-8">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Prezzo Richiesto</p>
                    <p className="text-5xl font-bold tracking-tighter">{priceFormatted}</p>
                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-[#94b0ab]/5 rounded-full w-fit border border-[#94b0ab]/10">
                      <ShieldCheck size={14} className="text-[#94b0ab]" />
                      <span className="text-[10px] font-bold uppercase tracking-tight text-[#94b0ab]">0% provvigioni venditore</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={() => document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full h-16 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-[#94b0ab] transition-all flex items-center justify-center gap-2 group"
                    >
                      Prenota Visita <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <a 
                      href={`https://wa.me/390351234567?text=Buongiorno, vorrei informazioni per l'immobile: ${property.titolo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-16 bg-white border-2 border-gray-100 text-[#1a1a1a] rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                      WhatsApp <MessageSquare size={18} />
                    </a>
                  </div>

                  <p className="text-[10px] text-gray-400 font-medium text-center leading-relaxed">
                    Risposta garantita entro 24 ore lavorative. <br />
                    I dati sono trattati secondo la privacy policy.
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
          <a 
            href="tel:+390351234567"
            className="w-14 h-14 bg-white border border-gray-200 text-[#94b0ab] rounded-2xl flex items-center justify-center shadow-sm"
          >
            <Phone size={24} />
          </a>
          <button 
            onClick={() => document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold text-sm tracking-tight shadow-xl shadow-black/10"
          >
            Contattaci Ora
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