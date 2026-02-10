"use client";

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Zones from '@/components/Zones';
import Properties from '@/components/Properties';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Zones />
        <Properties />
        <ContactForm />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;