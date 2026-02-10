"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, MessageSquare, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomDock = () => {
  const [active, setActive] = React.useState('home');

  const items = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'immobili', icon: Building2, label: 'Immobili' },
    { id: 'contatti', icon: MessageSquare, label: 'Chat' },
    { id: 'profile', icon: User, label: 'Profilo' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm md:hidden">
      <nav className="bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-full p-2 flex items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex-grow flex flex-col items-center justify-center py-3 rounded-full transition-all duration-300",
                isActive ? "text-[#94b0ab]" : "text-white/40"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                />
              )}
              <Icon size={20} />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomDock;