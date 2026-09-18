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
    <section className="relative bg-[#070B1E] text-white pt-6 sm:pt-9 pb-2 overflow-visible border-b border-white/10">
      
      {/* 
        DIGITALDOT BRANDED ATMOSPHERIC BACKGROUND:
        - Deep space obsidian navy (#070B1E)
        - Electric royal blue & cyan ambient flares
        - Subtle coordinate grid
        - Overflow hidden strictly contained to this background container
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Obsidian base */}
        <div className="absolute inset-0 bg-[#070B1E]" />

        {/* Ambient brand radial glows */}
        <div className="absolute -top-24 -left-24 w-72 sm:w-80 h-72 sm:h-80 bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-60 sm:w-[350px] h-60 sm:h-[350px] bg-cyan-500/15 rounded-full blur-[100px]" />

        {/* Crisp grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Faint ambient radar arcs */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-[650px] h-[650px] rounded-full border border-blue-500/[0.05] pointer-events-none" />
      </div>

      {/* COMPACT MAIN HERO ROW (Left Content + Right Orbital Radar) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:max-w-none text-left">
            
            {/* Eyebrow Pill with Electric Blue Glow */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: WP_EASE }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/35 text-[10px] sm:text-[11px] font-semibold text-blue-300 tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.2)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.9)]" />
                <span className="tracking-wider uppercase font-mono font-bold">
                  {active.badge} &bull; Global Delivery
                </span>
              </div>
            </motion.div>

            {/* Headline - Bold White + Electric Blue / Cyan Gradient Highlight */}
            <div className="space-y-1.5 sm:space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.06, ease: WP_EASE }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-white font-display tracking-tight leading-[1.12]"
              >
                We Power Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 font-extrabold drop-shadow-sm">
                  {active.headlineHighlight}
                </span>{' '}
                With Results-Driven
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 16 }}
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: WP_EASE }}
              className="space-y-2.5 sm:space-y-3 pt-0.5"
            >
              {/* Compact Segment Toggle Buttons */}
              <div className="p-1 bg-white/[0.05] backdrop-blur-md rounded-xl inline-flex flex-col sm:flex-row gap-1 border border-white/10 shadow-inner w-full sm:w-auto">
                <button
                  onClick={() => setMode('agency')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
                    currentMode === 'agency'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/35'
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
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/35'
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
                  className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 max-w-xl"
                >
                  {active.message.map((msg, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                        <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight font-medium">{msg}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5">
                <a
                  href={active.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-5 h-10 sm:h-11 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{active.primaryCta.text}</span>
                </a>

                {active.secondaryCta.action === 'modal' ? (
                  <button
                    onClick={onOpenDeckModal}
                    className="inline-flex items-center justify-center gap-1.5 px-4 h-10 sm:h-11 text-xs sm:text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-white/30 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-300 shrink-0" />
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

          {/* ================= RIGHT COLUMN (Orbital Radar Constellation - Desktop View) ================= */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center py-2 sm:py-4 lg:py-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.12, ease: WP_EASE }}
              className="relative w-full max-w-[440px] h-[380px] flex items-center justify-center mx-auto"
            >
              
              {/* Radial Blue/Indigo Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/25 via-indigo-900/20 to-cyan-900/10 rounded-full blur-2xl pointer-events-none" />

              {/* Concentric Radar Pulse Waves */}
              <div className="absolute w-[150px] h-[150px] rounded-full border border-blue-500/40 animate-radar-wave-1 pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] rounded-full border border-cyan-400/30 animate-radar-wave-2 pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-indigo-400/20 animate-radar-wave-3 pointer-events-none" />

              {/* Static Orbit Ring 1 */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-blue-500/25 pointer-events-none" />

              {/* Rotating Orbit Ring 2 with Cyan Satellite */}
              <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-cyan-400/25 pointer-events-none">
                <div className="w-full h-full animate-orbit-slow relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                </div>
              </div>

              {/* Reverse Rotating Orbit Ring 3 with Blue Satellite */}
              <div className="absolute w-[370px] h-[370px] rounded-full border border-white/[0.08] pointer-events-none">
                <div className="w-full h-full animate-orbit-reverse relative">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
                </div>
              </div>

              {/* CENTER HUB: Rocket Core Node */}
              <div className="relative z-20 w-26 h-26 rounded-full bg-gradient-to-b from-[#0F1738] to-[#070B1F] border-2 border-blue-500/70 shadow-[0_0_35px_rgba(37,99,235,0.45)] flex flex-col items-center justify-center p-2 animate-pulse-hub group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)] group-hover:rotate-12 transition-transform">
                  <Rocket className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-[8px] font-mono font-bold tracking-widest text-blue-200 mt-1 uppercase text-center leading-tight">
                  DIGITALDOT<br />CORE
                </span>
              </div>

              {/* Satellite Badges */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 animate-float-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-emerald-500/50 transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white leading-none">120+ Campaigns</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ACROSS CHANNELS</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-12 left-0 z-30 animate-float-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-blue-500/50 transition-all">
                  <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                    <Layers className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">6 Services</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">FULL-FUNNEL</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-14 right-0 z-30 animate-float-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-cyan-500/50 transition-all">
                  <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">{active.highlightMetric.value} Lift</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">DOCUMENTED ROI</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 z-30 animate-float-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-indigo-500/50 transition-all">
                  <div className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shrink-0">
                    <Star className="w-3 h-3 fill-indigo-400/40" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">100% White-Label</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">STRICT NDA</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-0 z-30 animate-float-5">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-cyan-500/50 transition-all">
                  <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">3x-5x Avg ROI</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ALL CHANNELS</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 animate-float-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D24]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-emerald-500/50 transition-all">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">Trusted by 100+</div>
                    <div className="text-[8px] font-medium text-slate-400 tracking-wider uppercase mt-0.5">ALL INDUSTRIES</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= FLOATING BRIDGE DOCK (IN BETWEEN HERO AND NEXT SECTION) ================= */}
      
      {/* 
        A. DESKTOP / TABLET VERSION (md: and up):
        - Grand authoritative pill bar
        - Taller height with generous padding (py-5 lg:py-6 px-8 lg:px-12)
        - Big bold typography, larger video thumbnail, larger stars, and prominent traffic card
        - Beautifully centered overlapping the boundary between the dark hero and white section
      */}
      <div className="hidden md:block relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mb-14 lg:-mb-16 mt-8 sm:mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: WP_EASE }}
          className="rounded-[44px] lg:rounded-[56px] bg-[#293245]/95 backdrop-blur-2xl border border-white/25 py-5 lg:py-6 px-8 lg:px-12 shadow-[0_25px_60px_rgba(0,0,0,0.65)] flex items-center justify-between gap-6"
        >
          
          {/* Item 1: Trusted By */}
          <div className="flex flex-col text-left shrink-0">
            <span className="text-white/80 text-xs lg:text-sm font-semibold flex items-center gap-1.5">
              Trusted By <span className="text-amber-400">✦</span> <span className="text-cyan-300">✱</span>
            </span>
            <span className="text-2xl lg:text-3xl font-black text-white tracking-tight mt-0.5">
              100+ Business
            </span>
          </div>

          {/* Item 2: Large Video Preview Thumbnail with Purple-Ringed Play Button */}
          <div 
            onClick={onOpenDeckModal}
            className="relative w-44 lg:w-52 h-22 lg:h-26 rounded-2xl overflow-hidden border border-white/25 shadow-lg group cursor-pointer shrink-0"
            title="Watch Agency Strategy Overview"
          >
            <img 
              src="/images/agency-team-analysis.jpg" 
              alt="Strategy Brainstorming and Analysis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
            
            {/* Centered Play Button with Indigo/Purple Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-white/40 animate-ping-slow pointer-events-none" />
                <div className="w-11 h-11 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-[3px] border-indigo-600 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: 5-Star Rating */}
          <div className="flex flex-col text-left shrink-0">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs lg:text-sm font-bold text-white/95 mt-1.5 leading-snug max-w-[180px]">
              Rated 4.9/5 From Our Trusted Clients
            </p>
          </div>

          {/* Item 4: Traffic / Metric Card (Prominent White Box) */}
          <div className="bg-white rounded-2xl px-6 py-3.5 lg:py-4 shadow-xl flex flex-col justify-center shrink-0 min-w-[190px] lg:min-w-[210px]">
            <span className="text-[10px] lg:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Monthly Traffic
            </span>
            <span className="text-2xl lg:text-3xl font-black text-slate-950 tracking-tight leading-none mt-1">
              23.4k
            </span>
            <div className="text-[11px] font-semibold text-slate-400 mt-1">
              Monthly Traffic
            </div>
            <div className="w-full h-1.5 lg:h-2 bg-slate-100 rounded-full overflow-hidden mt-1.5">
              <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-3/4" />
            </div>
          </div>

        </motion.div>
      </div>

      {/* 
        B. MOBILE VERSION (< md):
        - Matches reference mobile screenshot exactly
        - Sits directly below CTAs overlapping boundary
        - Charcoal dark card with 3 internal stacked components:
          1. "Trusted By ✦ ✱ 100+ Business 🌐 ✴"
          2. Full-width video preview card with purple-ringed play button
          3. White review card (5 stars + divider + "Rated 4.9/5 From Our Trusted Clients")
          4. White metric card ("Monthly Traffic" + divider + "23.4k" + progress bar)
      */}
      <div className="md:hidden relative z-30 max-w-sm mx-auto px-4 w-full -mb-16 mt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: WP_EASE }}
          className="rounded-[28px] bg-[#161B26] border border-white/15 p-5 shadow-2xl space-y-4"
        >
          
          {/* Header text from reference mobile screenshot */}
          <div className="flex flex-col text-left">
            <div className="text-xl font-black text-white tracking-tight flex items-center gap-1.5 flex-wrap">
              <span>Trusted By</span>
              <span className="text-white">✦</span>
              <span className="text-white">✱</span>
              <span>100+</span>
            </div>
            <div className="text-xl font-black text-white tracking-tight flex items-center gap-1.5 mt-0.5">
              <span>Business</span>
              <span className="text-lg">🌐</span>
              <span className="text-sm">✴</span>
            </div>
          </div>

          {/* 1. Full-Width Video Card with Purple Ring Play Button */}
          <div 
            onClick={onOpenDeckModal}
            className="relative w-full h-44 rounded-2xl overflow-hidden bg-white p-1 border border-white/10 shadow-md group cursor-pointer"
            title="Watch Agency Strategy Overview"
          >
            <img 
              src="/images/agency-team-analysis.jpg" 
              alt="Strategy Brainstorming and Analysis"
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
            
            {/* Play Button with Purple Ring matching reference screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-white/40 animate-ping-slow pointer-events-none" />
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-[3.5px] border-indigo-600 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. White Review Card with Stars and Divider */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-900 shadow-sm text-left">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <div className="border-b border-slate-100 my-2.5" />
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              Rated 4.9/5 From Our Trusted Clients
            </p>
          </div>

          {/* 3. White Metric Card with Divider and Progress Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-slate-900 shadow-sm text-left">
            <div className="text-sm sm:text-base font-bold text-slate-900">
              Monthly Traffic
            </div>
            <div className="border-b border-slate-100 my-2" />
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none mt-1">
              23.4k
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              Monthly Traffic
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-3/5" />
            </div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};
