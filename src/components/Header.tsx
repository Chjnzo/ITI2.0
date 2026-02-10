"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-4xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl h-14 md:h-16 flex items-center justify-between px-8 shadow-lg shadow-black/5">
        <Link to="/" className="text-base md:text-lg font-bold tracking-tight text-[#1a1a1a] uppercase hover:opacity-80 transition-opacity">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/vendi" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Vendi</Link>
          <Link to="/immobili" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Compra</Link>
          <Link to="/chi-siamo" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Chi Siamo</Link>
        </nav>

        <div className="md:hidden w-6" /> {/* Spacer for mobile balance */}
        <Link to="/vendi" className="hidden md:block text-xs font-bold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-2xl hover:bg-[#94b0ab] transition-colors">
          Contattaci
        </Link>
      </div>
    </header>
  );
};

export default Header;