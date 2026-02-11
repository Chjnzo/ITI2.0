"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Property } from '@/data/properties';

const PropertyBento = () => {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data, error } = await supabase
          .from('immobili')
          .select('*')
          .limit(2);

        if (error) throw error;

        if (data) {
          const mapped = data.map((db: any) => ({
            id: db.id,
            slug: db.slug,
            title: db.titolo,
            price: `€ ${db.prezzo.toLocaleString('it-IT')}`,
            location: db.zona,
            specs: { mq: db.mq },
            images: [db.copertina_url]
          }));
          setFeatured(mapped as any);
        }
      } catch (err) {
        console.error("Error fetching featured properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) return (
    <div className="py-24 flex justify-center">
      <Loader2 className="w-8 h-8 text-[#94b0ab] animate-spin" />
    </div>
  );

  if (featured.length === 0) return null;

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">In Evidenza</h2>
            <p className="text-gray-400 mt-1 font-medium italic">Selezionati • 0% commissioni per te</p>
          </div>
          <Link to="/immobili" className="hidden md:flex items-center gap-2 font-bold text-[#94b0ab] hover:gap-3 transition-all">
            Vedi Tutti <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((prop) => (
            <Link key={prop.id} to={`/property/${prop.slug}`} className="group block">
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[32px] md:rounded-[40px] overflow-hidden mb-6 shadow-md">
                <img 
                  src={prop.images[0]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={prop.title}
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                    Zero Provvigioni
                  </span>
                </div>
                <div className="absolute bottom-6 right-6">
                   <div className="px-6 py-3 bg-white text-[#1a1a1a] rounded-2xl font-bold shadow-lg">
                    {prop.price}
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-1 group-hover:text-[#94b0ab] transition-colors">{prop.title}</h3>
                    <p className="text-gray-400 font-medium flex items-center gap-2">
                      <MapPin size={16} className="text-[#94b0ab]" /> {prop.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#1a1a1a] uppercase tracking-widest">{prop.specs.mq} m²</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyBento;