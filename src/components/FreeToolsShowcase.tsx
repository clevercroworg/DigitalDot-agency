'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Download, 
  Globe, 
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { WP_EASE, titleReveal, defaultViewport } from '../lib/animations';

interface FreeToolsShowcaseProps {
  onOpenDeckModal?: () => void;
}

export const FreeToolsShowcase: React.FC<FreeToolsShowcaseProps> = ({ onOpenDeckModal }) => {
  const [quickQuery, setQuickQuery] = useState('');
  const router = useRouter();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickQuery.trim()) {
      router.push(`/tools?q=${encodeURIComponent(quickQuery.trim())}`);
    } else {
      router.push('/tools');
    }
  };

  return (
    <section id="free-tools" className="py-20 sm:py-24 bg-[#070A1E] text-white relative overflow-hidden border-b border-white/10">
      
      {/* Background Ambient Flare & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
        
        {/* Subtle grid */}
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={titleReveal}
            className="inline-flex items-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/35 text-[11px] font-semibold text-blue-300 tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.25)] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="tracking-wider uppercase font-mono font-bold">
                Proprietary Agency Intel &bull; 100% Free
              </span>
            </div>
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={titleReveal}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight leading-[1.15]"
          >
            Free Keyword Search Volume &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              Google SERP Rank Tools
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.1, ease: WP_EASE }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Discover how many prospective clients search for your services, estimate high-intent CPC bid ranges, and inspect exactly where your website ranks on Google in real-time.
          </motion.p>
        </div>

        {/* ================= INTERACTIVE QUICK LAUNCH BAR ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.65, delay: 0.16, ease: WP_EASE }}
          className="max-w-3xl mx-auto"
        >
          <form 
            onSubmit={handleQuickSubmit}
            className="p-2 sm:p-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder="Enter a keyword or website URL (e.g. best digital marketing agency)..."
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2 shrink-0"
            >
              <span>Analyze Keyword &amp; SERP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Pill suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-[11px] text-slate-400">
            <span>Popular searches:</span>
            {['white label ppc', 'best digital marketing agency', 'technical seo audit', 'hipaa compliant marketing'].map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => router.push(`/tools?q=${encodeURIComponent(item)}`)}
                className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-blue-900/40 text-slate-300 hover:text-blue-300 border border-white/10 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================= 2 FEATURE SPOTLIGHT CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Card 1: Keyword Volume & Discovery Tool */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.65, delay: 0.2, ease: WP_EASE }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-blue-500/40 shadow-2xl transition-all duration-300 flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-inner">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-blue-300 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-500/30">
                  WORDSTREAM ELEVATED
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-blue-300 transition-colors">
                  Keyword Search Volume &amp; CPC Discovery
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Real-time Google Suggest volume mining. Discover monthly search demand, low and high-range Google Ads bids, and commercial intent classification.
                </p>
              </div>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Monthly Search Volume Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Top of Page CPC Bids (Low/High)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Competition Scoring (Low/Med/High)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1-Click CSV Keyword Export</span>
                </div>
              </div>

              {/* Visual Mini Preview Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>SAMPLE INTELLIGENCE RESULT</span>
                  <span className="text-emerald-400 font-bold">5,400 Vol/mo</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>best digital marketing agency</span>
                  <span className="font-mono text-cyan-300">$1.54 - $14.13 CPC</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push('/tools?tab=keywords')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all hover:-translate-y-0.5 mt-2"
            >
              <span>Launch Keyword Volume Tool</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </motion.div>

          {/* Card 2: Google SERP & Rank Checker */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.65, delay: 0.28, ease: WP_EASE }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-cyan-500/40 shadow-2xl transition-all duration-300 flex flex-col justify-between group space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shadow-inner">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  REAL-TIME SERP AUDIT
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  Google SERP Rank &amp; Position Checker
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Pinpoint where any website or agency domain ranks on Google for target keywords. Inspect snippets, competitor leaderboards, and AI overview visibility.
                </p>
              </div>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Exact Rank Position (#1 to #100)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Google Snippet &amp; URL Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Top 10 Competitor Leaderboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Detected SERP Features (AI Overviews)</span>
                </div>
              </div>

              {/* Visual Mini Preview Box */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>LIVE SERP VERIFICATION</span>
                  <span className="text-cyan-300 font-bold">Rank #1 &bull; Page 1</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>digitaldot.agency</span>
                  <span className="text-emerald-400 text-[11px]">Featured Sitelinks</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => router.push('/tools?tab=serp')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all hover:-translate-y-0.5 mt-2"
            >
              <span>Launch SERP Rank Checker</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
