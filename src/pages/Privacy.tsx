"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Helmet>
        <title>Privacy Policy | Il Tuo Immobiliare</title>
        <meta name="description" content="Informativa sulla privacy e trattamento dei dati personali di Il Tuo Immobiliare." />
      </Helmet>

      <Header />
      
      <main className="pt-44 pb-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-16 rounded-[48px] border border-gray-100 shadow-sm"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Note Legali</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Privacy Policy.</h1>
            
            <div className="prose prose-gray max-w-none space-y-8 text-gray-500 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#1a1a1a]">1. Introduzione</h2>
                <p>
                  La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione di questo sito, in riferimento al trattamento dei dati personali degli utenti/visitatori che lo consultano. L'informativa è resa ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR - EU 2016/679).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#1a1a1a]">2. Titolare del Trattamento</h2>
                <p>
                  Il titolare del trattamento è Il Tuo Immobiliare, con sede legale in Via G. Adelasio 18, Ranica (BG). Per qualsiasi richiesta in merito alla protezione dei dati, è possibile contattare l'indirizzo email: info@iltuoimmobiliare.it.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#1a1a1a]">3. Tipologia di dati trattati</h2>
                <p>
                  I dati trattati attraverso il sito includono dati di navigazione (indirizzo IP, tipo di browser, etc.) e dati forniti volontariamente dall'utente attraverso i moduli di contatto (nome, cognome, email, telefono, messaggio).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#1a1a1a]">4. Finalità del trattamento</h2>
                <p>
                  I dati sono trattati esclusivamente per fornire i servizi richiesti (valutazioni immobiliari, informazioni sugli annunci, prenotazioni Open House) e per adempiere agli obblighi di legge.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#1a1a1a]">5. Diritti dell'interessato</h2>
                <p>
                  Gli interessati hanno il diritto di richiedere l'accesso ai propri dati, la rettifica, la cancellazione o la limitazione del trattamento, nonché il diritto di opporsi al trattamento stesso in qualsiasi momento.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;