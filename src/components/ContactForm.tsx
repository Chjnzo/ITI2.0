"use client";

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { logger } from '@/utils/logger';
import { User, Mail, Phone, Send, Loader2, CheckCircle2, Home, TrendingUp } from 'lucide-react';
import CustomInput from './CustomInput';
import { motion } from 'framer-motion';

interface ContactFormProps {
  propertyTitle?: string;
  propertyId?: string;
  unitInfo?: { tipologia: string; piano: string; superficie_mq: number; prezzo: number | null } | null;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited';
type TipoInteresse = 'acquistare' | 'vendere';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const COOLDOWN_MS = 30_000;

const ContactForm = ({ propertyTitle, propertyId, unitInfo }: ContactFormProps) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitCooldown, setSubmitCooldown] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [tipoInteresse, setTipoInteresse] = useState<TipoInteresse>('acquistare');

  const unitPrefix = unitInfo
    ? `Sono interessato all'unità: ${unitInfo.tipologia}, ${unitInfo.piano}, ${unitInfo.superficie_mq} mq.\n\n`
    : '';

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: unitPrefix
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email') setEmailError(false);
  };

  const startCooldown = () => {
    setSubmitCooldown(true);
    setTimeout(() => setSubmitCooldown(false), COOLDOWN_MS);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);

    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    setStatus('submitting');

    try {
      const { error: rpcError } = await supabase.rpc('upsert_lead', {
        p_nome: formData.nome,
        p_cognome: formData.cognome,
        p_email: formData.email,
        p_telefono: formData.telefono,
        p_messaggio: formData.messaggio,
        p_immobile_id: propertyId || null,
        p_immobile_interesse: propertyTitle || 'Generico dal Sito',
        p_tipo_interesse: tipoInteresse
      });

      if (rpcError) {
        if (rpcError.code === 'P0001' && rpcError.message?.includes('Too many requests')) {
          setStatus('rate_limited');
          startCooldown();
          return;
        }
        throw rpcError;
      }

      setStatus('success');
      setFormData({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' });
      setPrivacyAccepted(false);
      setTipoInteresse('acquistare');
    } catch (err) {
      logger.error('Lead submission failed', { error: String(err) });
      setStatus('error');
    } finally {
      startCooldown();
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

  const tipoOptions: { value: TipoInteresse; label: string; sublabel: string; icon: React.ElementType }[] = [
    { value: 'acquistare', label: 'Voglio Acquistare', sublabel: 'Cerco un immobile', icon: Home },
    { value: 'vendere', label: 'Voglio Vendere', sublabel: 'Ho un immobile da vendere', icon: TrendingUp },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tipo interesse switch — solo nel form generico, non sugli immobili */}
      {!propertyId && (
        <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100 rounded-2xl">
          {tipoOptions.map(({ value, label, sublabel, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => setTipoInteresse(value)}
              disabled={status === 'submitting'}
              className={`relative flex flex-col items-center gap-1 py-4 px-3 rounded-xl text-center transition-all duration-200 disabled:opacity-50 ${
                tipoInteresse === value
                  ? 'bg-white shadow-md shadow-[#94b0ab]/15 text-[#94b0ab]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon
                size={22}
                className={`transition-colors duration-200 ${tipoInteresse === value ? 'text-[#94b0ab]' : 'text-gray-400'}`}
              />
              <span className={`text-xs font-bold tracking-wide transition-colors duration-200 ${tipoInteresse === value ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                {label}
              </span>
              <span className={`text-[10px] transition-colors duration-200 ${tipoInteresse === value ? 'text-gray-400' : 'text-gray-300'}`}>
                {sublabel}
              </span>
              {tipoInteresse === value && (
                <motion.div
                  layoutId="tipo-indicator"
                  className="absolute inset-0 rounded-xl ring-1 ring-[#94b0ab]/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          label="Nome"
          name="nome"
          placeholder="Mario"
          icon={User}
          required
          value={formData.nome}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
        <CustomInput
          label="Cognome"
          name="cognome"
          placeholder="Rossi"
          icon={User}
          required
          value={formData.cognome}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="mario@esempio.it"
            icon={Mail}
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          {emailError && (
            <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest px-1">
              Inserisci un&apos;email valida.
            </p>
          )}
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
      </div>

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
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => { setPrivacyAccepted(e.target.checked); if (e.target.checked) setPrivacyError(false); }}
            disabled={status === 'submitting'}
            className="mt-0.5 w-4 h-4 shrink-0 accent-[#94b0ab] cursor-pointer disabled:opacity-50"
          />
          <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
            Ho letto e accetto l&apos;{' '}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94b0ab] underline underline-offset-2 hover:text-[#83a19b] transition-colors font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Informativa sulla Privacy
            </a>
          </span>
        </label>

        {privacyError && (
          <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">
            Devi accettare l&apos;informativa sulla privacy per procedere.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting' || submitCooldown || !privacyAccepted}
          className="w-full py-5 bg-[#94b0ab] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#83a19b] transition-all shadow-lg shadow-[#94b0ab]/20 disabled:opacity-70"
        >
          {status === 'submitting' || submitCooldown ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              {status === 'submitting' ? 'Invio in corso...' : 'Attendere...'}
            </>
          ) : (
            <>
              Invia Messaggio <Send size={18} />
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-center text-red-500 text-[10px] font-bold uppercase tracking-widest">
            Errore nell&apos;invio. Riprova o chiamaci direttamente.
          </p>
        )}

        {status === 'rate_limited' && (
          <p className="text-center text-amber-500 text-[10px] font-bold uppercase tracking-widest">
            Hai inviato di recente. Riprova tra 15 minuti.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
