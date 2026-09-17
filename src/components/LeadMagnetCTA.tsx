'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface LeadMagnetCTAProps {
  onOpenDeckModal: () => void;
}

export const LeadMagnetCTA: React.FC<LeadMagnetCTAProps> = ({ onOpenDeckModal }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onOpenDeckModal();
      }, 400);
    }
  };

  return (
    <section 
      id="contact-consultation" 
      className="relative w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* High-Resolution Translucent Glass Waves & Luminous Cyan/Blue Background */}
      <div 
        className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-50 sm:opacity-60"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      />
      {/* Soft Ambient Radial and Gradient Fog to Blend Seamlessly */}
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FBFBFC] via-transparent to-[#FBFBFC] opacity-80" 
      />
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.2) 60%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Headline + Value Proposition + Guarantees */}
          <motion.div 
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CONFIDENTIAL PARTNER ACCESS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 font-display tracking-tight leading-tight">
              Ready to Scale Your Revenue or Expand Your Agency&apos;s Service Catalog?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
              Get instant access to our complete <strong className="text-slate-900 font-semibold">Wholesale Rate Card</strong>, <strong className="text-slate-900 font-semibold">Partner Deck</strong>, and <strong className="text-slate-900 font-semibold">Mutual Non-Circumvention Agreement</strong>, or speak directly with our strategy team.
            </p>

            {/* Security & Reassurance Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">100% Non-Circumvention NDA</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">Typical Onboarding &lt; 4 Hours</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column (5 cols): Integrated Glass Action Box (Email Download + Direct Consultation) */}
          <motion.div 
            initial={{ opacity: 0, y: 52 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 space-y-5"
          >
            <div className="space-y-1">
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-600" />
                <span>Instant Package Download</span>
              </div>
              <div className="text-xs text-slate-500">
                Wholesale deck, pricing sheets &amp; client NDA.
              </div>
            </div>

            {/* Direct Email Download Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter work email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>DOWNLOAD CONFIDENTIAL DECK</span>
              </button>
            </form>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Opening partner preview package...</span>
              </div>
            )}

            {/* Divider */}
            <div className="relative flex items-center justify-center pt-1">
              <div className="border-t border-slate-200/80 w-full" />
              <span className="bg-white px-3 text-[11px] uppercase font-mono text-slate-400 absolute">
                or
              </span>
            </div>

            {/* Direct Strategy Call CTA */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Book 1-on-1 Strategic Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
