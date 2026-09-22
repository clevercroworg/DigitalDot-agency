'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  MessageSquare, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  FileDown,
  ChevronRight
} from 'lucide-react';
import { NAV_LINKS } from '../data/content';

interface HeaderProps {
  onOpenDeckModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDeckModal }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display leading-none">
                Digital<span className="text-blue-600">Dot</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold mt-1">
                White-Label &amp; Enterprise
              </span>
            </div>
          </a>

          {/* Desktop Nav - Always single-line, whitespace-nowrap, no wrapping */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a 
              href="#" 
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 py-2 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/5 animate-in fade-in duration-150">
                  <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Capabilities
                  </div>
                  {NAV_LINKS.services.map((service, idx) => (
                    <a
                      key={idx}
                      href="#capabilities"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {service.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button 
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                aria-expanded={workOpen}
              >
                <span>Our Work</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`} />
              </button>

              {workOpen && (
                <div className="absolute top-full left-0 w-72 py-2 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/5 animate-in fade-in duration-150">
                  <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Case Studies
                  </div>
                  {NAV_LINKS.work.map((work, idx) => (
                    <a
                      key={idx}
                      href="#case-studies"
                      onClick={() => setWorkOpen(false)}
                      className="block px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {work.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {work.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#framework" 
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Framework
            </a>
            <a 
              href="/tools" 
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50/70 transition-colors whitespace-nowrap group"
            >
              <span>Tools</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-blue-600 text-white rounded-full group-hover:bg-blue-700 transition-colors">
                FREE
              </span>
            </a>
            <a 
              href="#faqs" 
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          {/* Header Actions: Direct Comms & CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/60">
              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-white rounded-lg transition-all"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+15550192834"
                aria-label="Direct Phone"
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:partnerships@digitaldot.agency"
                aria-label="Direct Email"
                className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-white rounded-lg transition-all"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenDeckModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm whitespace-nowrap"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-600" />
              <span>Partner Deck</span>
            </button>

            <a
              href="#contact-consultation"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm shadow-slate-900/10 whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-all"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Mounted Directly to Body to Bypass Stacking Context Constraints */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-screen h-screen h-[100dvh] z-[99999] bg-white flex flex-col overflow-hidden"
            >
              {/* Header inside Mobile Menu: Brand Logo + Prominent Close Button */}
              <div className="h-20 px-4 sm:px-6 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white shadow-sm">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight text-slate-900 font-display leading-none">
                      Digital<span className="text-blue-600">Dot</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold mt-1">
                      White-Label &amp; Enterprise
                    </span>
                  </div>
                </a>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-6 space-y-6 bg-white">
                
                {/* Primary Links */}
                <div className="space-y-1">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>

                  {/* Expandable Services */}
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span>Services &amp; Capabilities</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-xs font-mono font-bold text-blue-600">5</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-1 ml-4 pl-3 border-l-2 border-slate-100 space-y-1.5 py-1">
                        {NAV_LINKS.services.map((service, idx) => (
                          <a
                            key={idx}
                            href="#capabilities"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <a
                    href="#framework"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>Partnership Framework</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href="#case-studies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>Verified Case Studies</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>

                  <a
                    href="/tools"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-blue-50/60 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="group-hover:text-blue-600 transition-colors">Free SEO &amp; Keyword Tools</span>
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-blue-600 text-white rounded-full">
                        FREE
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>

                  <a
                    href="#faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>Frequently Asked Questions</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                </div>

                {/* Direct Communication Channels */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Direct Partner Communication
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href="https://wa.me/15550192834"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/40 text-slate-700 hover:text-emerald-600 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-semibold">WhatsApp</span>
                    </a>
                    <a
                      href="tel:+15550192834"
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold">Call Direct</span>
                    </a>
                    <a
                      href="mailto:partnerships@digitaldot.agency"
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-500/40 text-slate-700 hover:text-indigo-600 transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4 text-indigo-600" />
                      <span className="text-xs font-semibold">Email Us</span>
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href="#contact-consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-4 px-4 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl text-center shadow-md flex items-center justify-center gap-2 transition-all active:translate-y-0.5"
                  >
                    <span>Book Partner Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDeckModal();
                    }}
                    className="w-full py-3.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <FileDown className="w-4 h-4 text-blue-600" />
                    <span>Download Wholesale Partner Deck</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
