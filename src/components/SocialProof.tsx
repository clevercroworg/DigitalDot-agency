'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Lock } from 'lucide-react';
import { DIRECT_CLIENTS } from '../data/content';
import { WP_EASE, titleReveal, defaultViewport } from '../lib/animations';

export const SocialProof: React.FC = () => {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Sub-text from brief with WordPress-style title slide */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={titleReveal}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
            VERIFIED INSTITUTIONAL RELATIONSHIPS
          </span>
          <p className="text-base sm:text-lg font-bold text-slate-900">
            Trusted by Healthcare Networks, Luxury Brands &amp; Confidential Agency Partners Worldwide
          </p>
        </motion.div>

        {/* Clients Grid with Smooth Cascading Ground-to-Above Slide-in */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIRECT_CLIENTS.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.65, delay: index * 0.08, ease: WP_EASE }}
              className="p-5 rounded-2xl bg-[#FBFBFC] border border-slate-200/90 hover:border-blue-500/40 hover:bg-white hover:shadow-soft-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                  {client.vertical}
                </span>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {client.name}
                </h4>
              </div>

              <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-200/60 text-xs font-mono text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{client.location}</span>
              </div>
            </motion.div>
          ))}

          {/* Confidential Agency Partners Card */}
          <motion.div 
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.65, delay: 0.32, ease: WP_EASE }}
            className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between shadow-soft-md hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Brand Anonymity</span>
              </div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Confidential Agency Partners
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Boutique US &amp; Global Digital Agencies
              </p>
            </div>

            <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/10 text-xs font-mono text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Non-Circumvention NDA</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
