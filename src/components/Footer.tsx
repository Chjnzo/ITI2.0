"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { MadeWithDyad } from "./made-with-dyad";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-32 md:pb-12 text-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="block">
              <img 
                src="/Logo.svg" 
                alt="Il Tuo Immobiliare" 
                className="h-24 md:h-32 w-auto object-contain" 
              />
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              L'immobiliare a Bergamo che rivoluziona il mercato con il metodo a zero provvigioni per chi vende. Qualità, trasparenza e innovazione digitale.
            </p>
            <div className="text-gray-400 text-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#94b0ab]">
                  <MapPin size={16}/>
                </div>
                <span>Via G. Adelasio 18, Ranica (BG)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#94b0ab]">
                  <Phone size={16}/>
                </div>
                <span>+39 035 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#94b0ab]">
                  <Mail size={16}/>
                </div>
                <span>info@iltuoimmobiliare.it</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Esplora</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">Home</Link>
              <Link to="/immobili" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">Catalogo Immobili</Link>
              <Link to="/chi-siamo" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">La Nostra Storia</Link>
              <Link to="/privacy" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">Privacy Policy</Link>
            </nav>
          </div>

          {/* Socials & Legal */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Seguici</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#94b0ab] hover:text-white hover:border-[#94b0ab] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-gray-50">
              <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-tighter">
                Il Tuo Immobiliare S.r.l.<br />
                P.IVA: 01234567890 • REA: BG-000000<br />
                Sede Legale: Via G. Adelasio 18, Ranica (BG)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} IL TUO IMMOBILIARE. TUTTI I DIRITTI RISERVATI.
          </p>
          <div className="flex items-center gap-2">
            <MadeWithDyad />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;