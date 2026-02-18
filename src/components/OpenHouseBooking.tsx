"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogTrigger 
} from "@/components/ui/dialog";
import { User, Mail, Phone, Loader2, CheckCircle2, CalendarDays } from 'lucide-react';
import CustomInput from './CustomInput';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

interface OpenHouseBookingProps {
  openHouse: any;
  propertyTitle: string;
  trigger: React.ReactNode;
}

const OpenHouseBooking = ({ openHouse, propertyTitle, trigger }: OpenHouseBookingProps) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('prenotazioni_oh')
        .insert([{
          open_house_id: openHouse.id,
          nome: formData.nome,
          email: formData.email,
          telefono: formData.telefono
        }]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.error("Booking error:", err);
      setStatus('idle');
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) setStatus('idle');
    }}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] border-none shadow-2xl">
        {status === 'success' ? (
          <div className="py-12 text-center space-y-6">
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
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold tracking-tight">Prenota il tuo posto</DialogTitle>
              <DialogDescription className="text-gray-500 font-medium">
                Unisciti a noi il {format(new Date(openHouse.data_evento), 'EEEE d MMMM', { locale: it })} dalle {openHouse.ora_inizio.slice(0,5)}.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <CustomInput 
                label="Il tuo nome" 
                placeholder="Mario Rossi" 
                icon={User}
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
              <CustomInput 
                label="Email" 
                type="email"
                placeholder="mario@email.it" 
                icon={Mail}
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <CustomInput 
                label="Telefono" 
                placeholder="+39 333 1234567" 
                icon={Phone}
                required
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
              />

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full h-16 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#83a19b] transition-all"
                >
                  {status === 'submitting' ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>Conferma Prenotazione <CalendarDays size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OpenHouseBooking;