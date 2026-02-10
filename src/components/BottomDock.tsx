"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BottomDock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (id === 'contatti') {
      if (location.pathname !== '/') {
        navigate('/?scroll=contatti');
      } else {
        document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(id);
    }
  };

  const items = [
    { id: '/', icon: Home, label: 'Home' },
    { id: '/immobili', icon: Building2, label: 'Immobili' },
    { id: 'contatti', icon: MessageSquare, label: 'Contatti' },
  ];

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <nav className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full p-2 flex items-center justify-around h-16">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === 'contatti' ? false : location.pathname === item.id;
          
          return (
            <button
              key={item.label}
              onClick={() => handleNav(item.id)}
              className={cn(
                "relative flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300",
                isActive ? "text-[#94b0ab]" : "text-gray-400"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#94b0ab]/10 rounded-full -z-10 mx-2"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomDock;