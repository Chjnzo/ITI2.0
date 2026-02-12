"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, BedDouble, Bath } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
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
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
              {property.category}
            </span>
          </div>
          <div className="absolute bottom-6 right-6">
            <span className="px-6 py-3 bg-[#94b0ab] text-white rounded-full text-lg font-bold shadow-lg">
              {property.price}
            </span>
          </div>
        </div>
        
        {/* Content Area with Fixed Height Logic */}
        <div className="p-8 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-[#94b0ab] transition-colors line-clamp-1">
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <MapPin size={16} className="text-[#94b0ab]" />
              <span className="line-clamp-1">{property.location}, Bergamo</span>
            </div>
          </div>
          
          {/* Specs Aligned to Bottom */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-50 mt-auto">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#1a1a1a]">
                <Maximize2 size={14} className="text-[#94b0ab]" />
                <span className="text-sm font-bold">{property.specs.mq}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">mq</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#1a1a1a]">
                <BedDouble size={14} className="text-[#94b0ab]" />
                <span className="text-sm font-bold">{property.specs.rooms}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Locali</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#1a1a1a]">
                <Bath size={14} className="text-[#94b0ab]" />
                <span className="text-sm font-bold">{property.specs.baths}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Bagni</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;