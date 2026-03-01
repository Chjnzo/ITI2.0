"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Helmet>
        <title>Privacy Policy | Il Tuo Immobiliare</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 md:pt-44 pb-32 container mx-auto px-4 max-w-3xl">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-3 block">Documento Legale</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Privacy Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm prose prose-gray max-w-none text-gray-500">
          <p><strong>Titolare del Trattamento dei Dati:</strong><br />
          Il Tuo Immobiliare S.r.l.<br />
          Via G. Adelasio 18, Ranica (BG)<br />
          P.IVA: 01234567890<br />
          Email: info@iltuoimmobiliare.it</p>

          <p className="italic mt-6">
            Nota: Questo documento è in fase di aggiornamento. La versione completa dell'informativa sulla privacy, redatta ai sensi del GDPR (Regolamento UE 2016/679), verrà pubblicata a breve.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;