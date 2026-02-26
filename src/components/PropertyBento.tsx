"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';
import PropertyCard from './PropertyCard';
import { Skeleton } from '@/components/ui/skeleton';

const PropertyBento = () => {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch properties marked as "in_evidenza"
        const { data: inEvidenza, error: err1 } = await supabase
          .from('immobili')
          .select('*')
          .eq('stato', 'Disponibile')
          .eq('in_evidenza', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (err1) throw err1;

        let finalProps = inEvidenza || [];

        // 2. Fallback: If less than 3, fetch latest available properties
        if (finalProps.length < 3) {
          const excludedIds = finalProps.map(p => p.id);
          const { data: latest, error: err2 } = await supabase
            .from('immobili')
            .select('*')
            .eq('stato', 'Disponibile')
            .not('id', 'in', `(${excludedIds.join(',') || '00000000-0000-0000-0000-000000000000'})`)
            .order('created_at', { ascending: false })
            .limit(3 - finalProps.length);

          if (err2) throw err2;
          if (latest) finalProps = [...finalProps, ...latest];
        }

        // 3. Map to Property Interface
        const mapped = finalProps.slice(0, 3).map((db: any) => ({
          id: db.id,
          slug: db.slug,
          title: db.titolo,
          price: `€ ${db.prezzo?.toLocaleString('it-IT')}`,
          location: db.zona || db.indirizzo,
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

        setFeatured(mapped as Property[]);
      } catch (err) {
        console.error("Error fetching featured properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-2 block">Selezione Premium</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">In Evidenza</h2>
            <p className="text-gray-400 mt-1 font-medium italic">Selezionati • 0% commissioni per te</p>
          </div>
          <Link to="/immobili" className="hidden md:flex items-center gap-2 font-bold text-[#94b0ab] hover:gap-3 transition-all">
            Vedi Tutti <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-6">
                <Skeleton className="aspect-[4/5] rounded-[40px]" />
                <div className="space-y-3 px-2">
                  <Skeleton className="h-8 w-2/3 rounded-lg" />
                  <Skeleton className="h-4 w-1/3 rounded-lg" />
                </div>
              </div>
            ))
          ) : (
            featured.map((prop) => (
              <div key={prop.id} className="h-full">
                <PropertyCard property={prop} />
              </div>
            ))
          )}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-10 md:hidden">
          <Link to="/immobili" className="flex items-center justify-center gap-2 h-14 bg-white border border-gray-100 rounded-2xl font-bold text-[#94b0ab]">
            Sfoglia Catalogo <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyBento;