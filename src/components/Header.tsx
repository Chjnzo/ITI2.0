"use client";

import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl">
      <div className="bg-white/60 backdrop-blur-xl border border-[#94b0ab]/20 rounded-full h-16 flex items-center justify-between px-8 shadow-sm">
        <span className="text-lg font-bold tracking-tight text-[#1a1a1a] uppercase">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </span>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Vendi</a>
          <a href="#" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Compra</a>
          <a href="#" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Chi Siamo</a>
        </nav>

        <button className="p-2 text-[#1a1a1a] hover:bg-[#94b0ab]/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;