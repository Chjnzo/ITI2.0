"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Euro, Layers, Package } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  // Helper per abbreviare il piano
  const formatPiano = (piano?: string, garage?: boolean) => {
    if (!piano) return garage ? "Box Auto" : "Disponibile";
    
    const p = piano.toLowerCase();
    if (p.includes("terra")) return "P. Terra";
    if (p.includes("primo")) return "1° Piano";
    if (p.includes("secondo")) return "2° Piano";
    if (p.includes("terzo")) return "3° Piano";
    if (p.includes("ultimo")) return "Ultimo P.";
    return piano;
  };

  return (
    <Link to={`/property/${property.slug}`} className="group block h-full">
      <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative aspect-[4/3] overflow-hidden shrink-0">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Top-Left Floating Badge (The Category/Locali) */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-[#94b0ab]/90 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {property.category}
            </span>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-8 flex flex-col flex-1">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#94b0ab] transition-colors line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <MapPin size={16} className="text-[#94b0ab]" />
              <span className="line-clamp-1">{property.location}, Bergamo</span>
            </div>
          </div>
          
          {/* Bottom Info Row: 3 Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-50 mt-auto">
            {/* Slot 1: Price */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                <Euro size={14} className="text-[#94b0ab] shrink-0" />
                <span className="text-xs font-bold truncate">{property.price.replace('€ ', '')}</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Prezzo</span>
            </div>

            {/* Slot 2: Size */}
            <div className="flex flex-col gap-1 border-x border-gray-50 px-2">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                <Maximize2 size={14} className="text-[#94b0ab] shrink-0" />
                <span className="text-xs font-bold truncate">{property.specs.mq} mq</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Superficie</span>
            </div>

            {/* Slot 3: Differentiator (Piano/Garage) */}
            <div className="flex flex-col gap-1 pl-2">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                {property.piano ? (
                  <Layers size={14} className="text-[#94b0ab] shrink-0" />
                ) : (
                  <Package size={14} className="text-[#94b0ab] shrink-0" />
                )}
                <span className="text-xs font-bold truncate">
                  {formatPiano(property.piano, property.garage)}
                </span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">
                {property.piano ? "Piano" : "Extra"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;