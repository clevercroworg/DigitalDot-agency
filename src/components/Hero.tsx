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
  Sparkles
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
    <section className="relative min-h-screen flex flex-col justify-between pt-12 sm:pt-16 pb-12 lg:pb-16 overflow-hidden bg-[#070A1C] border-b border-white/10 text-white">
      
      {/* 
        COSMIC TECH RADAR & GRID BACKGROUND
        - Deep space navy canvas (#070A1C)
        - Crisp coordinate grid lines
        - Left warm amber/coral ambient glow
        - Right electric purple/indigo radar ambient glow
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep navy foundation */}
        <div className="absolute inset-0 bg-[#070A1C]" />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px]" />

        {/* Crisp Tech Coordinate Grid */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Faint Concentric Global Radar Rings behind section */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[850px] h-[850px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[1100px] h-[1100px] rounded-full border border-white/[0.02] pointer-events-none" />
      </div>

      {/* MAIN CONTENT ROW (Hero Left + Radar Constellation Right) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-6 max-w-2xl mx-auto lg:max-w-none text-left">
            
            {/* Eyebrow Pill with Glowing Coral Dot */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: WP_EASE }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/30 text-xs font-semibold text-orange-400 tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                <span className="tracking-wider uppercase text-[11px] font-mono font-bold">
                  Award-Winning White-Label Agency &bull; Global Delivery
                </span>
              </div>
            </motion.div>

            {/* Main Headline styled like reference */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: WP_EASE }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white font-display tracking-tight leading-[1.12]"
              >
                We Power Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-amber-400 drop-shadow-sm">
                  {currentMode === 'agency' ? 'SEO & White-Label' : 'Brand Growth & ROAS'}
                </span>{' '}
                With Results-Driven Scale
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: WP_EASE }}
                className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal"
              >
                A full-service white-label digital marketing agency. We craft high-performance strategies that turn{' '}
                <strong className="text-white font-semibold">visitors into customers</strong> and your brand into a{' '}
                <strong className="text-white font-semibold">market leader</strong>.
              </motion.p>
            </div>

            {/* Dual Audience Switcher (Agency vs Enterprise) */}
            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: WP_EASE }}
              className="space-y-4"
            >
              {/* Segment Toggle Buttons */}
              <div className="p-1 bg-white/[0.06] backdrop-blur-md rounded-xl inline-flex flex-col sm:flex-row gap-1 border border-white/15 shadow-inner">
                <button
                  onClick={() => setMode('agency')}
                  className={`py-2 px-3.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    currentMode === 'agency'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>For Agencies (White-Label)</span>
                </button>

                <button
                  onClick={() => setMode('enterprise')}
                  className={`py-2 px-3.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    currentMode === 'enterprise'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>For Enterprise &amp; Brands</span>
                </button>
              </div>

              {/* Dynamic Value Strip */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl"
                >
                  {active.message.map((msg, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{msg}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Verbatim CTAs styled like reference */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 h-12 text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-[0_4px_25px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-white shrink-0" />
                  <span>Get Free Consultation</span>
                </a>

                <button
                  onClick={onOpenDeckModal}
                  className="inline-flex items-center justify-center gap-2 px-5 h-12 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/30 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                </button>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN (Interactive Orbital Radar Constellation) ================= */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center py-6 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: WP_EASE }}
              className="relative w-full max-w-[500px] sm:max-w-[540px] h-[460px] sm:h-[500px] flex items-center justify-center"
            >
              
              {/* Radial Glowing Background behind the radar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-indigo-900/30 to-blue-900/10 rounded-full blur-3xl pointer-events-none" />

              {/* Concentric Radar Wave Pulses Expanding Outward */}
              <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500/40 animate-radar-wave-1 pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-indigo-400/30 animate-radar-wave-2 pointer-events-none" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/20 animate-radar-wave-3 pointer-events-none" />

              {/* Orbit Ring 1 (Inner Static) */}
              <div className="absolute w-[230px] sm:w-[250px] h-[230px] sm:h-[250px] rounded-full border border-purple-500/25 pointer-events-none" />

              {/* Orbit Ring 2 (Middle with Rotating Cyan Node) */}
              <div className="absolute w-[330px] sm:w-[370px] h-[330px] sm:h-[370px] rounded-full border border-dashed border-indigo-400/25 pointer-events-none">
                <div className="w-full h-full animate-orbit-slow relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>
              </div>

              {/* Orbit Ring 3 (Outer with Reverse Rotating Amber Node) */}
              <div className="absolute w-[430px] sm:w-[480px] h-[430px] sm:h-[480px] rounded-full border border-white/[0.08] pointer-events-none">
                <div className="w-full h-full animate-orbit-reverse relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]" />
                </div>
              </div>

              {/* CENTER HUB: Pulsing Rocket Core Node */}
              <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#19103C] to-[#0A071E] border-2 border-purple-500/70 shadow-[0_0_40px_rgba(168,85,247,0.45)] flex flex-col items-center justify-center p-3 animate-pulse-hub group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:rotate-12 transition-transform">
                  <Rocket className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-200 mt-2 uppercase text-center leading-tight">
                  DIGITALDOT<br />CORE ENGINE
                </span>
              </div>

              {/* ================= 6 FLOATING SATELLITE STAT CARDS ================= */}

              {/* 1. TOP-CENTER: 120+ Campaigns */}
              <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/4 z-30 animate-float-1">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-emerald-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">120+ Campaigns</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">RUNNING ACROSS ALL CHANNELS</div>
                  </div>
                </div>
              </div>

              {/* 2. TOP-LEFT: 6 Core Services */}
              <div className="absolute top-16 -left-2 sm:left-0 z-30 animate-float-2">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-blue-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">6 Core Services</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">COMPLETE DIGITAL SOLUTIONS</div>
                  </div>
                </div>
              </div>

              {/* 3. TOP-RIGHT: $1.2M+ Revenue */}
              <div className="absolute top-20 -right-2 sm:right-0 z-30 animate-float-3">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-orange-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <div className="w-6 h-6 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">$1.2M+ Revenue</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">GENERATED FOR CLIENTS</div>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM-LEFT: 100% White-Label / 10+ Years */}
              <div className="absolute bottom-20 -left-2 sm:left-2 z-30 animate-float-4">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-purple-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-purple-400/40" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">100% White-Label</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">STRICT NDA GUARANTEE</div>
                  </div>
                </div>
              </div>

              {/* 5. BOTTOM-RIGHT: 3x-5x Avg ROI */}
              <div className="absolute bottom-16 -right-2 sm:right-2 z-30 animate-float-5">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-cyan-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">3x-5x Avg ROI</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS ALL SERVICES</div>
                  </div>
                </div>
              </div>

              {/* 6. BOTTOM-CENTER: Trusted by 100+ Clients */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/3 z-30 animate-float-6">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0B1028]/90 backdrop-blur-xl border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:border-emerald-500/50 hover:bg-[#0E1538] transition-all duration-200 group">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white leading-none">Trusted by 100+ Clients</div>
                    <div className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS MULTIPLE INDUSTRIES</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM FLOATING SOCIAL PROOF DOCK ================= */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: WP_EASE }}
          className="rounded-[32px] sm:rounded-[44px] bg-[#222838]/85 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 lg:px-8 lg:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          
          {/* Item 1: Trusted By Text */}
          <div className="flex flex-col text-center md:text-left shrink-0">
            <span className="text-white/80 text-xs sm:text-sm font-semibold flex items-center justify-center md:justify-start gap-1.5">
              Trusted By <span className="text-amber-400">✦</span> <span className="text-indigo-400">✱</span>
            </span>
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
              100+ Business
            </span>
          </div>

          {/* Item 2: Video Preview Thumbnail with Pulsing Play Button */}
          <div 
            onClick={onOpenDeckModal}
            className="relative w-40 sm:w-48 h-20 rounded-2xl overflow-hidden border border-white/25 shadow-lg group cursor-pointer shrink-0"
            title="Watch Agency Overview"
          >
            <img 
              src="/images/agency-team-analysis.jpg" 
              alt="Strategy Brainstorming and Analysis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
            
            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-white/40 animate-ping-slow pointer-events-none" />
                <div className="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: 5-Star Rating & Reviews */}
          <div className="flex flex-col text-center md:text-left shrink-0">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium text-white/90 mt-1 leading-snug">
              Rated 4.9/5 From Our Trusted Clients
            </p>
          </div>

          {/* Item 4: Traffic / Attributable ROI Box */}
          <div className="bg-white rounded-2xl px-5 py-3 sm:py-3.5 shadow-xl flex flex-col justify-center w-full md:w-auto min-w-[180px]">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Monthly Traffic
            </span>
            <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mt-0.5">
              23.4k
            </span>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1.5">
              <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-3/4 animate-pulse" />
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
