"use client";

import React from 'react';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-[#0a2540] block mb-6">
              IL TUO <span className="text-blue-600">IMMOBILIARE</span>
            </span>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Rivoluzioniamo il modo di vendere casa a Bergamo e provincia. Professionalità, trasparenza e zero provvigioni per i venditori.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-2 bg-[#f8f9fa] rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-[#f8f9fa] rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-[#f8f9fa] rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@iltuoimmobiliare.it" className="p-2 bg-[#f8f9fa] rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#0a2540] mb-6 uppercase tracking-wider text-sm">Link Rapidi</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#servizi" className="text-gray-500 hover:text-blue-600 transition-colors">Servizi</a></li>
              <li><a href="#chi-siamo" className="text-gray-500 hover:text-blue-600 transition-colors">Chi siamo</a></li>
              <li><a href="#immobili" className="text-gray-500 hover:text-blue-600 transition-colors">Immobili</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0a2540] mb-6 uppercase tracking-wider text-sm">Contatti</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Via Giovanni Adelasio 18,<br />Ranica (BG)</li>
              <li>info@iltuoimmobiliare.it</li>
              <li>+39 035 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Il Tuo Immobiliare. Tutti i diritti riservati.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;