"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogTrigger
} from "@/components/ui/dialog";
import { User, Mail, Phone, Loader2, CheckCircle2, CalendarDays, ChevronRight, Users } from 'lucide-react';
import CustomInput from './CustomInput';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

interface OpenHouse {
  id: string;
  data_evento: string;
  ora_inizio: string;
  ora_fine: string;
  posti_totali?: number;
}

interface OpenHouseBookingProps {
  openHouses: OpenHouse[];
  propertyTitle: string;
  trigger: React.ReactNode;
}

type Step = 'select-date' | 'form' | 'success';

const stepVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

const OpenHouseBooking = ({ openHouses, propertyTitle, trigger }: OpenHouseBookingProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(openHouses.length === 1 ? 'form' : 'select-date');
  const [selectedOpenHouse, setSelectedOpenHouse] = useState<OpenHouse | null>(
    openHouses.length === 1 ? openHouses[0] : null
  );
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', telefono: '' });

  const resetDialog = () => {
    setStep(openHouses.length === 1 ? 'form' : 'select-date');
    setSelectedOpenHouse(openHouses.length === 1 ? openHouses[0] : null);
    setSubmitting(false);
    setFormData({ nome: '', email: '', telefono: '' });
  };

  const handleSelect = (oh: OpenHouse) => {
    setSelectedOpenHouse(oh);
    setStep('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOpenHouse) return;
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('prenotazioni_oh')
        .insert([{
          open_house_id: selectedOpenHouse.id,
          nome: formData.nome,
          email: formData.email,
          telefono: formData.telefono,
        }]);

      if (error) throw error;
      setStep('success');
    } catch (err) {
      console.error('Booking error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) resetDialog();
    }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] border-none shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>

          {step === 'select-date' && (
            <motion.div
              key="select-date"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="pb-2">
                <DialogTitle className="text-2xl font-bold tracking-tight">Scegli una data</DialogTitle>
                <DialogDescription className="text-gray-500 font-medium">
                  Seleziona la data dell'Open House a cui vuoi partecipare.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 pt-4">
                {openHouses.map((oh) => (
                  <button
                    key={oh.id}
                    onClick={() => handleSelect(oh)}
                    className="w-full flex items-center justify-between p-4 bg-[#f8f9fa] hover:bg-[#94b0ab]/10 border border-gray-100 hover:border-[#94b0ab]/30 rounded-2xl transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-[#94b0ab] shrink-0 group-hover:bg-[#94b0ab] group-hover:text-white transition-colors">
                        <CalendarDays size={18} />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-[#1a1a1a] capitalize">
                          {format(new Date(oh.data_evento), 'EEEE d MMMM yyyy', { locale: it })}
                        </p>
                        <p className="text-sm text-gray-500 font-medium">
                          {oh.ora_inizio.slice(0, 5)} – {oh.ora_fine.slice(0, 5)}
                          {oh.posti_totali ? (
                            <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              <Users size={10} /> Max {oh.posti_totali}
                            </span>
                          ) : null}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-[#94b0ab] transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'form' && selectedOpenHouse && (
            <motion.div
              key="form"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight">Prenota il tuo posto</DialogTitle>
                <DialogDescription className="text-gray-500 font-medium">
                  {format(new Date(selectedOpenHouse.data_evento), 'EEEE d MMMM', { locale: it })} • {selectedOpenHouse.ora_inizio.slice(0, 5)}–{selectedOpenHouse.ora_fine.slice(0, 5)}
                  {openHouses.length > 1 && (
                    <button
                      onClick={() => setStep('select-date')}
                      className="ml-2 text-[#94b0ab] font-bold hover:underline text-xs"
                    >
                      (cambia data)
                    </button>
                  )}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <CustomInput
                  label="Il tuo nome"
                  placeholder="Mario Rossi"
                  icon={User}
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
                <CustomInput
                  label="Email"
                  type="email"
                  placeholder="mario@email.it"
                  icon={Mail}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <CustomInput
                  label="Telefono"
                  placeholder="+39 333 1234567"
                  icon={Phone}
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-16 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#83a19b] transition-all disabled:opacity-70"
                  >
                    {submitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>Conferma Prenotazione <CalendarDays size={18} /></>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="py-12 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-[#94b0ab]/10 rounded-full flex items-center justify-center text-[#94b0ab] mx-auto animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Posto Prenotato!</h3>
                <p className="text-gray-500 px-6">
                  Ti abbiamo riservato un posto per l'Open House di {propertyTitle}. Ti invieremo un promemoria via email.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-full h-14 bg-[#1a1a1a] text-white rounded-2xl font-bold"
              >
                Chiudi
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default OpenHouseBooking;
