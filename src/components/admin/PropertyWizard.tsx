"use client";

import React from 'react';
import MediaStep from './MediaStep';

interface PropertyWizardProps {
  step: number;
}

const PropertyWizard = ({ step }: PropertyWizardProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Titolo Annuncio</label>
              <input className="w-full h-14 bg-gray-50 border-none rounded-2xl px-5 focus:ring-2 focus:ring-[#94b0ab]/20 outline-none" placeholder="Esempio: Trilocale Moderno..." />
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <MediaStep />
        </div>
      )}
      
      {/* Fallback per gli altri step per semplicità del fix */}
      {step !== 1 && step !== 4 && (
        <div className="py-20 text-center text-gray-400">
          Configurazione Step {step}...
        </div>
      )}
    </div>
  );
};

export default PropertyWizard;