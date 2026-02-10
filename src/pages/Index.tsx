"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesBento from '@/components/ServicesBento';
import PropertyGallery from '@/components/PropertyGallery';
import TeamContact from '@/components/TeamContact';
import BottomDock from '@/components/BottomDock';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF9] selection:bg-[#f97316] selection:text-white">
      <Header />
      
      <main className="pb-32">
        <HeroSection />
        <ServicesBento />
        <PropertyGallery />
        <TeamContact />
      </main>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">Il Tuo Immobiliare</p>
          <p className="text-gray-300 text-xs">© 2025 - Rivoluzione Immobiliare a Bergamo.</p>
          <div className="mt-8">
            <MadeWithDyad />
          </div>
        </div>
      </footer>

      <BottomDock />
    </div>
  );
};

export default Index;