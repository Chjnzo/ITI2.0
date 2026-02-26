"use client";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import BentoHero from '@/components/BentoHero';
import StatsBento from '@/components/StatsBento';
import PropertyBento from '@/components/PropertyBento';
import ValueProposition from '@/components/ValueProposition';
import AboutSection from '@/components/AboutSection';
import TeamContact from '@/components/TeamContact';
import { MadeWithDyad } from "@/components/made-with-dyad";

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
      <Header />
      
      <main className="pb-32 md:pb-12">
        <BentoHero />
        <StatsBento />
        <ValueProposition />
        <AboutSection />
        <PropertyBento />
        <TeamContact />
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center pb-40 md:pb-20">
        <div className="container mx-auto px-4">
          <p className="text-[#1a1a1a]/20 text-xs font-bold uppercase tracking-[0.5em] mb-4">Il Tuo Immobiliare</p>
          <div className="mt-8">
            <MadeWithDyad />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;