"use client";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BentoHero from '@/components/BentoHero';
import StatsBento from '@/components/StatsBento';
import PropertyBento from '@/components/PropertyBento';
import ValueProposition from '@/components/ValueProposition';
import AboutSection from '@/components/AboutSection';
import TeamContact from '@/components/TeamContact';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scroll');
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-[#94b0ab] selection:text-white font-sans text-[#1a1a1a]">
      <Helmet>
        <title>Il Tuo Immobiliare | Agenzia Immobiliare a Bergamo</title>
        <meta name="description" content="Vendi o compra casa a Bergamo a zero provvigioni per chi vende. Scopri il nostro metodo verificato e i nostri immobili in esclusiva." />
      </Helmet>

      <Header />
      
      <main className="pb-32 md:pb-12">
        <BentoHero />
        <StatsBento />
        <ValueProposition />
        <AboutSection />
        <PropertyBento />
        <TeamContact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;