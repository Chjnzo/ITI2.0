"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Termini di Servizio | Il Tuo Immobiliare</title>
        <meta name="description" content="Termini e condizioni d'uso del sito Il Tuo Immobiliare." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-32 md:pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase block mb-3">Legale</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">Termini di Servizio</h1>
            <p className="text-gray-400 mt-3">Ultimo aggiornamento: aprile 2025</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 space-y-10 border border-gray-100 shadow-sm">

            {/* 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">1. Uso del Sito</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                L'accesso e l'utilizzo del sito <strong>iltuoimmobiliare.it</strong> ("il Sito") sono subordinati all'accettazione dei presenti Termini di Servizio. Utilizzando il Sito dichiari di avere almeno 18 anni e di accettare integralmente i presenti termini.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Il Sito è operato da <strong>Il Tuo Immobiliare S.r.l.</strong>, con sede legale in Via Matteotti 3, Albino (BG), P.IVA 04898550167. Il Sito fornisce informazioni sugli immobili e consente agli utenti di contattare l'agenzia.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                È vietato utilizzare il Sito per scopi illegali, per trasmettere contenuti offensivi, o per tentare di accedere in modo non autorizzato a sistemi informatici.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">2. Proprietà Intellettuale</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tutti i contenuti presenti sul Sito — testi, immagini, loghi, grafica, codice sorgente e marchi — sono di proprietà esclusiva di Il Tuo Immobiliare S.r.l. o dei rispettivi titolari, e sono protetti dalla normativa italiana ed europea in materia di proprietà intellettuale.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                È vietata la riproduzione, distribuzione o utilizzo dei contenuti senza previa autorizzazione scritta. È consentita la consultazione personale e la stampa di singole pagine per uso privato.
              </p>
            </section>

            {/* 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">3. Limitazione di Responsabilità</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Le informazioni sugli immobili pubblicati sul Sito (prezzi, descrizioni, metrature, fotografie) sono fornite a scopo puramente informativo e potrebbero non essere aggiornate in tempo reale. Il Tuo Immobiliare S.r.l. non garantisce la completezza o l'accuratezza di tali informazioni.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Il Sito può contenere link a siti di terze parti. Non siamo responsabili dei contenuti, delle politiche sulla privacy o delle pratiche di tali siti. Ti invitiamo a leggere le relative informative.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Il Tuo Immobiliare S.r.l. non sarà responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti dall'utilizzo o dall'impossibilità di utilizzo del Sito.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">4. Modifiche ai Termini</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Ci riserviamo il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. Le modifiche entreranno in vigore al momento della pubblicazione sul Sito. L'utilizzo continuato del Sito dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Per modifiche sostanziali cercheremo di fornire un avviso visibile sulla homepage o tramite altri canali appropriati.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">5. Legge Applicabile e Contatti</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il Foro di Bergamo, salvo diversa previsione di legge.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Per qualsiasi domanda sui presenti Termini di Servizio, contattaci a:
              </p>
              <div className="bg-[#f8f9fa] rounded-xl p-4 text-sm text-gray-600 space-y-1">
                <p><strong>Il Tuo Immobiliare S.r.l.</strong></p>
                <p>Via G. Adelasio 18, Ranica (BG)</p>
                <p>Email: <a href="mailto:info@iltuoimmobiliare.it" className="text-[#94b0ab] hover:underline">info@iltuoimmobiliare.it</a></p>
                <p>Tel: +39 375 822 7321</p>
              </div>
            </section>

            {/* Links */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-[#94b0ab] hover:underline font-medium">Privacy Policy</Link>
              <Link to="/cookies" className="text-[#94b0ab] hover:underline font-medium">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Terms;
