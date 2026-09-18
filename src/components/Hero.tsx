'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket,
  TrendingUp,
  Layers,
  Star,
  Clock,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Play,
  Briefcase,
  Building2,
  Check,
  FileText
} from 'lucide-react';
import { AUDIENCE_MODES } from '../data/content';
import { WP_EASE } from '../lib/animations';

interface HeroProps {
  currentMode: 'agency' | 'enterprise';
  setMode: (mode: 'agency' | 'enterprise') => void;
  onOpenDeckModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentMode, setMode, onOpenDeckModal }) => {
  const active = AUDIENCE_MODES[currentMode];

  return (
    <section className="relative overflow-hidden bg-[#080C24] border-b border-white/10 text-white pt-6 sm:pt-8 pb-8 sm:pb-10">
      
      {/* 
        PRECISE ATMOSPHERIC BACKGROUND MATCHING REFERENCE:
        - Deep space midnight navy (#080C24)
        - Ambient purple/indigo radial glow behind radar (circle at 75% 45%)
        - Warm ambient coral/orange glow on top-left (#FF5722)
        - Crisp coordinate grid lines
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Midnight base */}
        <div className="absolute inset-0 bg-[#080C24]" />

        {/* Ambient radial glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#FF5722]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/25 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[110px]" />

        {/* Crisp grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Faint ambient radar arcs */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] rounded-full border border-purple-500/[0.04] pointer-events-none" />
      </div>

      {/* COMPACT MAIN HERO ROW (Left Content + Right Orbital Radar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 max-w-2xl mx-auto lg:max-w-none text-left">
            
            {/* Eyebrow Pill with Orange Dot (Reference Style) */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: WP_EASE }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#291A18]/90 border border-[#FF5722]/35 text-[11px] font-semibold text-[#FF7043] tracking-wide shadow-[0_0_15px_rgba(255,87,34,0.2)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse shadow-[0_0_6px_rgba(255,87,34,0.9)]" />
                <span className="tracking-wider uppercase font-mono font-bold">
                  {active.badge} &bull; Global Delivery
                </span>
              </div>
            </motion.div>

            {/* Headline - Bold White + Fiery Orange Highlight (#FF5722) */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.06, ease: WP_EASE }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-white font-display tracking-tight leading-[1.12]"
              >
                We Power Your{' '}
                <span className="text-[#FF5722] drop-shadow-sm font-extrabold">
                  {active.headlineHighlight}
                </span>{' '}
                With Results-Driven
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: WP_EASE }}
                className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal"
              >
                A full-service white-label digital marketing agency. We craft strategies that turn{' '}
                <strong className="text-white font-semibold">visitors into customers</strong> and your brand into a{' '}
                <strong className="text-white font-semibold">market leader</strong>.
              </motion.p>
            </div>

            {/* Dual Audience Switcher (Preserves All Original Content) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: WP_EASE }}
              className="space-y-3 pt-0.5"
            >
              {/* Compact Segment Toggle Buttons */}
              <div className="p-1 bg-white/[0.05] backdrop-blur-md rounded-xl inline-flex flex-col sm:flex-row gap-1 border border-white/10 shadow-inner">
                <button
                  onClick={() => setMode('agency')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    currentMode === 'agency'
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>For Agencies (White-Label)</span>
                </button>

                <button
                  onClick={() => setMode('enterprise')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    currentMode === 'enterprise'
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>For Enterprise &amp; Brands</span>
                </button>
              </div>

              {/* Dynamic Value Strip (4 Bullets) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl"
                >
                  {active.message.map((msg, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight font-medium">{msg}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons - Reference Orange + Ghost Outlined */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <a
                  href={active.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-5 h-10 sm:h-11 text-xs sm:text-sm font-bold text-white bg-[#FF5722] hover:bg-[#E64A19] rounded-xl shadow-[0_4px_20px_rgba(255,87,34,0.35)] hover:shadow-[0_6px_25px_rgba(255,87,34,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{active.primaryCta.text}</span>
                </a>

                {active.secondaryCta.action === 'modal' ? (
                  <button
                    onClick={onOpenDeckModal}
                    className="inline-flex items-center justify-center gap-1.5 px-4 h-10 sm:h-11 text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/30 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    <span>{active.secondaryCta.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>
                ) : (
                  <a
                    href={active.secondaryCta.target}
                    className="inline-flex items-center justify-center gap-1.5 px-4 h-10 sm:h-11 text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/30 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{active.secondaryCta.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                )}
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN (Compact Orbital Radar Constellation) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-2 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.12, ease: WP_EASE }}
              className="relative w-full max-w-[420px] sm:max-w-[440px] h-[360px] sm:h-[390px] flex items-center justify-center"
            >
              
              {/* Radial Purple Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/25 via-indigo-900/20 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Concentric Radar Pulse Waves */}
              <div className="absolute w-[150px] h-[150px] rounded-full border border-purple-500/40 animate-radar-wave-1 pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-indigo-400/30 animate-radar-wave-2 pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-400/20 animate-radar-wave-3 pointer-events-none" />

              {/* Static Orbit Ring 1 */}
              <div className="absolute w-[190px] sm:w-[210px] h-[190px] sm:h-[210px] rounded-full border border-purple-500/25 pointer-events-none" />

              {/* Rotating Orbit Ring 2 with Cyan Satellite */}
              <div className="absolute w-[280px] sm:w-[310px] h-[280px] sm:h-[310px] rounded-full border border-dashed border-indigo-400/25 pointer-events-none">
                <div className="w-full h-full animate-orbit-slow relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                </div>
              </div>

              {/* Reverse Rotating Orbit Ring 3 with Amber Satellite */}
              <div className="absolute w-[360px] sm:w-[390px] h-[360px] sm:h-[390px] rounded-full border border-white/[0.08] pointer-events-none">
                <div className="w-full h-full animate-orbit-reverse relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
                </div>
              </div>

              {/* CENTER HUB: Rocket Core Node (Reference Style) */}
              <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#19103C] to-[#0A071E] border-2 border-purple-500/70 shadow-[0_0_35px_rgba(168,85,247,0.45)] flex flex-col items-center justify-center p-2 animate-pulse-hub group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.4)] group-hover:rotate-12 transition-transform">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono font-bold tracking-widest text-purple-200 mt-1 uppercase text-center leading-tight">
                  DIGITALDOT<br />CORE
                </span>
              </div>

              {/* ================= 6 SATELLITE CARDS (COMPACT & SLEEK) ================= */}

              {/* 1. TOP-CENTER: 120+ Campaigns */}
              <div className="absolute top-0 left-1/2 -translate-x-1/4 z-30 animate-float-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-emerald-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white leading-none">120+ Campaigns</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS ALL CHANNELS</div>
                  </div>
                </div>
              </div>

              {/* 2. TOP-LEFT: 6 Core Services */}
              <div className="absolute top-12 -left-3 sm:-left-1 z-30 animate-float-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-blue-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <div className="w-5 h-5 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                    <Layers className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">6 Core Services</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">FULL-FUNNEL ENGINE</div>
                  </div>
                </div>
              </div>

              {/* 3. TOP-RIGHT: Revenue */}
              <div className="absolute top-16 -right-3 sm:-right-1 z-30 animate-float-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-orange-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <div className="w-5 h-5 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">{active.highlightMetric.value} Lift</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">DOCUMENTED ROI</div>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM-LEFT: White-Label / NDA */}
              <div className="absolute bottom-14 -left-3 sm:-left-1 z-30 animate-float-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-purple-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <div className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shrink-0">
                    <Star className="w-3 h-3 fill-purple-400/40" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">100% White-Label</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">STRICT NDA GUARANTEE</div>
                  </div>
                </div>
              </div>

              {/* 5. BOTTOM-RIGHT: Avg ROI */}
              <div className="absolute bottom-12 -right-3 sm:-right-1 z-30 animate-float-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-cyan-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <div className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">3x-5x Avg ROI</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS ALL SERVICES</div>
                  </div>
                </div>
              </div>

              {/* 6. BOTTOM-CENTER: Trusted by 100+ Clients */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/3 z-30 animate-float-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1028]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-emerald-500/50 hover:bg-[#0E1538] transition-all duration-200">
                  <div className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">Trusted by 100+ Clients</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS MULTIPLE INDUSTRIES</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM FLOATING SLATE DOCK (REFERENCE MATCH) ================= */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: WP_EASE }}
          className="rounded-[28px] sm:rounded-[40px] bg-[#373E4F]/90 backdrop-blur-2xl border border-white/20 px-4 py-3 sm:px-6 sm:py-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.55)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          
          {/* Item 1: Trusted By */}
          <div className="flex flex-col text-center md:text-left shrink-0">
            <span className="text-white/85 text-xs sm:text-sm font-semibold flex items-center justify-center md:justify-start gap-1.5">
              Trusted By <span className="text-amber-400">✦</span> <span className="text-white/60">✱</span>
            </span>
            <span className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5">
              100+ Business
            </span>
          </div>

          {/* Item 2: Video Thumbnail Preview with Play Button */}
          <div 
            onClick={onOpenDeckModal}
            className="relative w-36 sm:w-40 h-16 sm:h-18 rounded-xl sm:rounded-2xl overflow-hidden border border-white/25 shadow-md group cursor-pointer shrink-0"
            title="Watch Agency Overview"
          >
            <img 
              src="/images/agency-team-analysis.jpg" 
              alt="Strategy Brainstorming and Analysis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/10 transition-colors" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-white/40 animate-ping-slow pointer-events-none" />
                <div className="w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-slate-950 ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: 5-Star Rating */}
          <div className="flex flex-col text-center md:text-left shrink-0">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-medium text-white/95 mt-1 leading-snug">
              Rated 4.9/5 From Our Trusted Clients
            </p>
          </div>

          {/* Item 4: Traffic / Metric Card (Clean White Box like Reference) */}
          <div className="bg-white rounded-xl sm:rounded-2xl px-4 py-2 sm:py-2.5 shadow-lg flex flex-col justify-center w-full md:w-auto min-w-[160px]">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Monthly Traffic
            </span>
            <span className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-none mt-1">
              23.4k
            </span>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1.5">
              <div className="h-full bg-slate-900 rounded-full w-3/4" />
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
