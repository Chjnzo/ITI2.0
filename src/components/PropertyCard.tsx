"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Euro, Layers, Package } from 'lucide-react';
import { Property } from '@/data/properties';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const isSold = property.stato === 'Venduto';

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

  const CardWrapper: any = isSold ? 'div' : Link;

  return (
    <CardWrapper 
      {...(!isSold ? { to: `/immobile/${property.id}` } : {})} 
      className={cn(
        "group block h-full select-none",
        !isSold && "transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
      )}
    >
      <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full relative isolate">
        
        <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden shrink-0 rounded-t-[40px]">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 transform-gpu rounded-t-[40px]",
              !isSold && "group-hover:scale-110",
              isSold && "grayscale opacity-80"
            )}
          />
          
          <div className="absolute top-6 left-6 z-10">
            <span className={cn(
              "px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-lg",
              isSold 
                ? "bg-red-600 shadow-red-600/20" 
                : "bg-white/20 backdrop-blur-md border border-white/30 drop-shadow-md"
            )}>
              {isSold ? "VENDUTO" : property.category}
            </span>
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-1 rounded-b-[40px] bg-white">
          <div className="mb-6">
            <h3 className={cn(
              "text-2xl font-bold mb-2 transition-colors line-clamp-1",
              !isSold && "group-hover:text-[#94b0ab]"
            )}>
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <MapPin size={16} className={cn(!isSold ? "text-[#94b0ab]" : "text-gray-300")} />
              <span className="line-clamp-1">{property.location}, Bergamo</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-50 mt-auto">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                <Euro size={14} className={cn("shrink-0", !isSold ? "text-[#94b0ab]" : "text-gray-300")} />
                <span className={cn("text-xs font-bold truncate", isSold && "text-gray-400")}>
                  {property.price.replace('€ ', '')}
                </span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Prezzo</span>
            </div>

            <div className="flex flex-col gap-1 border-x border-gray-50 px-2">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                <Maximize2 size={14} className={cn("shrink-0", !isSold ? "text-[#94b0ab]" : "text-gray-300")} />
                <span className={cn("text-xs font-bold truncate", isSold && "text-gray-400")}>
                  {property.specs.mq} mq
                </span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Superficie</span>
            </div>

            <div className="flex flex-col gap-1 pl-2">
              <div className="flex items-center gap-1.5 text-[#1a1a1a]">
                {property.piano ? (
                  <Layers size={14} className={cn("shrink-0", !isSold ? "text-[#94b0ab]" : "text-gray-300")} />
                ) : (
                  <Package size={14} className={cn("shrink-0", !isSold ? "text-[#94b0ab]" : "text-gray-300")} />
                )}
                <span className={cn("text-xs font-bold truncate", isSold && "text-gray-400")}>
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
    </CardWrapper>
  );
};

export default PropertyCard;