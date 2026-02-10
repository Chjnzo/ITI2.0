"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2 } from 'lucide-react';

const VisionLab = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="bg-[#1a1a1a] rounded-[40px] overflow-hidden relative p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#94b0ab]/10 border border-[#94b0ab]/20 rounded-full text-[#94b0ab] text-sm font-bold mb-6">
                <Sparkles size={16} />
                Vision Lab
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tighter">
                Vendi più velocemente con il <span className="text-[#94b0ab]">Virtual Staging.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Trasformiamo stanze vuote in spazi mozzafiato, aiutando gli acquirenti a vedere il potenziale della tua casa.
              </p>
              <button className="h-14 px-8 bg-[#94b0ab] hover:bg-[#83a19b] text-white rounded-2xl font-bold transition-all flex items-center gap-2">
                Prova lo Staging <Wand2 size={20} />
              </button>
            </div>
            
            <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale brightness-50"
                    alt="Before"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest">Originale</span>
                </div>
                <div className="relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover"
                    alt="After"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#94b0ab] rounded-full text-[10px] uppercase font-bold tracking-widest">Enhanced</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 w-1 bg-white/20 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionLab;