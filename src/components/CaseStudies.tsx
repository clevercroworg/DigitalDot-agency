'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Quote
} from 'lucide-react';
import { CASE_STUDIES } from '../data/content';

const CASE_IMAGES = [
  '/images/healthcare-facility.jpg',
  '/images/agency-hq.jpg',
  '/images/yacht-luxury.jpg'
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-[#FBFBFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header - WordPress Style Title Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
            SECTION 06 // VERIFIED CASE STUDIES &amp; OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Proven Outcomes Across Regulated &amp; High-Ticket Verticals
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real documented revenue attribution across healthcare networks, scaling digital agencies, and luxury marine enterprises.
          </p>
        </motion.div>

        {/* Alternating Split Studio Showcase (All 3 Real Cases with Smooth Ground-to-Above Slide-in) */}
        <div className="space-y-16 lg:space-y-24">
          {CASE_STUDIES.map((study, idx) => {
            const image = CASE_IMAGES[idx];
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Visual Image Column */}
                <div className={`lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-soft-lg group h-[220px] sm:h-[340px] lg:h-[450px] ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <img
                    src={image}
                    alt={study.vertical}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 space-y-1 sm:space-y-2">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] sm:text-xs font-bold text-slate-900 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{study.category}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-emerald-700 shrink-0">{study.badge}</span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white font-display leading-tight">
                      {study.vertical}
                    </h3>
                  </div>
                </div>

                {/* Metrics & Content Column */}
                <div className={`lg:col-span-6 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft-sm space-y-5 sm:space-y-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  
                  {/* Headline */}
                  <h4 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 font-display leading-snug">
                    &ldquo;{study.headline}&rdquo;
                  </h4>

                  {/* 3 Metrics Cards - Clean, non-overlapping on mobile */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3.5 sm:py-4 border-y border-slate-100">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between overflow-hidden">
                        <div className="text-sm sm:text-xl lg:text-2xl font-extrabold text-slate-900 font-mono tracking-tight leading-tight truncate">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-sans mt-1 font-medium leading-tight line-clamp-2">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Verbatim Testimonial Quote */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Quote className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>EXECUTIVE TESTIMONIAL</span>
                    </div>
                    <blockquote className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed italic">
                      &ldquo;{study.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author Profile */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {study.author}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {study.role}
                      </div>
                    </div>

                    <div className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-semibold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 self-start sm:self-auto">
                      GA4 &bull; CRM VERIFIED
                    </div>
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
