"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManifestoSection from '@/components/ManifestoSection';
import { motion, Variants } from 'framer-motion';
import { Cpu, Coffee, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ChiSiamo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a] selection:bg-[#94b0ab] selection:text-white">
      <Helmet>
        <title>Chi Siamo | Il Tuo Immobiliare Bergamo</title>
        <meta name="description" content="Scopri il team di Il Tuo Immobiliare: professionisti del settore immobiliare a Bergamo con un metodo trasparente e zero provvigioni per chi vende." />
        <link rel="canonical" href="https://www.iltuoimmobiliare.it/chi-siamo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iltuoimmobiliare.it/chi-siamo" />
        <meta property="og:title" content="Chi Siamo | Il Tuo Immobiliare Bergamo" />
        <meta property="og:description" content="Scopri il team di Il Tuo Immobiliare: professionisti del settore immobiliare a Bergamo con un metodo trasparente e zero provvigioni per chi vende." />
        <meta property="og:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chi Siamo | Il Tuo Immobiliare Bergamo" />
        <meta name="twitter:description" content="Scopri il team di Il Tuo Immobiliare: professionisti del settore immobiliare a Bergamo con un metodo trasparente e zero provvigioni per chi vende." />
        <meta name="twitter:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-20 md:pt-44 md:pb-32">
        <section className="relative container mx-auto px-4 mb-16 md:mb-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#94b0ab]/10 blur-[120px] rounded-full -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1]">
              Il nuovo standard immobiliare a <span className="text-[#94b0ab]">Bergamo.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Abbiamo eliminato le provvigioni per chi vende, elevando la qualità del servizio. I risultati dei nostri clienti dimostrano che un'alternativa equa e sicura esiste.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-20 md:mb-40">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2 bg-white p-8 md:p-16 rounded-3xl md:rounded-[48px] border border-gray-100 shadow-sm flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#94b0ab]/5 blur-3xl rounded-full group-hover:bg-[#94b0ab]/10 transition-colors duration-500" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter">
                  <span className="text-[#94b0ab]">Zero</span> Provvigioni.
                </h3>
                <p className="text-base md:text-xl text-gray-500 leading-relaxed max-w-md">
                  Un modello equo. Chi possiede l'immobile non deve pagare per venderlo. È una questione di etica professionale, supportata da garanzie contrattuali chiare.
                </p>
              </div>
              <div className="mt-8 md:mt-12 flex items-center gap-2 text-[#94b0ab] font-bold uppercase tracking-widest text-[10px]">
                Il nostro core business <ArrowUpRight size={16} />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-[#1a1a1a] p-8 rounded-3xl md:rounded-[48px] text-white flex flex-col justify-between"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#94b0ab] mb-6">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Data Driven</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  La matematica non ha opinioni. Realizziamo valutazioni oggettive basate sui dati reali del mercato di Bergamo, per farti ottenere il massimo valore possibile.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-3 bg-white p-8 md:p-10 rounded-3xl md:rounded-[48px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden"
            >
              <div className="flex-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 p-2.5">
                  <img src="/Logo.svg" alt="Il Tuo Immobiliare" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Radici solide</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
                  Conosciamo le dinamiche di ogni singolo quartiere, da Ranica a Città Alta, perché operiamo e viviamo esattamente dove investi tu.
                </p>
              </div>
              <div className="flex-1 w-full h-40 md:h-48 bg-[#f8f9fa] rounded-2xl md:rounded-[32px] relative overflow-hidden border border-gray-100">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#94b0ab 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#94b0ab] rounded-full animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <ManifestoSection />

        {/* SEZIONE TEAM — temporaneamente nascosta, reintegrare quando arrivano le foto
        <section className="container mx-auto px-4 mb-20 md:mb-40 mt-20 md:mt-40">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-4">I professionisti al tuo fianco.</h2>
            <p className="text-gray-400 text-sm md:text-base font-medium">Competenza, trasparenza e un unico obiettivo: tutelare i tuoi interessi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Matteo Roggeri",
                role: "Co-Founder",
                quote: "Il nostro successo si misura sui risultati che facciamo ottenere ai clienti, non sulle provvigioni."
              },
              {
                name: "Gabriele Sturniolo",
                role: "Co-Founder",
                quote: "Uniamo la tecnologia più avanzata all'esperienza umana per vendere il tuo immobile alle migliori condizioni di mercato."
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative p-1 bg-gradient-to-b from-white/40 to-white/10 rounded-3xl md:rounded-[40px] border border-white/20 backdrop-blur-xl shadow-xl shadow-black/5"
              >
                <div className="bg-white/40 rounded-[22px] md:rounded-[38px] p-8 md:p-10 h-full">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-2xl md:rounded-[32px] mb-6 md:mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1560250097-0b93528c311a' : '1472099645785-5658abf4ff4e'}?q=80&w=400&auto=format&fit=crop`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-1">{member.name}</h4>
                  <p className="text-[#94b0ab] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-6">{member.role}</p>
                  <p className="text-gray-500 italic text-base md:text-lg leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        */}

        <section className="container mx-auto px-4">
          <div className="bg-white rounded-3xl md:rounded-[48px] overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-[#f8f9fa] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#94b0ab 1px, transparent 1px), linear-gradient(90deg, #94b0ab 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-4 p-3">
                      <img src="/Logo.svg" alt="Il Tuo Immobiliare" className="w-full h-full object-contain" />
                    </div>
                    <p className="font-bold text-[#1a1a1a] text-sm md:text-base">Ranica, Bergamo</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-20 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 md:mb-6 block">Vieni a trovarci</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-8">La nostra porta è sempre aperta.</h2>
                <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 leading-relaxed">
                  Via Giovanni Adelasio 18,<br />
                  24020 Ranica (BG)
                </p>
                <Link
                  to="/#contatti"
                  className="w-full md:w-fit h-14 md:h-16 px-8 md:px-10 border-2 border-[#94b0ab] text-[#94b0ab] rounded-2xl md:rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#94b0ab] hover:text-white transition-all group"
                >
                  Vieni a prendere un caffè <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChiSiamo;