"use client";

import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-4xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl h-14 md:h-16 flex items-center justify-between px-6 shadow-lg shadow-black/5">
        <Link to="/" className="text-base md:text-lg font-bold tracking-tight text-[#1a1a1a] uppercase">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </Link>
        
        {/* Desktop Navigation */}
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