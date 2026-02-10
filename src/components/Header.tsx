"use client";

import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl">
      <div className="bg-white/60 backdrop-blur-xl border border-[#94b0ab]/20 rounded-full h-16 flex items-center justify-between px-8 shadow-sm">
        <Link to="/" className="text-lg font-bold tracking-tight text-[#1a1a1a] uppercase">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/vendi" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Vendi</Link>
          <Link to="/immobili" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Compra</Link>
          <Link to="/chi-siamo" className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Chi Siamo</Link>
        </nav>

        <button className="p-2 text-[#1a1a1a] hover:bg-[#94b0ab]/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;