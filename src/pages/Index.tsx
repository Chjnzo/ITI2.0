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
import MethodSection from '@/components/MethodSection';
import TestimonialsBento from '@/components/TestimonialsBento';
import AboutSection from '@/components/AboutSection';
import SocialSection from '@/components/SocialSection';
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
        <title>Il Tuo Immobiliare | Agenzia Immobiliare a Bergamo a Zero Provvigioni</title>
        <meta name="description" content="Vendi casa a Bergamo senza pagare provvigioni. Valutazione gratuita, marketing professionale e gestione completa. Scopri il metodo Il Tuo Immobiliare." />
        <link rel="canonical" href="https://www.iltuoimmobiliare.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iltuoimmobiliare.it/" />
        <meta property="og:title" content="Il Tuo Immobiliare | Agenzia Immobiliare a Bergamo a Zero Provvigioni" />
        <meta property="og:description" content="Vendi casa a Bergamo senza pagare provvigioni. Valutazione gratuita, marketing professionale e gestione completa." />
        <meta property="og:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Il Tuo Immobiliare | Agenzia Immobiliare a Bergamo a Zero Provvigioni" />
        <meta name="twitter:description" content="Vendi casa a Bergamo senza pagare provvigioni. Valutazione gratuita, marketing professionale e gestione completa." />
        <meta name="twitter:image" content="https://www.iltuoimmobiliare.it/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Il Tuo Immobiliare",
          "url": "https://www.iltuoimmobiliare.it",
          "logo": "https://www.iltuoimmobiliare.it/Logo.svg",
          "description": "Agenzia immobiliare a Bergamo a zero provvigioni per chi vende. Valutazione gratuita, marketing professionale e gestione completa della vendita.",
          "telephone": "+39-375-822-7321",
          "email": "info@iltuoimmobiliare.it",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Giovanni Adelasio, 18",
            "addressLocality": "Ranica",
            "addressRegion": "BG",
            "postalCode": "24020",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.6789,
            "longitude": 9.7123
          },
          "areaServed": {
            "@type": "City",
            "name": "Bergamo"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "50"
          },
          "priceRange": "€€",
          "sameAs": [
            "https://www.instagram.com/iltuo.immobiliare/",
            "https://www.facebook.com/p/Il-Tuo-Immobiliare-61574878302324/",
            "https://www.tiktok.com/@il.tuo.immobiliare"
          ]
        })}</script>
      </Helmet>

      <Header />
      
      <main className="pb-32 md:pb-12">
        <BentoHero />
        <StatsBento />
        <MethodSection />
        <ValueProposition />
        <TestimonialsBento />
        <PropertyBento />
        <AboutSection />
        <SocialSection />
        <TeamContact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;