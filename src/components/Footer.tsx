"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-32 md:pb-12 text-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="block">
              <img 
                src="/Logo.svg" 
                alt="Il Tuo Immobiliare" 
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </Link>

            <div className="space-y-6">
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
                  <span>+39 375 822 7321</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#94b0ab]">
                    <Mail size={16}/>
                  </div>
                  <span>info@iltuoimmobiliare.it</span>
                </div>
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
              <Link to="/cookies" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">Cookie Policy</Link>
              <Link to="/terms" className="text-sm font-bold text-gray-600 hover:text-[#94b0ab] transition-colors">Termini di Servizio</Link>
            </nav>
          </div>

          {/* Socials & Legal */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Seguici</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/iltuo.immobiliare/" },
                { Icon: Facebook, href: "https://www.facebook.com/p/Il-Tuo-Immobiliare-61574878302324/" },
                { Icon: TikTokIcon, href: "https://www.tiktok.com/@il.tuo.immobiliare" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#94b0ab] hover:text-white hover:border-[#94b0ab] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-gray-50">
              <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-tighter">
                IL TUO IMMOBILIARE S.R.L.<br />
                P.IVA: 04898550167 · REA: BG-497456<br />
                Sede Legale: Via Matteotti 3, Albino (BG)<br />
                Sede Operativa: Via G. Adelasio 18, Ranica (BG)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} IL TUO IMMOBILIARE. TUTTI I DIRITTI RISERVATI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;