"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (window.location.pathname !== '/') {
      navigate('/?scroll=contatti');
    } else {
      document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-4xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl h-14 md:h-16 flex items-center justify-between px-8 shadow-lg shadow-black/5">
        <Link to="/" className="text-base md:text-lg font-bold tracking-tight text-[#1a1a1a] uppercase">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Home</Link>
          <Link to="/immobili" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Immobili</Link>
          <Link to="/chi-siamo" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Chi Siamo</Link>
        </nav>

        <div className="md:hidden w-6" />
        <button 
          onClick={scrollToContact} 
          className="hidden md:block text-xs font-bold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-2xl hover:bg-[#94b0ab] transition-colors"
        >
          Parliamo
        </button>
      </div>
    </header>
  );
};

export default Header;