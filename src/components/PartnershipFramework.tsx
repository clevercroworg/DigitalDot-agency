'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, EyeOff, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { PARTNERSHIP_STEPS } from '../data/content';
import { WP_EASE, defaultViewport } from '../lib/animations';

export const PartnershipFramework: React.FC = () => {
  const icons = [Shield, EyeOff, Award];

  return (
    <section id="framework" className="py-16 sm:py-24 lg:py-28 bg-[#FBFBFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header verbatim from brief - WordPress Style Title Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.75, ease: WP_EASE }}
          className="max-w-3xl space-y-3 sm:space-y-4"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
            SECTION 04 // OPERATIONAL PARTNERSHIP
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
            How Our White-Label Operational Partnership Works in 3 Steps
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            We operate entirely behind the scenes so you can offer full-service digital marketing solutions, win enterprise accounts, and increase agency net margins without increasing headcount.
          </p>
        </motion.div>

        {/* 3 Steps Cards with Smooth Ground-to-Above Cascading Wave */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PARTNERSHIP_STEPS.map((step, idx) => {
            const IconComponent = icons[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 52 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, delay: idx * 0.14, ease: WP_EASE }}
                className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <span className="text-3xl font-extrabold font-mono text-slate-300">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      OPERATIONAL PURPOSE:
                    </span>
                    <span className="text-xs text-slate-700 font-semibold">
                      {step.purpose}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Guarantee Banner with Ground-to-Above Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, ease: WP_EASE }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Strict Mutual Non-Circumvention Protection</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300">
              Legally binding NDA executed prior to onboarding. We never contact your clients directly.
            </div>
          </div>

          <a
            href="#contact-consultation"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all font-mono tracking-wide shrink-0 shadow-sm hover:scale-[1.02]"
          >
            <span>REVIEW SAMPLE NDA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
