import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  FileText, 
  Check, 
  Building2, 
  Briefcase,
  BarChart2,
  Lock
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
    <section className="relative min-h-[calc(100vh-114px)] flex flex-col justify-center py-10 sm:py-14 lg:py-16 overflow-hidden bg-[#060810] border-b border-white/10">
      
      {/* 
        AURORA TYPE STACKED LAYERED COLORS BACKGROUND (Not a plain blurry gradient):
        - Black: Deep cosmic obsidian foundation (#060810)
        - Stacked Layer 1: Royal & Electric Blue sweeping ribbon band
        - Stacked Layer 2: Cyan & Ice White overlapping ribbon
        - Stacked Layer 3: Vibrant Emerald Green aurora curtain
        - Stacked Layer 4: Mint Green & Pure White light crest ribbon
        - Striated 105° Aurora pleated light columns
        - No bottom fade (pure crisp contrast to bottom edge)
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#060810]">
        
        {/* Dark Obsidian Black Foundation */}
        <div className="absolute inset-0 bg-[#060810]" />

        {/* Stacked Organic Aurora Ribbon Layers (SVG - Inline for Zero Latency Instant Paint) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-85" 
          viewBox="0 0 1440 900" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Layer 1: Stacked Royal & Electric Blue */}
            <linearGradient id="auroraBlueStack" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#2563EB" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#0284C7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#060810" stopOpacity="0" />
            </linearGradient>

            {/* Layer 2: Stacked Cyan & Ice White Accent */}
            <linearGradient id="auroraCyanWhiteStack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#060810" stopOpacity="0" />
            </linearGradient>

            {/* Layer 3: Stacked Emerald Green Curtain */}
            <linearGradient id="auroraGreenStack" x1="100%" y1="0%" x2="0%" y2="90%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#10B981" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#34D399" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#060810" stopOpacity="0" />
            </linearGradient>

            {/* Layer 4: Stacked Mint & Pure White Crest Ribbon */}
            <linearGradient id="auroraMintWhiteStack" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#060810" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Stacked Ribbon 1: Deep Blue undulating curtain */}
          <path 
            d="M-100,-50 C250,220 550,80 900,260 C1250,440 1450,200 1600,120 L1600,-50 Z" 
            fill="url(#auroraBlueStack)" 
          />

          {/* Stacked Ribbon 2: Electric Cyan & Ice Light Ribbon */}
          <path 
            d="M-50,60 C320,280 700,130 1080,310 C1320,420 1480,280 1600,200 L1600,60 C1400,160 1150,80 850,200 C550,320 200,140 -50,-20 Z" 
            fill="url(#auroraCyanWhiteStack)" 
            opacity="0.8" 
          />

          {/* Stacked Ribbon 3: Emerald Green sweeping curtain */}
          <path 
            d="M1600,-50 C1250,160 950,340 650,200 C350,60 120,280 -100,360 L-100,-50 Z" 
            fill="url(#auroraGreenStack)" 
            opacity="0.85" 
          />

          {/* Stacked Ribbon 4: Mint & Pure White Crest Ribbon */}
          <path 
            d="M1600,140 C1320,320 980,200 720,400 C480,580 160,320 -100,440 L-100,220 C180,120 480,340 780,180 C1050,40 1350,220 1600,80 Z" 
            fill="url(#auroraMintWhiteStack)" 
            opacity="0.75" 
          />

          {/* Stacked Ribbon 5: Luminous Pure White Light Beam piercing center */}
          <path 
            d="M350,-50 C520,140 740,60 960,180 C1140,280 1300,120 1420,-50 Z" 
            fill="#FFFFFF" 
            opacity="0.3" 
          />
        </svg>

        {/* Aceternity-style Stacked Aurora Curtain Striations (Vertical/Diagonal Light Columns) */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(105deg,
                transparent 0%,
                transparent 5%,
                rgba(37, 99, 235, 0.45) 5.5%,
                rgba(59, 130, 246, 0.55) 7.5%,
                rgba(255, 255, 255, 0.65) 8%,
                transparent 9.5%,
                transparent 13%,
                rgba(16, 185, 129, 0.5) 13.5%,
                rgba(52, 211, 153, 0.6) 15.5%,
                rgba(255, 255, 255, 0.7) 16%,
                transparent 17.5%,
                transparent 22%,
                rgba(37, 99, 235, 0.4) 22.5%,
                rgba(56, 189, 248, 0.5) 24%,
                transparent 25.5%
              )
            `,
            backgroundSize: '200% 100%',
          }}
        />

        {/* Micro-mesh star grid for crisp editorial precision */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Main Content Container - Full Viewport Initial Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Eyebrow + Headline + Subhead + Toggle + CTAs + Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 max-w-2xl mx-auto lg:max-w-none">
            
            {/* Eyebrow Tag verbatim from brief - Smooth Ground-to-Above Slide */}
            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: WP_EASE }}
              className="inline-flex items-center"
            >
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/25 shadow-lg text-xs ring-1 ring-white/10">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-300 shrink-0">
                  Dual-Capability
                </span>
                <span className="text-white font-medium tracking-tight">Silent White-Label Partner for Agencies</span>
                <span className="text-white/25 hidden sm:inline">&bull;</span>
                <span className="text-slate-300 font-normal hidden sm:inline">Direct Performance Engine for High-Growth Brands</span>
              </div>
            </motion.div>

            {/* Main Headline & Subhead - WordPress-Style Majestic Slide Up */}
            <div className="space-y-2.5 sm:space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: WP_EASE }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white font-display tracking-tight leading-[1.14]"
              >
                Your Trusted{' '}
                <span className="bg-gradient-to-r from-blue-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                  White-Label
                </span>{' '}
                Digital Marketing Partner
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: WP_EASE }}
                className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal"
              >
                Expand your agency services overnight without hiring overhead, or scale your enterprise brand with high-ROAS paid media, technical SEO, and AI search optimization (GEO/AEO).
              </motion.p>
            </div>

            {/* Dual-Audience Switcher & Action Card - Smooth Rise from Ground */}
            <motion.div 
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: WP_EASE }}
              className="space-y-3 pt-1"
            >
              {/* Segment Toggle Buttons */}
              <div className="p-1 bg-white/10 backdrop-blur-md rounded-xl flex flex-col sm:flex-row gap-1 border border-white/20 max-w-md shadow-inner">
                <button
                  onClick={() => setMode('agency')}
                  className={`flex-1 py-2.5 px-3.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    currentMode === 'agency'
                      ? 'bg-white text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Briefcase className={`w-3.5 h-3.5 shrink-0 ${currentMode === 'agency' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>For Agencies (White-Label)</span>
                </button>

                <button
                  onClick={() => setMode('enterprise')}
                  className={`flex-1 py-2.5 px-3.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    currentMode === 'enterprise'
                      ? 'bg-white text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Building2 className={`w-3.5 h-3.5 shrink-0 ${currentMode === 'enterprise' ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>For Enterprise &amp; Brands</span>
                </button>
              </div>

              {/* Segment Content & CTAs Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMode}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.22, ease: WP_EASE }}
                  className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-2xl space-y-5 max-w-2xl"
                >
                  {/* Dynamic Message Strip from brief */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.message.map((msg, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-slate-100">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/25 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/40 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{msg}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verbatim CTAs from brief - Single-line whitespace-nowrap, uniform h-12 height */}
                  <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={active.primaryCta.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 h-12 text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                    >
                      <span>{active.primaryCta.text}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    {active.secondaryCta.action === 'modal' ? (
                      <button
                        onClick={onOpenDeckModal}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 h-12 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        <span>{active.secondaryCta.text}</span>
                      </button>
                    ) : (
                      <a
                        href={active.secondaryCta.target}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-5 h-12 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                        <span>{active.secondaryCta.text}</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Trust Strip verbatim from brief - Smooth Glide from Ground */}
            <motion.div 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: WP_EASE }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2 text-xs font-medium"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-sm hover:bg-white/15 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="text-white font-medium">100% NDA Protected</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-sm hover:bg-white/15 transition-colors">
                <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">Zero Hiring Overhead</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-sm hover:bg-white/15 transition-colors">
                <TrendingUp className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                <span className="text-white font-medium font-mono">$1.2M+ Monthly Revenue</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Sleek Elevated Dashboard Showcase (Optimized for Fast LCP with fetchpriority & dimensions) */}
          <motion.div 
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: WP_EASE }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-slate-900/90 backdrop-blur-md p-2 group hover:border-white/35 transition-all duration-300">
              <img
                src="/images/dashboard-preview.jpg"
                alt="White-Label Digital Marketing Analytics Dashboard"
                width={580}
                height={370}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-xl object-cover object-top h-[260px] sm:h-[320px] lg:h-[370px]"
              />

              {/* Overlay Glass Badges - Static indicator, no blinking */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/25 shadow-lg text-[11px] font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Unbranded Client Portal</span>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 shadow-xl text-xs font-bold text-emerald-300">
                <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>5.8× Attributable ROAS</span>
              </div>

              <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-blue-500/35 text-[10px] font-mono text-blue-300">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Wholesale Margin: 60%+</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
