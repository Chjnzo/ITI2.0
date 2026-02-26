"use client";

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith('/immobile/') || location.pathname.startsWith('/property/');

  const scrollToContact = () => {
    if (window.location.pathname !== '/') {
      navigate('/?scroll=contatti');
    } else {
      document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex items-center gap-2 max-w-4xl mx-auto">
      {isDetailPage && (
        <Link 
          to="/immobili" 
          className="w-12 h-12 shrink-0 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-lg shadow-black/5 text-[#1a1a1a] hover:bg-white transition-all active:scale-95"
        >
          <ArrowLeft size={20} />
        </Link>
      )}

      <div className={cn(
        "flex-1 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl flex items-center justify-between px-6 md:px-8 shadow-lg shadow-black/5 transition-all duration-300",
        isDetailPage ? "h-12 md:h-14" : "h-14 md:h-16 w-full"
      )}>
        <Link to="/" className="text-[13px] md:text-lg font-bold tracking-tight text-[#1a1a1a] uppercase whitespace-nowrap">
          IL TUO <span className="text-[#94b0ab]">IMMOBILIARE</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Home</Link>
          <Link to="/immobili" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Immobili</Link>
          <Link to="/chi-siamo" className="text-sm font-bold text-[#1a1a1a]/60 hover:text-[#94b0ab] transition-colors">Chi Siamo</Link>
        </nav>

        <button 
          onClick={scrollToContact} 
          className="hidden md:block text-xs font-bold bg-[#1a1a1a] text-white px-5 py-2.5 rounded-2xl hover:bg-[#94b0ab] transition-colors"
        >
          Parliamo
        </button>

        {/* Mobile Placeholder to balance logo if needed on detail */}
        {!isDetailPage && <div className="md:hidden w-6" />}
      </div>
    </header>
  );
};

export default Header;