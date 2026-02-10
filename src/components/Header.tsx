"use client";

import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="w-10 md:hidden"></div> {/* Spacer for mobile alignment */}
        
        <div className="flex-grow flex justify-center">
          <span className="text-xl md:text-2xl font-serif font-black tracking-tighter text-[#0f172a] uppercase">
            IL TUO <span className="text-[#f97316]">IMMOBILIARE</span>
          </span>
        </div>

        <button className="p-2 text-[#0f172a] hover:bg-gray-100 rounded-full transition-colors">
          <Search size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;