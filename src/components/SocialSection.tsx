"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socials = [
  {
    platform: "Instagram",
    handle: "@iltuo.immobiliare",
    cta: "Seguici",
    href: "https://www.instagram.com/iltuo.immobiliare/",
    Icon: InstagramIcon,
    tagline: "Proprietà, dietro le quinte e il mercato di Bergamo ogni giorno.",
  },
  {
    platform: "TikTok",
    handle: "@il.tuo.immobiliare",
    cta: "Guardaci",
    href: "https://www.tiktok.com/@il.tuo.immobiliare",
    Icon: TikTokIcon,
    tagline: "Video, tour e consigli immobiliari in formato breve.",
  },
  {
    platform: "Facebook",
    handle: "Il Tuo Immobiliare",
    cta: "Seguici",
    href: "https://www.facebook.com/p/Il-Tuo-Immobiliare-61574878302324/",
    Icon: FacebookIcon,
    tagline: "Aggiornamenti, notizie e immobili direttamente nel tuo feed.",
  },
];

const SocialSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f8f9fa]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#94b0ab] uppercase mb-4 block">Social</span>
            <h2 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] tracking-tighter">
              Seguici<br className="hidden md:block" /> ovunque.
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-500 font-medium max-w-sm md:text-right leading-relaxed">
            Dietro le quinte del mercato immobiliare di Bergamo, ogni giorno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl md:rounded-[40px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-[#94b0ab]/10 rounded-2xl flex items-center justify-center text-[#94b0ab] group-hover:bg-[#94b0ab]/20 transition-colors">
                  <s.Icon size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-gray-200 group-hover:text-[#94b0ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">{s.platform}</p>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight mb-3">{s.handle}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.tagline}</p>
              </div>

              <div className="flex items-center gap-2 text-[#94b0ab] font-bold text-xs uppercase tracking-widest">
                {s.cta}
                <div className="w-8 h-[1px] bg-[#94b0ab] group-hover:w-14 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
