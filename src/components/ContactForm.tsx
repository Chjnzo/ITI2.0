"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User, Mail, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';
import CustomInput from './CustomInput';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  propertyTitle?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = ({ propertyTitle }: ContactFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          nome: formData.nome,
          email: formData.email,
          telefono: formData.telefono,
          messaggio: formData.messaggio,
          immobile_interesse: propertyTitle || 'Generico dal Sito',
          stato: 'nuovo'
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({ nome: '', email: '', telefono: '', messaggio: '' });
    } catch (err) {
      console.error("Error submitting lead:", err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[32px] text-center border border-[#94b0ab]/20 shadow-xl shadow-[#94b0ab]/5"
      >
        <div className="w-20 h-20 bg-[#94b0ab]/10 rounded-full flex items-center justify-center text-[#94b0ab] mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Messaggio Inviato!</h3>
        <p className="text-gray-500 leading-relaxed mb-8">
          Grazie per averci contattato. Il nostro team prenderà in carico la tua richiesta e ti risponderà entro 24 ore.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-[#94b0ab] font-bold uppercase tracking-widest text-xs hover:underline"
        >
          Invia un altro messaggio
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput 
          label="Nome" 
          name="nome"
          placeholder="Mario Rossi" 
          icon={User}
          required
          value={formData.nome}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
        <CustomInput 
          label="Email" 
          name="email"
          type="email" 
          placeholder="mario@esempio.it" 
          icon={Mail}
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
      </div>
      
      <CustomInput 
        label="Telefono" 
        name="telefono"
        type="tel"
        placeholder="+39 333 1234567" 
        icon={Phone}
        required
        value={formData.telefono}
        onChange={handleChange}
        disabled={status === 'submitting'}
      />

      <div className="space-y-2">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Messaggio</label>
        <textarea 
          name="messaggio"
          rows={4} 
          placeholder="Come possiamo aiutarti?" 
          required
          value={formData.messaggio}
          onChange={handleChange}
          disabled={status === 'submitting'}
          className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#1a1a1a] focus:border-[#94b0ab] outline-none transition-all shadow-sm resize-none disabled:opacity-50"
        ></textarea>
      </div>

      <div className="space-y-4">
        <button 
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-5 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#83a19b] transition-all shadow-lg shadow-[#94b0ab]/20 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Invio in corso...
            </>
          ) : (
            <>
              Invia Messaggio <Send size={18} />
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-center text-red-500 text-[10px] font-bold uppercase tracking-widest">
            Errore nell'invio. Riprova o chiamaci direttamente.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;