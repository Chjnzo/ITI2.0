"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Il Tuo Immobiliare</title>
        <meta name="description" content="Informativa sull'uso dei cookie sul sito Il Tuo Immobiliare." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-[#f8f9fa] pt-28 pb-32 md:pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase block mb-3">Legale</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tighter">Cookie Policy</h1>
            <p className="text-gray-400 mt-3">Ultimo aggiornamento: aprile 2025</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 space-y-10 border border-gray-100 shadow-sm">

            {/* Intro */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Cosa sono i cookie?</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente (computer, tablet, smartphone) durante la navigazione. Vengono riletti ad ogni visita successiva per migliorare l'esperienza utente e raccogliere dati statistici.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Il presente documento descrive le tipologie di cookie utilizzate da <strong>iltuoimmobiliare.it</strong> e le modalità per gestirle.
              </p>
            </section>

            {/* Technical */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Cookie Tecnici (necessari)</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                I cookie tecnici sono strettamente necessari al funzionamento del sito e non possono essere disabilitati. Non richiedono il consenso dell'utente.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fa]">
                      <th className="text-left p-3 font-bold text-[#1a1a1a] rounded-tl-xl">Nome</th>
                      <th className="text-left p-3 font-bold text-[#1a1a1a]">Scopo</th>
                      <th className="text-left p-3 font-bold text-[#1a1a1a] rounded-tr-xl">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="p-3 text-gray-600 font-mono text-xs">cookieConsent</td>
                      <td className="p-3 text-gray-600">Memorizza la preferenza di consenso cookie</td>
                      <td className="p-3 text-gray-600">1 anno</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600 font-mono text-xs">sb-*</td>
                      <td className="p-3 text-gray-600">Sessione autenticazione Supabase (solo utenti CRM)</td>
                      <td className="p-3 text-gray-600">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Analytics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Cookie Analitici (opzionali)</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                I cookie analitici ci permettono di capire come gli utenti interagiscono con il sito, raccogliendo informazioni in forma anonima. Vengono installati solo previo consenso esplicito.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fa]">
                      <th className="text-left p-3 font-bold text-[#1a1a1a] rounded-tl-xl">Fornitore</th>
                      <th className="text-left p-3 font-bold text-[#1a1a1a]">Scopo</th>
                      <th className="text-left p-3 font-bold text-[#1a1a1a] rounded-tr-xl">Privacy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="p-3 text-gray-600">Sentry (error monitoring)</td>
                      <td className="p-3 text-gray-600">Tracciamento errori tecnici anonimi</td>
                      <td className="p-3 text-gray-600">
                        <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#94b0ab] hover:underline">sentry.io</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs">
                Attualmente non utilizziamo Google Analytics o altri cookie di profilazione pubblicitaria.
              </p>
            </section>

            {/* Managing */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#1a1a1a]">Come gestire i cookie</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Puoi gestire le preferenze cookie tramite il banner presente in fondo alla pagina, oppure attraverso le impostazioni del tuo browser:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 list-none">
                {[
                  { browser: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                  { browser: 'Firefox', url: 'https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
                  { browser: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                  { browser: 'Edge', url: 'https://support.microsoft.com/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d' },
                ].map(({ browser, url }) => (
                  <li key={browser} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#94b0ab] shrink-0" />
                    <a href={url} target="_blank" rel="noopener noreferrer nofollow" className="text-[#94b0ab] hover:underline">{browser}</a>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs">
                La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
              </p>
            </section>

            {/* Links */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-[#94b0ab] hover:underline font-medium">Privacy Policy</Link>
              <Link to="/terms" className="text-[#94b0ab] hover:underline font-medium">Termini di Servizio</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CookiePolicy;
