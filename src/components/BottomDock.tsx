"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, MessageSquare, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomDock = () => {
  const [active, setActive] = React.useState('home');

  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'immobili', icon: Building2, label: 'Immobili' },
    { id: 'contatti', icon: MessageSquare, label: 'Contatti' },
    { id: 'menu', icon: Menu, label: 'Menu' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-md">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[32px] p-2 flex items-center justify-between"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex-grow flex flex-col items-center justify-center py-3 px-2 rounded-[24px] transition-all duration-300",
                isActive ? "text-[#f97316]" : "text-gray-400"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/5 rounded-[24px] -z-10"
                />
              )}
              <Icon size={22} />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-widest">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default BottomDock;