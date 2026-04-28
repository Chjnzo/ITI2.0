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
        
        <div className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm space-y-8 text-gray-500 leading-relaxed">

          <div>
            <p className="text-xs font-bold text-[#94b0ab] uppercase tracking-widest mb-1">Informativa sul Trattamento dei Dati Personali (Privacy Policy)</p>
            <p className="text-sm italic">Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 ("GDPR")</p>
            <p className="mt-4">
              Benvenuto sul sito web di <strong className="text-[#1a1a1a]">Il Tuo Immobiliare</strong>. La tutela della tua privacy è per noi fondamentale. In questo documento ti spieghiamo in modo trasparente quali dati raccogliamo, perché lo facciamo e come li proteggiamo.
            </p>
          </div>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">1. Titolare del Trattamento</h2>
            <p>Il Titolare del trattamento dei dati personali è:</p>
            <address className="not-italic mt-2 space-y-0.5">
              <p><strong className="text-[#1a1a1a]">Il Tuo Immobiliare S.r.l.</strong></p>
              <p>Via G. Adelasio 18, 24020 Ranica (BG)</p>
              <p>P.IVA: 04898550167</p>
              <p>Email: <a href="mailto:info@iltuoimmobiliare.it" className="text-[#94b0ab] underline underline-offset-2 hover:text-[#83a19b] transition-colors">info@iltuoimmobiliare.it</a></p>
              <p>Telefono: <a href="tel:+393758227321" className="text-[#94b0ab] underline underline-offset-2 hover:text-[#83a19b] transition-colors">+39 375 822 7321</a></p>
            </address>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">2. Quali dati personali raccogliamo</h2>
            <p className="mb-3">Raccogliamo e trattiamo i seguenti dati personali forniti volontariamente dall&apos;utente tramite i moduli presenti sul sito (es. modulo di contatto, prenotazione Open House, richiesta di valutazione):</p>
            <ul className="space-y-2 list-none pl-0">
              <li><strong className="text-[#1a1a1a]">Dati anagrafici e di contatto:</strong> Nome, cognome, indirizzo email, numero di telefono.</li>
              <li><strong className="text-[#1a1a1a]">Dati immobiliari:</strong> Indirizzo, caratteristiche dell&apos;immobile e altre informazioni fornite per la richiesta di valutazione o per l&apos;interesse verso un annuncio.</li>
              <li><strong className="text-[#1a1a1a]">Dati di navigazione:</strong> Indirizzi IP, log di sistema e dati raccolti tramite cookie (per i quali si rimanda all&apos;apposita Cookie Policy).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">3. Finalità e Base Giuridica del Trattamento</h2>
            <p className="mb-4">I tuoi dati vengono trattati per le seguenti finalità:</p>
            <div className="space-y-4">
              <div className="border-l-2 border-[#94b0ab]/30 pl-4">
                <p><strong className="text-[#1a1a1a]">A. Rispondere alle tue richieste:</strong> Per ricontattarti a seguito della compilazione del modulo di contatto o per prenotare la tua visita a un Open House.</p>
                <p className="text-sm mt-1 italic">Base giuridica: Esecuzione di misure precontrattuali adottate su richiesta dell&apos;interessato (Art. 6, lett. b, GDPR).</p>
              </div>
              <div className="border-l-2 border-[#94b0ab]/30 pl-4">
                <p><strong className="text-[#1a1a1a]">B. Valutazione Immobiliare:</strong> Per erogare il servizio di stima e generare il report di valutazione del tuo immobile, e per le comunicazioni ad esso collegate.</p>
                <p className="text-sm mt-1 italic">Base giuridica: Esecuzione di misure precontrattuali o di un contratto (Art. 6, lett. b, GDPR).</p>
              </div>
              <div className="border-l-2 border-[#94b0ab]/30 pl-4">
                <p><strong className="text-[#1a1a1a]">C. Sicurezza e funzionamento del sito:</strong> Per garantire il corretto funzionamento tecnico dell&apos;infrastruttura web e prevenire frodi o abusi.</p>
                <p className="text-sm mt-1 italic">Base giuridica: Legittimo interesse del Titolare (Art. 6, lett. f, GDPR).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">4. Modalità di Trattamento e Sicurezza</h2>
            <p>Il trattamento dei dati avviene mediante strumenti informatici e telematici, con logiche strettamente correlate alle finalità indicate. Abbiamo adottato misure di sicurezza tecniche e organizzative all&apos;avanguardia per prevenire la perdita, l&apos;uso illecito o l&apos;accesso non autorizzato ai tuoi dati. Il nostro database (infrastruttura CRM interna) è protetto da sistemi di crittografia avanzata e da protocolli di sicurezza per l&apos;accesso a livello di riga (<strong className="text-[#1a1a1a]">Row Level Security - RLS</strong>), garantendo che i tuoi dati siano visibili solo al personale autorizzato dell&apos;agenzia.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">5. Chi ha accesso ai tuoi dati (Responsabili del Trattamento)</h2>
            <p className="mb-3">I tuoi dati non saranno mai venduti o ceduti a terzi per scopi commerciali. Potranno però essere condivisi con soggetti esterni strettamente necessari per l&apos;erogazione dei nostri servizi, nominati "Responsabili Esterni del Trattamento":</p>
            <ul className="space-y-2 list-none pl-0">
              <li><strong className="text-[#1a1a1a]">Fornitori di servizi Cloud e Database:</strong> Per l&apos;archiviazione sicura dei dati (es. Supabase, Cloudflare) i cui server sono localizzati all&apos;interno dell&apos;Unione Europea (es. Francoforte).</li>
              <li><strong className="text-[#1a1a1a]">Fornitori di servizi Email:</strong> Per l&apos;invio automatizzato dei report di valutazione o delle conferme di appuntamento (es. Resend).</li>
              <li><strong className="text-[#1a1a1a]">Consulenti e tecnici IT:</strong> Incaricati dello sviluppo e della manutenzione del nostro sito web e gestionale, vincolati da rigorosi accordi di riservatezza.</li>
            </ul>
            <p className="mt-3">I dati non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE). Qualora ciò si rendesse necessario per l&apos;utilizzo di specifici software, avverrà esclusivamente verso Paesi in grado di garantire un livello di protezione adeguato (es. tramite Clausole Contrattuali Tipo approvate dalla Commissione Europea o accordi Data Privacy Framework).</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">6. Periodo di Conservazione dei Dati</h2>
            <p className="mb-3">I dati personali saranno conservati solo per il tempo strettamente necessario a conseguire le finalità per le quali sono stati raccolti:</p>
            <ul className="space-y-2 list-none pl-0">
              <li>I dati forniti per richieste di contatto o valutazioni non seguite da un incarico saranno conservati per un periodo massimo di <strong className="text-[#1a1a1a]">24 mesi</strong> dall&apos;ultimo contatto.</li>
              <li>Se diventerai nostro cliente, i dati relativi alla compravendita e alla fatturazione saranno conservati per <strong className="text-[#1a1a1a]">10 anni</strong>, come richiesto dalla normativa civile, fiscale e contabile italiana.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#1a1a1a] mb-3">7. I tuoi Diritti (Artt. 15–22 GDPR)</h2>
            <p className="mb-3">In qualità di interessato, la legge ti garantisce il diritto di:</p>
            <ul className="space-y-2 list-none pl-0">
              <li><strong className="text-[#1a1a1a]">Accedere</strong> ai tuoi dati personali e conoscerne l&apos;origine, le finalità e le modalità di trattamento.</li>
              <li><strong className="text-[#1a1a1a]">Rettificare</strong> dati inesatti o integrarli se incompleti.</li>
              <li><strong className="text-[#1a1a1a]">Cancellare</strong> i tuoi dati (il cosiddetto "diritto all&apos;oblio"), se non sussistono obblighi di legge che ci impongano di mantenerli.</li>
              <li><strong className="text-[#1a1a1a]">Limitare</strong> il trattamento in determinate circostanze.</li>
              <li><strong className="text-[#1a1a1a]">Opporti</strong> al trattamento, in tutto o in parte, per motivi legittimi.</li>
              <li><strong className="text-[#1a1a1a]">Portabilità dei dati:</strong> ricevere i tuoi dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico.</li>
            </ul>
            <p className="mt-4">Per esercitare i tuoi diritti, puoi contattare in qualsiasi momento il Titolare inviando una comunicazione scritta all&apos;indirizzo email: <a href="mailto:info@iltuoimmobiliare.it" className="text-[#94b0ab] underline underline-offset-2 hover:text-[#83a19b] transition-colors">info@iltuoimmobiliare.it</a></p>
            <p className="mt-3">Hai inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#94b0ab] underline underline-offset-2 hover:text-[#83a19b] transition-colors">www.garanteprivacy.it</a>) qualora ritenessi che il trattamento violi il GDPR.</p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">Ultimo aggiornamento: Aprile 2026</p>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;