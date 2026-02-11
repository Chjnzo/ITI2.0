"use client";

import React from 'react';
import Header from '@/components/Header';
import BottomDock from '@/components/BottomDock';
import { motion } from 'framer-motion';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Scale, 
  Gem, 
  Calculator, 
  FileSearch, 
  Handshake,
  MapPin
} from 'lucide-react';

const values = [
  { 
    icon: Scale, 
    title: "Etica del Guadagno", 
    desc: "Siamo convinti che chi possiede un bene non debba pagare per alienarlo. Il nostro profitto non deve pesare sul tuo patrimonio." 
  },
  { 
    icon: Zap, 
    title: "Trasparenza Radicale", 
    desc: "Chiarezza totale sui processi e sui costi (assenti per il venditore). Nessuna sorpresa, solo fatti." 
  },
  { 
    icon: ShieldCheck, 
    title: "Tutela Integrale", 
    desc: "Ti copriamo in ogni aspetto: tecnico, legale e finanziario. Ti accompagniamo per mano fino al rogito." 
  },
  { 
    icon: Gem, 
    title: "Qualità Premium", 
    desc: "Costo zero non significa basso livello. Offriamo foto professionali, consulenza mutui e assistenza notarile di alta gamma." 
  }
];

const services = [
  { 
    icon: Calculator, 
    title: "Valutazione Professionale", 
    desc: "Analisi di mercato reali basate su dati concreti, non su stime approssimative." 
  },
  { 
    icon: FileSearch, 
    title: "Mediazione Tecnica", 
    desc: "Gestione APE, sanatorie e rapporti con professionisti (geometri/architetti) inclusa." 
  },
  { 
    icon: Handshake, 
    title: "Supporto Finanziario", 
    desc: "Accesso a broker per mutui e notaio di fiducia per una chiusura senza intoppi." 
  }
];

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      <Header />
      
      <main className="pt-44 pb-32">
        {/* Hero Section - Profilo Aziendale */}
        <section className="container mx-auto px-4 mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-6 block">
                Il Tuo Immobiliare • Matteo Roggeri
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">
                Il <span className="text-[#94b0ab]">Disruptor</span> del mercato di Bergamo.
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium mb-8">
                Siamo l'agenzia che ha deciso di rompere gli schemi tradizionali. A Ranica, abbiamo creato un modello dove il venditore è un partner da tutelare, non una fonte di provvigione.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#94b0ab] font-bold">
                <MapPin size={18} />
                <span>Via Giovanni Adelasio 18, Ranica (BG)</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[40px] border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab] mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">La nostra Missione</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Rivoluzionare il mercato immobiliare bergamasco eliminando l'onere economico per chi vende. Offriamo un servizio di altissima qualità che permette al proprietario la libertà di "vendere da solo" ma con la solidità e il supporto di un team di professionisti, il tutto a <span className="text-[#1a1a1a] font-bold">costo zero</span>.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-12 md:p-16 rounded-[40px] text-white shadow-xl"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#94b0ab] mb-8">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">La nostra Visione</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Ridefinire gli standard del settore, trasformandolo da un ambiente spesso percepito con diffidenza in un ecosistema di <span className="text-white font-bold">trasparenza totale</span>. Vogliamo che ogni cliente si senta realmente al centro, protetto da un partner che punta alla sua massima soddisfazione.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Valori Fondanti */}
        <section className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">I nostri Valori.</h2>
            <p className="text-gray-400 font-medium">Le fondamenta su cui costruiamo ogni vendita.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-gray-100 hover:border-[#94b0ab]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#f8f9fa] group-hover:bg-[#94b0ab]/10 rounded-xl flex items-center justify-center text-[#94b0ab] mb-6 transition-colors">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Offerta e Servizi - Tranquillità e Risparmio */}
        <section className="container mx-auto px-4">
          <div className="bg-[#94b0ab]/5 rounded-[48px] p-8 md:p-20 border border-[#94b0ab]/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Tranquillità e Risparmio.</h2>
                <p className="text-lg text-gray-500 mb-8">
                  Non vendiamo solo case, vendiamo una UX emozionale forte: <span className="text-[#1a1a1a] font-bold italic">"Zero Stress"</span> e <span className="text-[#1a1a1a] font-bold italic">"Senza Pensieri"</span>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#94b0ab] text-white rounded-full text-sm font-bold">
                  Vibe Strategica
                </div>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#94b0ab] shadow-sm">
                      <service.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-[#1a1a1a]/20 text-xs font-bold uppercase tracking-[0.5em] mb-4">Il Tuo Immobiliare</p>
          <MadeWithDyad />
        </div>
      </footer>
      
      <BottomDock />
    </div>
  );
};

export default ChiSiamo;