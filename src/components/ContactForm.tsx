"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <section id="chi-siamo" className="py-24 bg-[#0a2540] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Contattaci oggi stesso</h2>
            <p className="text-gray-300 text-lg mb-12 max-w-lg leading-relaxed">
              Hai un immobile da vendere? Non aspettare oltre. Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a vendere a zero provvigioni.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">La nostra sede</h4>
                  <p className="text-gray-400">Via Giovanni Adelasio 18, Ranica (BG)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefono</h4>
                  <p className="text-gray-400">+39 035 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-xl">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-400">info@iltuoimmobiliare.it</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-[#0a2540] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Il tuo nome" className="h-12 border-gray-200" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cognome">Cognome</Label>
                  <Input id="cognome" placeholder="Il tuo cognome" className="h-12 border-gray-200" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Telefono</Label>
                <Input id="telefono" type="tel" placeholder="Il tuo numero" className="h-12 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@esempio.it" className="h-12 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="messaggio">Come possiamo aiutarti?</Label>
                <textarea
                  id="messaggio"
                  className="w-full min-h-[120px] rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Parlaci del tuo immobile..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-xl text-lg font-bold">
                Invia Richiesta
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;