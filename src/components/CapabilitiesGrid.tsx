'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Search, 
  Code2, 
  Activity, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { CAPABILITIES } from '../data/content';

export const CapabilitiesGrid: React.FC = () => {
  const icons = [Target, Search, Code2, Activity, ShieldCheck];

  return (
    <section id="capabilities" className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header - WordPress Style Title Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3 sm:space-y-4"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
            SECTION 07 // FULL CAPABILITIES GRID
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
            Comprehensive Digital Fulfillment Grid
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Modular or end-to-end execution. Delivered silently behind your agency brand or deployed directly for enterprise scale.
          </p>
        </motion.div>

        {/* 5-Card Grid with Smooth Ground-to-Above Cascading Wave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[idx];
            const isWhiteLabel = idx === 4;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 52 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl border flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 ${
                  isWhiteLabel
                    ? 'bg-slate-900 text-white md:col-span-2 lg:col-span-1 shadow-soft-xl'
                    : 'bg-[#FBFBFC] border-slate-200/90 shadow-soft-sm hover:shadow-soft-lg hover:bg-white hover:border-blue-500/40'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isWhiteLabel ? 'text-blue-400' : 'text-slate-400'
                    }`}>
                      MOD_0{idx + 1}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-soft-sm ${
                      isWhiteLabel ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold font-display ${
                    isWhiteLabel ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cap.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    isWhiteLabel ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {cap.description}
                  </p>
                </div>

                <div className={`pt-6 border-t space-y-2.5 ${
                  isWhiteLabel ? 'border-white/10' : 'border-slate-200/60'
                }`}>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-2 ${
                    isWhiteLabel ? 'text-slate-400' : 'text-slate-400'
                  }`}>
                    Key Deliverables:
                  </span>
                  {cap.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${
                        isWhiteLabel ? 'text-emerald-400' : 'text-emerald-600'
                      }`} />
                      <span className={isWhiteLabel ? 'text-slate-200' : 'text-slate-700'}>{d}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
