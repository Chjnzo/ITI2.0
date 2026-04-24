import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type ConsentValue = 'accepted' | 'rejected';
const STORAGE_KEY = 'cookieConsent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't fight with page load animations
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (choice: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-20 md:bottom-6 left-0 right-0 z-50 px-4"
        >
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/8 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <span className="text-xl shrink-0" aria-hidden="true">🍪</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito. Per maggiori informazioni consulta la nostra{' '}
                <Link
                  to="/privacy"
                  className="text-[#94b0ab] underline underline-offset-2 font-medium hover:text-[#83a19b] transition-colors"
                >
                  Informativa sulla Privacy
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => handleChoice('rejected')}
                className="px-5 py-2.5 text-xs font-bold text-gray-500 hover:text-[#1a1a1a] border border-gray-200 hover:border-gray-300 rounded-xl transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={() => handleChoice('accepted')}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#94b0ab] hover:bg-[#83a19b] rounded-xl transition-colors shadow-md shadow-[#94b0ab]/20"
              >
                Accetta
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
