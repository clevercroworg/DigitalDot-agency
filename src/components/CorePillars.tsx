'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bot, 
  Zap, 
  Database, 
  CheckCircle2
} from 'lucide-react';
import { CORE_PILLARS } from '../data/content';

// Authentic pixel-perfect SVGs for technology & stack tags
const renderStackIcon = (tag: string) => {
  switch (tag) {
    case 'Google Search':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Google">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      );
    case 'Performance Max':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Google Ads">
          <path fill="#FBBC04" d="M3.7 15.3l5.5-9.6c.9-1.5 2.8-2 4.3-1.1 1.5.9 2 2.8 1.1 4.3L9.1 18.5c-.9 1.5-2.8 2-4.3 1.1-1.5-.9-2-2.8-1.1-4.3z" />
          <path fill="#4285F4" d="M13.8 4.6l5.5 9.6c.9 1.5.4 3.4-1.1 4.3-1.5.9-3.4.4-4.3-1.1L8.4 7.8c-.9-1.5-.4-3.4 1.1-4.3 1.5-.9 3.4-.4 4.3 1.1z" />
          <circle fill="#34A853" cx="6.5" cy="17.5" r="2.8" />
        </svg>
      );
    case 'Meta Ads':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#0081FB" aria-label="Meta">
          <path d="M16.99 4.33C14.77 4.33 12.8 5.76 12 7.47c-.8-1.71-2.77-3.14-4.99-3.14-3.9 0-7.01 3.25-7.01 7.42 0 4.17 3.11 7.42 7.01 7.42 2.22 0 4.19-1.43 4.99-3.14.8 1.71 2.77 3.14 4.99 3.14 3.9 0 7.01-3.25 7.01-7.42s-3.11-7.42-7.01-7.42zm-9.98 12.08c-2.43 0-4.41-2.09-4.41-4.66s1.98-4.66 4.41-4.66c1.9 0 3.51 1.25 4.13 3.03-.4 1.16-.92 2.37-1.63 3.45-.66 1.02-1.5 2.84-2.5 2.84zm9.98 0c-1 0-1.84-1.82-2.5-2.84-.71-1.08-1.23-2.29-1.63-3.45.62-1.78 2.23-3.03 4.13-3.03 2.43 0 4.41 2.09 4.41 4.66s-1.98 4.66-4.41 4.66z" />
        </svg>
      );
    case 'LinkedIn Ads':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#0A66C2" aria-label="LinkedIn">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case 'ChatGPT Discovery':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#10A37F" aria-label="ChatGPT">
          <path d="M22.28 9.9c-.15-.84-.52-1.63-1.08-2.27a5.53 5.53 0 0 0-3.9-1.95 5.53 5.53 0 0 0-4.08-1.77c-.98 0-1.94.27-2.78.78-.5.3-.94.7-1.3 1.16A5.5 5.5 0 0 0 5.2 6.9a5.53 5.53 0 0 0-1.95 3.9 5.5 5.5 0 0 0-1.53 3.94c0 1.08.31 2.12.9 3.02a5.53 5.53 0 0 0 2.27 2.14 5.55 5.55 0 0 0 4.09 1.77c.98 0 1.94-.27 2.78-.78.5-.3.94-.7 1.3-1.16a5.5 5.5 0 0 0 3.94-1.05 5.53 5.53 0 0 0 1.95-3.9 5.5 5.5 0 0 0 1.53-3.94c0-1.07-.31-2.11-.9-3.02zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case 'Google Gemini':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Google Gemini">
          <path fill="url(#gemini-sparkle)" d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" />
          <defs>
            <linearGradient id="gemini-sparkle" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1B72E8" />
              <stop offset="0.5" stopColor="#8AB4F8" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'Perplexity Citations':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" aria-label="Perplexity">
          <path d="M12 3v18M3 12h18M5.5 5.5l13 13M5.5 18.5l13-13" />
        </svg>
      );
    case 'Schema.org JSON-LD':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#0284C7" aria-label="Schema.org">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      );
    case 'Next.js / React':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Next.js">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path fill="#ffffff" d="M14.9 16.5l-5.6-7.8h-1.6v8.4h1.7v-5.4l5.1 7.2c.15-.7.3-1.4.4-2.4zm1.7-8.4h-1.7v5.5l1.7 2.4V8.1z" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="#06B6D4" aria-label="Tailwind CSS">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'Headless CMS':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Headless CMS">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'High-Converting Funnels':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Conversion Funnel">
          <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
        </svg>
      );
    case 'Server-Side GTM':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Google Tag Manager">
          <path fill="#246FDB" d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5L6.5 12 12 6.5z" />
          <circle fill="#ffffff" cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'Meta CAPI':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="#0081FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Meta CAPI">
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <polyline points="8 16 12 12 16 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
        </svg>
      );
    case 'CallRail Integration':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="CallRail">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'GA4 Advanced Modeling':
      return (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-label="Google Analytics 4">
          <rect x="3" y="14" width="4" height="7" rx="1" fill="#F59E0B" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="#F59E0B" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#EA580C" />
        </svg>
      );
    default:
      return <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />;
  }
};

export const CorePillars: React.FC = () => {
  const icons = [BarChart3, Bot, Zap, Database];

  return (
    <section id="pillars" className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header - WordPress Style Title Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-200"
        >
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
              SECTION 05 // CORE PERFORMANCE PILLARS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
              Four Core Execution Pillars
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal">
              Engineered to navigate restricted ad policies, secure generative AI citations, and synchronize verified offline revenue.
            </p>
          </div>

          <div className="text-[11px] sm:text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-slate-200 self-start md:self-auto">
            COMPLIANCE: LEGITSCRIPT &bull; HIPAA &bull; ISO-READY
          </div>
        </motion.div>

        {/* 4 Pillars Cards with Smooth Ground-to-Above Cascading Wave */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx];

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 52 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#FBFBFC] border border-slate-200 hover:border-blue-500/40 hover:bg-white shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                      {pillar.pillar}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 flex items-center justify-center shadow-soft-sm transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-200/60">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {pillar.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold bg-white p-2.5 rounded-xl border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Authentic Stack & Tooling Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-sm hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {renderStackIcon(tag)}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
