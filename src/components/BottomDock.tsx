"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Heart, User, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomDock = () => {
  const [active, setActive] = React.useState('home');

  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Cerca' },
    { id: 'saved', icon: Heart, label: 'Salvati' },
    { id: 'profile', icon: User, label: 'Profilo' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-md md:bottom-8">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] px-2 py-2 flex items-center justify-between"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center py-3 px-6 rounded-2xl transition-all duration-300",
                isActive ? "text-blue-600" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="dock-active"
                  className="absolute inset-0 bg-blue-50 rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium mt-1 uppercase tracking-widest">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default BottomDock;