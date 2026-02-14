"use client";

import React from 'react';
import { ImagePlus, Upload, Trash2, Star, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const MediaStep = () => {
  const hasCover = true;
  const galleryImages = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">Immagine di Copertina</h4>
          <span className="text-[10px] font-bold text-[#94b0ab] uppercase tracking-tighter">Obbligatoria</span>
        </div>
        
        <div className={cn(
          "relative border-2 border-dashed border-gray-200 rounded-[24px] overflow-hidden transition-all group",
          "min-h-[180px] flex items-center justify-center bg-gray-50/50 hover:border-[#94b0ab]/50"
        )}>
          {hasCover ? (
            <div className="w-full h-48 relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6191da95b8?q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="Cover preview"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="p-3 bg-white text-red-500 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center p-8">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-400 mx-auto mb-4 shadow-sm">
                <ImagePlus size={24} />
              </div>
              <p className="text-sm font-bold text-gray-500">Trascina qui la foto principale</p>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">Galleria Fotografica</h4>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          <button className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 bg-gray-50/50 hover:border-[#94b0ab]/50 transition-all">
            <Upload size={20} className="text-gray-300" />
            <span className="text-[9px] font-bold text-gray-400 uppercase">Aggiungi</span>
          </button>

          {galleryImages.map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group border border-gray-100">
              <img 
                src={`https://images.unsplash.com/photo-${1600566752355 + i}-357211a3e960?q=80&w=400`} 
                className="w-full h-full object-cover"
                alt={`Gallery ${i}`}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
          <Info size={18} className="text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-blue-700 leading-relaxed">
            <strong>Consiglio:</strong> Carica foto ben illuminate per aumentare le possibilità di vendita.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MediaStep;